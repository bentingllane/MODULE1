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
    id: "P10234",
    firstName: "Anne",
    lastName: "Phelps",
    dob: "12-Dec-33",
    sex: "Female",
    maritalStatus: "Single",
    phone: "0131-332-4111",
    address: "44 North Bridges, Cannonmills, Edinburgh, EH1 5GH",
    registered: "21-Feb-95",
    status: "In-Patient",
    ward: "Ward 11 - Orthopaedic",
    bed: "Bed 79",
    waitingDate: "",
    expectedStay: "",
    datePlaced: "",
    dateLeave: "",
    kinName: "James Phelps",
    kinRelationship: "Father",
    kinAddress: "145 Rowlands Street, Paisley, PA2 5FE",
    kinPhone: "0141-848-2211",
    doctorName: "Dr. Helen Pearson",
    doctorAddress: "22 Cannongate Way, Edinburgh, EH1 6TY",
    doctorPhone: "0131-332-0012",
    medication: []
  },
  {
    id: "P10451",
    firstName: "Robert",
    lastName: "MacDonald",
    dob: "18-Jun-17",
    sex: "Male",
    maritalStatus: "Married",
    phone: "0131-556-8899",
    address: "123 High Street, Edinburgh",
    registered: "12-Jan-96",
    status: "In-Patient",
    ward: "Ward 11 - Orthopaedic",
    bed: "Bed 84",
    waitingDate: "12-Jan-96",
    expectedStay: "5 days",
    datePlaced: "12-Jan-96",
    dateLeave: "17-Jan-96",
    kinName: "Not recorded",
    kinRelationship: "",
    kinAddress: "",
    kinPhone: "",
    doctorName: "Local doctor referral",
    doctorAddress: "",
    doctorPhone: "",
    medication: [
      { drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "Oral", units: "50", start: "24-Mar-96", finish: "24-Apr-96" },
      { drugNo: "10334", name: "Tetracycline", description: "Antibiotic", dosage: "0.5mg/ml", method: "IV", units: "10", start: "24-Mar-96", finish: "17-Apr-96" },
      { drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "Oral", units: "10", start: "25-Apr-96", finish: "2-May-96" }
    ]
  },
  {
    id: "P10480",
    firstName: "Steven",
    lastName: "Parks",
    dob: "09-Aug-10",
    sex: "Male",
    maritalStatus: "Widowed",
    phone: "01506-78910",
    address: "56 George Street, Broxburn",
    registered: "12-Jan-96",
    status: "In-Patient",
    ward: "Ward 11 - Orthopaedic",
    bed: "Bed 79",
    waitingDate: "12-Jan-96",
    expectedStay: "4 days",
    datePlaced: "14-Jan-96",
    dateLeave: "18-Jan-96",
    kinName: "Not recorded",
    kinRelationship: "",
    kinAddress: "",
    kinPhone: "",
    doctorName: "Local doctor referral",
    doctorAddress: "",
    doctorPhone: "",
    medication: []
  },
  {
    id: "P10563",
    firstName: "David",
    lastName: "Black",
    dob: "20-Feb-23",
    sex: "Male",
    maritalStatus: "Single",
    phone: "0131-225-7766",
    address: "89 Princes Street, Edinburgh",
    registered: "13-Jan-96",
    status: "Out-Patient",
    ward: "Out-Patient Clinic",
    bed: "Bed 80",
    waitingDate: "13-Jan-96",
    expectedStay: "14 days",
    datePlaced: "13-Jan-96",
    dateLeave: "27-Jan-96",
    kinName: "Not recorded",
    kinRelationship: "",
    kinAddress: "",
    kinPhone: "",
    doctorName: "Local doctor referral",
    doctorAddress: "",
    doctorPhone: "",
    medication: []
  },
  {
    id: "P10604",
    firstName: "Ian",
    lastName: "Thompson",
    dob: "04-Nov-14",
    sex: "Male",
    maritalStatus: "Married",
    phone: "0131-447-3322",
    address: "34 Rose Street, Edinburgh",
    registered: "14-Jan-96",
    status: "Waiting List",
    ward: "Pending - Ward 11",
    bed: "Bed 87",
    waitingDate: "14-Jan-96",
    expectedStay: "10 days",
    datePlaced: "15-Jan-96",
    dateLeave: "25-Jan-96",
    kinName: "Not recorded",
    kinRelationship: "",
    kinAddress: "",
    kinPhone: "",
    doctorName: "Local doctor referral",
    doctorAddress: "",
    doctorPhone: "",
    medication: []
  }
];

