const loginView = document.querySelector("#loginView");
const appView = document.querySelector("#appView");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authSubtitle = document.querySelector("#authSubtitle");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const authMessage = document.querySelector("#authMessage");
const authSubmit = document.querySelector("#authSubmit");
const authSwitchText = document.querySelector("#authSwitchText");
const authSwitch = document.querySelector("#authSwitch");
const logoutBtn = document.querySelector("#logoutBtn");
const navItems = document.querySelectorAll(".nav-item");
const moduleCards = document.querySelectorAll(".module-card");
const dashboardPage = document.querySelector("#dashboardPage");
const patientsPage = document.querySelector("#patientsPage");
const placeholderPage = document.querySelector("#placeholderPage");
const placeholderTitle = document.querySelector("#placeholderTitle");
const patientsBody = document.querySelector("#patientsBody");
const patientSearch = document.querySelector("#patientSearch");
const statusFilter = document.querySelector("#statusFilter");
const addPatientBtn = document.querySelector("#addPatientBtn");
const patientModal = document.querySelector("#patientModal");
const modalTitle = document.querySelector("#modalTitle");
const modalSubtitle = document.querySelector("#modalSubtitle");
const modalClose = document.querySelector("#modalClose");
const modalCancel = document.querySelector("#modalCancel");
const modalSave = document.querySelector("#modalSave");
const patientForm = document.querySelector("#patientForm");
const patientIndex = document.querySelector("#patientIndex");
const modalMedication = document.querySelector("#modalMedication");

let authMode = "login";
let registeredAccount = JSON.parse(localStorage.getItem("wellmeadowsAccount")) || null;

const patients = [
  {
    id: "P10234", firstName: "Anne", lastName: "Phelps", dob: "12-Dec-33", sex: "Female", maritalStatus: "Single",
    phone: "0131-332-4111", address: "44 North Bridges, Cannonmills, Edinburgh, EH1 5GH", registered: "21-Feb-95",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 84", waitingDate: "", expectedStay: "", datePlaced: "", dateLeave: "",
    kinName: "James Phelps", kinRelationship: "Father", kinAddress: "145 Rowlands Street, Paisley, PA2 5FE", kinPhone: "0141-848-2211",
    doctorName: "Dr. Helen Pearson", doctorAddress: "22 Cannongate Way, Edinburgh, EH1 6TY", doctorPhone: "0131-332-0012", medication: []
  },
  {
    id: "P10451", firstName: "Robert", lastName: "MacDonald", dob: "18-Jun-17", sex: "Male", maritalStatus: "Married",
    phone: "0131-556-8899", address: "123 High Street, Edinburgh", registered: "12-Jan-96",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 84", waitingDate: "12-Jan-96", expectedStay: "5 days", datePlaced: "12-Jan-96", dateLeave: "17-Jan-96",
    kinName: "Not recorded", kinRelationship: "", kinAddress: "", kinPhone: "", doctorName: "Local doctor referral", doctorAddress: "", doctorPhone: "",
    medication: [
      { drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "oral", units: "50", start: "24-Mar-96", finish: "24-Apr-96" },
      { drugNo: "10334", name: "Tetracycline", description: "Antibiotic", dosage: "0.5mg/ml", method: "IV", units: "10", start: "24-Mar-96", finish: "17-Apr-96" },
      { drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "oral", units: "10", start: "25-Apr-96", finish: "2-May-96" }
    ]
  },
  {
    id: "P10480", firstName: "Steven", lastName: "Parks", dob: "09-Aug-10", sex: "Male", maritalStatus: "Widowed",
    phone: "01506-78910", address: "56 George Street, Broxburn", registered: "12-Jan-96",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 79", waitingDate: "12-Jan-96", expectedStay: "4 days", datePlaced: "14-Jan-96", dateLeave: "18-Jan-96",
    kinName: "Not recorded", kinRelationship: "", kinAddress: "", kinPhone: "", doctorName: "Local doctor referral", doctorAddress: "", doctorPhone: "", medication: []
  },
  {
    id: "P10563", firstName: "David", lastName: "Black", dob: "20-Feb-23", sex: "Male", maritalStatus: "Single",
    phone: "0131-225-7766", address: "89 Princes Street, Edinburgh", registered: "13-Jan-96",
    status: "Out-Patient", ward: "Out-Patient Clinic", bed: "Bed 80", waitingDate: "13-Jan-96", expectedStay: "14 days", datePlaced: "13-Jan-96", dateLeave: "27-Jan-96",
    kinName: "Not recorded", kinRelationship: "", kinAddress: "", kinPhone: "", doctorName: "Local doctor referral", doctorAddress: "", doctorPhone: "", medication: []
  },
  {
    id: "P10604", firstName: "Ian", lastName: "Thompson", dob: "04-Nov-14", sex: "Male", maritalStatus: "Married",
    phone: "0131-447-3322", address: "34 Rose Street, Edinburgh", registered: "14-Jan-96",
    status: "Waiting List", ward: "Pending - Ward 11", bed: "Bed 87", waitingDate: "14-Jan-96", expectedStay: "10 days", datePlaced: "15-Jan-96", dateLeave: "25-Jan-96",
    kinName: "Not recorded", kinRelationship: "", kinAddress: "", kinPhone: "", doctorName: "Local doctor referral", doctorAddress: "", doctorPhone: "", medication: []
  }
];

const pageTitles = {
  staff: "Staff Management",
  wards: "Ward Management",
  appointments: "Appointments",
  medications: "Medication Tracking",
  supplies: "Supply Requisitions"
};

const formFields = ["id", "firstName", "lastName", "dob", "sex", "maritalStatus", "address", "phone", "registered", "status", "ward", "bed", "waitingDate", "expectedStay", "datePlaced", "dateLeave", "kinName", "kinRelationship", "kinAddress", "kinPhone", "doctorName", "doctorAddress", "doctorPhone"];

const fieldIds = {
  id: "modalPatientId",
  maritalStatus: "modalMarital",
  expectedStay: "modalStay",
  datePlaced: "modalDatePlaced",
  dateLeave: "modalDateLeave"
};

function getField(field) {
  return document.querySelector(`#${fieldIds[field] || "modal" + field[0].toUpperCase() + field.slice(1)}`);
}

function patientName(patient) {
  return `${patient.firstName} ${patient.lastName}`.trim() || "New Patient";
}

function ageFromDob(dob) {
  const year = Number((dob || "").slice(-2));
  if (!Number.isFinite(year)) return "";
  return String(2026 - (year > 26 ? 1900 + year : 2000 + year));
}

function statusClass(status) {
  if (status === "Out-Patient") return "out";
  if (status === "Waiting List") return "wait";
  return "in";
}

function setAuthMode(mode) {
  authMode = mode;
  const isRegister = mode === "register";

  authTitle.textContent = isRegister ? "Create Account" : "WELCOME TO WELLMEADOWS HOSPITAL";
  authSubtitle.textContent = isRegister ? "Register for staff access" : "Sign in to your account";
  authSubmit.textContent = isRegister ? "Create Account" : "Sign In";
  authSwitchText.firstChild.textContent = isRegister ? "Already have an account? " : "Don't have an account? ";
  authSwitch.textContent = isRegister ? "Sign In" : "Create Account";

  document.querySelectorAll(".register-only").forEach(el => el.classList.toggle("hidden", !isRegister));
  document.querySelectorAll(".login-only").forEach(el => el.classList.toggle("hidden", isRegister));

  authMessage.textContent = "";
}

function updateUserDisplay(account, isFirstLogin) {
  const first = account?.firstName || "John";
  const last = account?.lastName || "Smith";
  const role = account?.role || "Medical Director";
  const fullName = `${first} ${last}`;

  document.querySelector("#welcomeTitle").textContent = isFirstLogin
    ? `Welcome, ${fullName}`
    : `Welcome back, ${fullName}`;

  document.querySelector("#welcomeRole").textContent = `${role} - Staff #S001`;
  document.querySelector("#sidebarName").textContent = fullName;
  document.querySelector("#sidebarRole").textContent = role;
}

function showApp(account, isFirstLogin = false) {
  updateUserDisplay(account, isFirstLogin);
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");
  setActivePage("dashboard");
}

function setActivePage(page) {
  dashboardPage.classList.toggle("hidden", page !== "dashboard");
  patientsPage.classList.toggle("hidden", page !== "patients");
  placeholderPage.classList.toggle("hidden", page === "dashboard" || page === "patients");

  if (page !== "dashboard" && page !== "patients") {
    placeholderTitle.textContent = pageTitles[page] || "Module";
  }

  navItems.forEach(item => item.classList.toggle("active", item.dataset.page === page));
}