const staffRecords = [
  ["S011", "Moira Samuel", "Charge Nurse", "49 School Road, Broxburn", "01506-45633", "Ward 11", "37.5 hrs/week", "Permanent", "Monthly"],
  ["S098", "Carol Cummings", "Staff Nurse", "15 High Street, Edinburgh", "0131-334-5677", "Ward 11", "Late Shift", "Ward Staff", "N/A"],
  ["S123", "Morgan Russell", "Nurse", "23A George Street, Broxburn", "01506-67676", "Ward 11", "Late Shift", "Ward Staff", "N/A"],
  ["S167", "Robin Plevin", "Staff Nurse", "7 Glen Terrace, Edinburgh", "0131-339-6123", "Ward 11", "Early Shift", "Ward Staff", "N/A"],
  ["S234", "Amy O'Donnell", "Nurse", "234 Princes Street, Edinburgh", "0131-334-9099", "Ward 11", "Night Shift", "Ward Staff", "N/A"],
  ["S344", "Laurence Burns", "Consultant", "1 Apple Drive, Edinburgh", "0131-344-9100", "Ward 11", "Early Shift", "Specialist Staff", "N/A"]
];

const wardCards = [
  {
    ward: "Ward 11",
    name: "Orthopaedic",
    block: "Block E",
    nurse: "Moira Samuel",
    staffNo: "S011",
    ext: "7711",
    occupied: 24,
    total: 28,
    patients: 24,
    staff: 12
  },
  {
    ward: "Ward 12",
    name: "Cardiology",
    block: "Block A",
    nurse: "Sarah Johnson",
    staffNo: "S022",
    ext: "7712",
    occupied: 18,
    total: 20,
    patients: 18,
    staff: 10
  },
  {
    ward: "Ward 13",
    name: "Geriatric",
    block: "Block B",
    nurse: "Michael Brown",
    staffNo: "S033",
    ext: "7713",
    occupied: 30,
    total: 32,
    patients: 30,
    staff: 15
  },
  {
    ward: "Ward 14",
    name: "Respiratory",
    block: "Block C",
    nurse: "Emma Wilson",
    staffNo: "S044",
    ext: "7714",
    occupied: 12,
    total: 16,
    patients: 12,
    staff: 8
  },
  {
    ward: "Ward 15",
    name: "Neurology",
    block: "Block D",
    nurse: "James Anderson",
    staffNo: "S055",
    ext: "7715",
    occupied: 19,
    total: 22,
    patients: 19,
    staff: 11
  },
  {
    ward: "Ward 16",
    name: "General Medical",
    block: "Block E",
    nurse: "Lisa Taylor",
    staffNo: "S066",
    ext: "7716",
    occupied: 27,
    total: 30,
    patients: 27,
    staff: 14
  }
];

const appointmentList = [
  ["09:00", "Anne Phelps", "P10234", "Dr. Helen Pearson", "Room E252", "Initial Consultation", "Scheduled"],
  ["10:30", "David Black", "P10563", "Dr. Laurence Burns", "Room E253", "Follow-up", "Scheduled"],
  ["11:00", "Robert MacDonald", "P10451", "Dr. Helen Pearson", "Room E252", "Treatment Review", "In Progress"],
  ["14:00", "Ian Thompson", "P10604", "Dr. Laurence Burns", "Room E254", "Pre-admission Assessment", "Scheduled"],
  ["15:30", "Steven Parks", "P10480", "Dr. Helen Pearson", "Room E252", "Discharge Planning", "Scheduled"]
];

const medicationList = [
  ["Ronald MacDonald", "P10034", "Ward 11", "Bed 84", "Morphine", "Pain killer", "10mg/ml", "Oral", "50", "24-Mar-96", "24-Apr-96", "Active"],
  ["Ronald MacDonald", "P10034", "Ward 11", "Bed 84", "Tetracycline", "Antibiotic", "0.5mg/ml", "IV", "10", "24-Mar-96", "17-Apr-96", "Completed"],
  ["Ronald MacDonald", "P10034", "Ward 11", "Bed 84", "Morphine", "Pain killer", "10mg/ml", "Oral", "10", "25-Apr-96", "2-May-96", "Active"],
  ["Anne Phelps", "P10234", "Ward 11", "Bed 79", "Ibuprofen", "Pain relief", "200mg", "Oral", "30", "1-May-96", "15-May-96", "Active"],
  ["David Black", "P10563", "Ward 11", "Bed 80", "Warfarin", "Anticoagulant", "5mg", "Oral", "5", "28-Apr-96", "28-May-96", "Active"]
];