function renderPatients() {
  const query = patientSearch.value.trim().toLowerCase();
  const filter = statusFilter.value;

  const visible = patients.map((patient, index) => ({ patient, index })).filter(({ patient }) => {
    const matchesQuery = `${patient.id} ${patientName(patient)}`.toLowerCase().includes(query);
    const matchesStatus = filter === "All Status" || patient.status === filter;
    return matchesQuery && matchesStatus;
  });

  patientsBody.innerHTML = visible.map(({ patient, index }) => `
    <tr>
      <td><strong>${patient.id}</strong></td>
      <td><div class="patient-name"><span class="patient-avatar">◎</span>${patientName(patient)}</div></td>
      <td>${ageFromDob(patient.dob)} / ${patient.sex}</td>
      <td><div class="contact-lines"><span>☎ ${patient.phone}</span><span>⌖ ${patient.address.split(",")[0]}</span></div></td>
      <td><span class="pill ${statusClass(patient.status)}">${patient.status}</span></td>
      <td class="ward-cell">${patient.ward}${patient.bed ? `<br>${patient.bed}` : ""}</td>
      <td>
        <div class="actions">
          <button class="icon-button" data-action="view" data-index="${index}" type="button" title="View patient information">👁</button>
          <button class="icon-button edit" data-action="edit" data-index="${index}" type="button" title="Edit patient information">✎</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderMedication(medication) {
  modalMedication.innerHTML = medication.length
    ? medication.map(item => `
      <article>
        <strong>${item.name}</strong>
        <span>${item.description} | ${item.dosage} | ${item.method}</span>
        <small>Drug #${item.drugNo} | ${item.units} units/day | ${item.start} to ${item.finish}</small>
      </article>
    `).join("")
    : `<p class="empty-note">No medication recorded for this patient.</p>`;
}

function setModalReadonly(readonly) {
  patientForm.classList.toggle("readonly", readonly);
  modalSave.classList.toggle("hidden", readonly);

  formFields.forEach(field => {
    const input = getField(field);
    if (!input) return;
    input.readOnly = readonly || field === "id";
    input.disabled = readonly && input.tagName === "SELECT";
  });
}

function openPatientModal(index, mode) {
  const patient = patients[index];
  patientIndex.value = index;
  modalTitle.textContent = mode === "view" ? "Patient Information" : "Edit Patient Information";
  modalSubtitle.textContent = mode === "view" ? "Details from the Wellmeadows case study" : "Update patient details, then save changes";

  formFields.forEach(field => {
    const input = getField(field);
    if (input) input.value = patient[field] || "";
  });

  renderMedication(patient.medication || []);
  setModalReadonly(mode === "view");
  patientModal.classList.remove("hidden");
}

function closePatientModal() {
  patientModal.classList.add("hidden");
}

authForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = authEmail.value.trim();
  const password = authPassword.value;

  if (authMode === "register") {
    registeredAccount = {
      firstName: document.querySelector("#authFirstName").value.trim() || "John",
      lastName: document.querySelector("#authLastName").value.trim() || "Smith",
      phone: document.querySelector("#authPhone").value.trim(),
      role: document.querySelector("#authRole").value,
      email,
      password,
      hasLoggedInBefore: false
    };

    localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));
    showApp(registeredAccount, true);
    return;
  }

  if (!registeredAccount) {
    authMessage.textContent = "No account found. Please create an account first.";
    return;
  }

  if (email === registeredAccount.email && password === registeredAccount.password) {
    showApp(registeredAccount, false);
    registeredAccount.hasLoggedInBefore = true;
    localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));
  } else {
    authMessage.textContent = "Email or password does not match your registered account.";
  }
});

authSwitch.addEventListener("click", event => {
  event.preventDefault();
  setAuthMode(authMode === "register" ? "login" : "register");
});

logoutBtn.addEventListener("click", () => {
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
  setAuthMode("login");
});

navItems.forEach(item => item.addEventListener("click", () => setActivePage(item.dataset.page)));
moduleCards.forEach(card => card.addEventListener("click", () => setActivePage(card.dataset.page)));

patientsBody.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  openPatientModal(Number(button.dataset.index), button.dataset.action);
});

addPatientBtn.addEventListener("click", () => {
  patients.push({
    id: `P${10605 + patients.length}`,
    firstName: "",
    lastName: "",
    dob: "",
    sex: "Female",
    maritalStatus: "",
    phone: "",
    address: "",
    registered: "",
    status: "Waiting List",
    ward: "",
    bed: "",
    waitingDate: "",
    expectedStay: "",
    datePlaced: "",
    dateLeave: "",
    kinName: "",
    kinRelationship: "",
    kinAddress: "",
    kinPhone: "",
    doctorName: "",
    doctorAddress: "",
    doctorPhone: "",
    medication: []
  });

  renderPatients();
  openPatientModal(patients.length - 1, "edit");
});

patientForm.addEventListener("submit", event => {
  event.preventDefault();
  const index = Number(patientIndex.value);

  formFields.forEach(field => {
    const input = getField(field);
    if (input) patients[index][field] = input.value.trim();
  });

  renderPatients();
  closePatientModal();
});

modalClose.addEventListener("click", closePatientModal);
modalCancel.addEventListener("click", closePatientModal);
patientModal.addEventListener("click", event => {
  if (event.target === patientModal) closePatientModal();
});

patientSearch.addEventListener("input", renderPatients);
statusFilter.addEventListener("change", renderPatients);

setAuthMode("login");
renderPatients();