const requisitionList = [
  ["REQ001", "Ward 11 - Orthopaedic", "Moira Samuel", "15-Feb-96", "1 item", "16-Feb-96", "Approved", "£1387.50"],
  ["REQ002", "Ward 12 - Cardiology", "Sarah Johnson", "20-Feb-96", "2 items", "", "Pending", "£210.00"],
  ["REQ003", "Ward 11 - Orthopaedic", "Moira Samuel", "3-May-96", "1 item", "", "Pending", "£975.00"],
  ["REQ004", "Ward 13 - Geriatric", "Michael Brown", "4-May-96", "2 items", "4-May-96", "Approved", "£150.00"]
];

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

  document.querySelector("#welcomeTitle").textContent = isFirstLogin ? `Welcome, ${fullName}` : `Welcome back, ${fullName}`;
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

  navItems.forEach(item => item.classList.toggle("active", item.dataset.page === page));

  if (page === "staff") renderStaffPage();
  if (page === "wards") renderWardPage();
  if (page === "appointments") renderAppointmentsPage();
  if (page === "medications") renderMedicationsPage();
  if (page === "supplies") renderSuppliesPage();
}

function statCard(label, value, sub, color = "blue") {
  return `
    <article class="stat-card">
      <div>
        <span>${label}</span>
        <strong>${value}</strong>
        <small>${sub}</small>
      </div>
      <b class="stat-icon ${color}">
        <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>
      </b>
    </article>
  `;
}

function renderStaffPage() {
  placeholderPage.innerHTML = `
    <header class="page-header">
      <div>
        <h2>Staff Management</h2>
        <p>Manage staff records, qualifications and schedules</p>
      </div>
      <button class="primary-btn" type="button">+ Add Staff</button>
    </header>

    <section class="stat-grid">
      ${statCard("Total Staff", "142", "Hospital staff", "blue")}
      ${statCard("Charge Nurses", "17", "One per ward/clinic", "green")}
      ${statCard("Ward 11 Staff", "6", "Allocated staff", "purple")}
      ${statCard("Specialists", "1", "Consultant assigned", "orange")}
    </section>

    <section class="table-card">
      <div class="table-tools one-line">
        <div class="search-box"><input type="search" placeholder="Search by staff name, number or position..."></div>
      </div>

      <div class="modern-list">
        ${staffRecords.map(staff => `
          <article class="modern-row">
            <div>
              <strong>${staff[1]}</strong>
              <p>${staff[0]} • ${staff[2]}</p>
              <small>${staff[3]} • ${staff[4]}</small>
            </div>
            <div>
              <span class="pill in">${staff[6]}</span>
              <p>${staff[5]}</p>
            </div>
            <button class="link-btn">View</button>
            <button class="link-btn dark">Edit</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWardPage() {
  placeholderPage.innerHTML = `
    <header class="page-header">
      <div>
        <h2>Ward Management</h2>
        <p>Monitor ward capacity and bed allocation</p>
      </div>
    </header>

    <section class="stat-grid ward-stats">
      ${statCard("Total Wards", "17", "", "blue")}
      ${statCard("Total Beds", "240", "130 occupied", "green")}
      ${statCard("Occupancy Rate", "88%", "", "purple")}
    </section>

    <section class="ward-grid">
      ${wardCards.map(ward => {
        const available = ward.total - ward.occupied;
        const percent = Math.round((ward.occupied / ward.total) * 100);
        const dangerClass = percent >= 88 ? "danger" : "warning";

        return `
          <article class="ward-card">
            <header>
              <div>
                <h3>${ward.ward}</h3>
                <p>${ward.name}</p>
              </div>
              <span>${ward.block}</span>
            </header>

            <div class="ward-info">
              <div>
                <small>Charge Nurse</small>
                <strong>${ward.nurse}</strong>
                <p>Staff #${ward.staffNo}</p>
              </div>
              <div>
                <small>Extension</small>
                <strong>${ward.ext}</strong>
              </div>
            </div>

            <div class="occupancy">
              <div>
                <span>Bed Occupancy</span>
                <strong>${ward.occupied} / ${ward.total}</strong>
              </div>
              <span class="occupancy-track">
                <b class="occupancy-fill ${dangerClass}" style="width:${percent}%"></b>
              </span>
              <small>${available} beds available</small>
            </div>

            <div class="ward-bottom">
              <div>
                <span class="mini-icon blue">♙</span>
                <small>Patients</small>
                <strong>${ward.patients}</strong>
              </div>
              <div>
                <span class="mini-icon green">♙</span>
                <small>Staff</small>
                <strong>${ward.staff}</strong>
              </div>
            </div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function renderAppointmentsPage() {
  placeholderPage.innerHTML = `
    <header class="page-header">
      <div>
        <h2>Appointments</h2>
        <p>Schedule and manage patient appointments</p>
      </div>
      <button class="primary-btn" type="button">+ Schedule Appointment</button>
    </header>

    <section class="stat-grid">
      ${statCard("Today's Appointments", "24", "", "blue")}
      ${statCard("Completed", "8", "", "green")}
      ${statCard("In Progress", "3", "", "orange")}
      ${statCard("Upcoming", "13", "", "purple")}
    </section>

    <section class="table-card">
      <div class="appointment-toolbar">
        <div class="search-box"><input type="search" placeholder="Search by patient name or ID..."></div>
        <input type="date" value="2026-05-04">
      </div>

      <div class="appointment-list">
        ${appointmentList.map(item => `
          <article class="appointment-row">
            <b>${item[0]}</b>
            <div>
              <strong>${item[1]}</strong>
              <span>(${item[2]})</span>
              <em class="${item[6] === "In Progress" ? "orange-status" : ""}">${item[6]}</em>
              <p>${item[3]}</p>
            </div>
            <p>${item[4]}</p>
            <p>${item[5]}</p>
            <button class="link-btn">View</button>
            <button class="link-btn dark">Edit</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMedicationsPage() {
  placeholderPage.innerHTML = `
    <header class="page-header">
      <div>
        <h2>Medication Tracking</h2>
        <p>Record and monitor patient medications</p>
      </div>
      <button class="primary-btn" type="button">+ Prescribe Medication</button>
    </header>

    <section class="stat-grid">
      ${statCard("Active Prescriptions", "342", "", "blue")}
      ${statCard("Medications Today", "156", "", "green")}
      ${statCard("Drug Types", "84", "", "purple")}
      ${statCard("Expiring Soon", "12", "", "orange")}
    </section>

    <section class="table-card">
      <div class="table-tools">
        <div class="search-box"><input type="search" placeholder="Search by patient name, ID or drug name..."></div>
        <select><option>All Status</option></select>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Patient</th><th>Ward/Bed</th><th>Medication</th><th>Dosage</th><th>Method</th><th>Units/Day</th><th>Duration</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${medicationList.map(item => `
              <tr>
                <td><strong>${item[0]}</strong><br><small>${item[1]}</small></td>
                <td>${item[2]}<br><small>${item[3]}</small></td>
                <td><strong>${item[4]}</strong><br><small>${item[5]}</small></td>
                <td>${item[6]}</td>
                <td><span class="pill ${item[7] === "IV" ? "wait" : "in"}">${item[7]}</span></td>
                <td>${item[8]}</td>
                <td>${item[9]}<br>${item[10]}</td>
                <td><span class="pill ${item[11] === "Active" ? "in" : "out"}">${item[11]}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSuppliesPage() {
  placeholderPage.innerHTML = `
    <header class="page-header">
      <div>
        <h2>Supply Requisitions</h2>
        <p>Manage surgical and pharmaceutical supply orders</p>
      </div>
      <button class="primary-btn" type="button">+ New Requisition</button>
    </header>

    <section class="stat-grid">
      ${statCard("Total Requisitions", "248", "", "blue")}
      ${statCard("Pending", "48", "", "orange")}
      ${statCard("Approved", "186", "", "green")}
      ${statCard("Monthly Cost", "£24.5K", "", "purple")}
    </section>

    <section class="table-card">
      <div class="table-tools">
        <div class="search-box"><input type="search" placeholder="Search by requisition ID, ward or staff name..."></div>
        <select><option>All Status</option></select>
      </div>

      <div class="requisition-list">
        ${requisitionList.map(item => `
          <article class="requisition-row">
            <div>
              <h3>Requisition #${item[0]}</h3>
              <span class="pill ${item[6] === "Approved" ? "in" : "wait"}">${item[6]}</span>
              <p>${item[1]}</p>
              <small>Requisitioned by: ${item[2]} • Date: ${item[3]} • ${item[4]} ${item[5] ? "• Signed: " + item[5] : ""}</small>
            </div>
            <div>
              <small>Total Cost</small>
              <strong>${item[7]}</strong>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
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

  if (!visible.length) {
    patientsBody.innerHTML = `<tr><td colspan="7">No patient found.</td></tr>`;
  }
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
