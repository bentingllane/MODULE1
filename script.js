const icons = {
  hospital: `<svg viewBox="0 0 24 24"><path d="M8 3h8v4h4v14H4V7h4V3Z"/><path d="M10 7h4"/><path d="M12 5v4"/><path d="M9 13h6"/><path d="M12 10v6"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24"><path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/></svg>`,
  patients: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>`,
  staff: `<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4"/><path d="M17 11h4"/><path d="M19 9v4"/></svg>`,
  wards: `<svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V5h14v16"/><path d="M9 9h6"/><path d="M9 13h6"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>`,
  bed: `<svg viewBox="0 0 24 24"><path d="M3 7v11"/><path d="M21 7v11"/><path d="M3 14h18"/><path d="M7 14V9h10v5"/></svg>`,
  logout: `<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  user: `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><path d="M7 11V8a5 5 0 0 1 10 0v3"/><path d="M5 11h14v10H5z"/></svg>`,
  eye: `<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`
};

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => {
    el.innerHTML = icons[el.dataset.icon] || "";
  });
}

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
const rememberMe = document.querySelector("#rememberMe");
const forgotPassword = document.querySelector("#forgotPassword");
const socialButtons = document.querySelectorAll("[data-social-login]");
const socialModal = document.querySelector("#socialModal");
const socialForm = document.querySelector("#socialForm");
const socialTitle = document.querySelector("#socialTitle");
const socialSubtitle = document.querySelector("#socialSubtitle");
const socialProvider = document.querySelector("#socialProvider");
const socialFields = document.querySelector("#socialFields");
const socialClose = document.querySelector("#socialClose");
const socialCancel = document.querySelector("#socialCancel");
const logoutBtn = document.querySelector("#logoutBtn");
const navItems = document.querySelectorAll(".nav-item");
const moduleCards = document.querySelectorAll(".module-card");
const dashboardPage = document.querySelector("#dashboardPage");
const patientsPage = document.querySelector("#patientsPage");
const modulePage = document.querySelector("#modulePage");
const patientsBody = document.querySelector("#patientsBody");
const patientSearch = document.querySelector("#patientSearch");
const statusFilter = document.querySelector("#statusFilter");
const addPatientBtn = document.querySelector("#addPatientBtn");
const patientModal = document.querySelector("#patientModal");
const modalTitle = document.querySelector("#modalTitle");
const modalSubtitle = document.querySelector("#modalSubtitle");
const modalClose = document.querySelector("#modalClose");
const modalCancel = document.querySelector("#modalCancel");
const modalDone = document.querySelector("#modalDone");
const modalDelete = document.querySelector("#modalDelete");
const modalSave = document.querySelector("#modalSave");
const patientForm = document.querySelector("#patientForm");
const patientIndex = document.querySelector("#patientIndex");
const modalMedication = document.querySelector("#modalMedication");
const modalDoctorName = document.querySelector("#modalDoctorName");
const modalDoctorAddress = document.querySelector("#modalDoctorAddress");
const modalDoctorPhone = document.querySelector("#modalDoctorPhone");
const recordModal = document.querySelector("#recordModal");
const recordTitle = document.querySelector("#recordTitle");
const recordSubtitle = document.querySelector("#recordSubtitle");
const recordFields = document.querySelector("#recordFields");
const recordForm = document.querySelector("#recordForm");
const recordClose = document.querySelector("#recordClose");
const recordCancel = document.querySelector("#recordCancel");

let authMode = "login";
let currentAccount = null;
let patientQuery = "";
let registeredAccount = JSON.parse(localStorage.getItem("wellmeadowsAccount")) || null;

const roleAccess = {
  "Medical Director": ["dashboard", "patients", "staff", "wards", "appointments", "medications"],
  "Personnel Officer": ["dashboard", "staff"],
  "Charge Nurse": ["dashboard", "patients", "staff", "wards", "medications"],
  "Staff Nurse": ["dashboard", "patients", "wards", "medications"],
  "Consultant": ["dashboard", "patients", "appointments", "medications"]
};

const hospitalIdAccounts = {
  S001: { firstName: "John", lastName: "Smith", phone: "0131-555-7701", role: "Medical Director", email: "john.smith@wellmeadows.com" },
  S011: { firstName: "Moira", lastName: "Samuel", phone: "0131-555-7711", role: "Charge Nurse", email: "moira.samuel@wellmeadows.com" },
  S099: { firstName: "Karen", lastName: "Mitchell", phone: "0131-555-7799", role: "Personnel Officer", email: "karen.mitchell@wellmeadows.com" },
  S123: { firstName: "Morgan", lastName: "Russell", phone: "0131-555-7723", role: "Staff Nurse", email: "morgan.russell@wellmeadows.com" },
  S344: { firstName: "Laurence", lastName: "Burns", phone: "0131-555-7722", role: "Consultant", email: "laurence.burns@wellmeadows.com" },
  S355: { firstName: "Helen", lastName: "Pearson", phone: "0131-555-7721", role: "Consultant", email: "helen.pearson@wellmeadows.com" }
};

const pageTitles = {
  dashboard: "Dashboard",
  patients: "Patient Management",
  staff: "Staff Management",
  wards: "Ward Management",
  appointments: "Appointments",
  medications: "Medication Tracking"
};

const doctorDirectory = {
  "": { address: "", phone: "" },
  "Dr. Helen Pearson": {
    address: "22 Cannongate Way, Edinburgh, EH1 6TY",
    phone: "0131-332-0012"
  },
  "Dr. Laurence Burns": {
    address: "Out-Patient Clinic, Wellmeadows Hospital, Edinburgh",
    phone: "0131-555-7722"
  },
  "Dr. John Smith": {
    address: "Administration Office, Wellmeadows Hospital, Edinburgh",
    phone: "0131-555-7701"
  },
  "Local doctor referral": {
    address: "N/A",
    phone: "N/A"
  },
  "N/A": {
    address: "N/A",
    phone: "N/A"
  }
};

const patients = [
  {
    id: "P10234", firstName: "Anne", lastName: "Phelps", dob: "1933-12-12", sex: "Female", maritalStatus: "Single",
    phone: "0131-332-4111", address: "44 North Bridges, Cannonmills, Edinburgh, EH1 5GH", registered: "1995-02-21",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 84", waitingDate: "", expectedStay: "N/A", datePlaced: "1996-05-01", dateLeave: "",
    kinName: "James Phelps", kinRelationship: "Father", kinAddress: "145 Rowlands Street, Paisley, PA2 5FE", kinPhone: "0141-848-2211",
    doctorName: "Dr. Helen Pearson", doctorAddress: "22 Cannongate Way, Edinburgh, EH1 6TY", doctorPhone: "0131-332-0012",
    medication: [{ drugNo: "10422", name: "Ibuprofen", description: "Pain relief", dosage: "200mg", method: "Oral", units: "30", start: "1996-05-01", finish: "1996-05-15", status: "Active" }]
  },
  {
    id: "P10451", firstName: "Robert", lastName: "MacDonald", dob: "1947-06-18", sex: "Male", maritalStatus: "Married",
    phone: "0131-556-8899", address: "123 High Street, Edinburgh", registered: "1996-01-12",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 84", waitingDate: "1996-01-12", expectedStay: "5 days", datePlaced: "1996-01-12", dateLeave: "1996-01-17",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A",
    doctorName: "Local doctor referral", doctorAddress: "N/A", doctorPhone: "N/A",
    medication: [
      { drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "Oral", units: "50", start: "1996-03-24", finish: "1996-04-24", status: "Active" },
      { drugNo: "10334", name: "Tetracycline", description: "Antibiotic", dosage: "0.5mg/ml", method: "IV", units: "10", start: "1996-03-24", finish: "1996-04-17", status: "Completed" }
    ]
  },
  {
    id: "P10480", firstName: "Steven", lastName: "Parks", dob: "1940-08-09", sex: "Male", maritalStatus: "Widowed",
    phone: "01506-78910", address: "56 George Street, Broxburn", registered: "1996-01-12",
    status: "In-Patient", ward: "Ward 11 - Orthopaedic", bed: "Bed 79", waitingDate: "1996-01-12", expectedStay: "4 days", datePlaced: "1996-01-14", dateLeave: "1996-01-18",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Local doctor referral", doctorAddress: "N/A", doctorPhone: "N/A", medication: []
  },
  {
    id: "P10563", firstName: "David", lastName: "Black", dob: "1953-02-20", sex: "Male", maritalStatus: "Single",
    phone: "0131-225-7766", address: "89 Princes Street, Edinburgh", registered: "1996-01-13",
    status: "Out-Patient", ward: "Out-Patient Clinic", bed: "N/A", waitingDate: "1996-01-13", expectedStay: "14 days", datePlaced: "1996-01-13", dateLeave: "1996-01-27",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Dr. Laurence Burns", doctorAddress: "Out-Patient Clinic, Wellmeadows Hospital, Edinburgh", doctorPhone: "0131-555-7722",
    medication: [{ drugNo: "10551", name: "Warfarin", description: "Anticoagulant", dosage: "5mg", method: "Oral", units: "5", start: "1996-04-28", finish: "1996-05-28", status: "Active" }]
  },
  {
    id: "P10604", firstName: "Ian", lastName: "Thompson", dob: "1944-11-04", sex: "Male", maritalStatus: "Married",
    phone: "0131-447-3322", address: "34 Rose Street, Edinburgh", registered: "1996-01-14",
    status: "Waiting List", ward: "Pending - Ward 11", bed: "N/A", waitingDate: "1996-01-14", expectedStay: "10 days", datePlaced: "1996-01-15", dateLeave: "1996-01-25",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Dr. Laurence Burns", doctorAddress: "Out-Patient Clinic, Wellmeadows Hospital, Edinburgh", doctorPhone: "0131-555-7722", medication: []
  }
];

const staff = [
  { id: "S001", name: "Dr. John Smith", role: "Medical Director", department: "Administration", ward: "N/A", extension: "7701", schedule: "Mon-Fri" },
  { id: "S011", name: "Moira Samuel", role: "Charge Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", schedule: "Day Shift" },
  { id: "S098", name: "Carol Cummings", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", schedule: "Day Shift" },
  { id: "S123", name: "Morgan Russell", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", schedule: "Night Shift" },
  { id: "S167", name: "Robin Plevin", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", schedule: "Day Shift" },
  { id: "S234", name: "Amy O'Donnell", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", schedule: "Night Shift" },
  { id: "S022", name: "Sarah Johnson", role: "Charge Nurse", department: "Cardiology", ward: "Ward 12", extension: "7712", schedule: "Day Shift" },
  { id: "S033", name: "Michael Brown", role: "Charge Nurse", department: "Geriatric", ward: "Ward 13", extension: "7713", schedule: "Night Shift" },
  { id: "S044", name: "Emma Wilson", role: "Charge Nurse", department: "Respiratory", ward: "Ward 14", extension: "7714", schedule: "Day Shift" },
  { id: "S055", name: "James Anderson", role: "Charge Nurse", department: "Neurology", ward: "Ward 15", extension: "7715", schedule: "Night Shift" },
  { id: "S066", name: "Lisa Taylor", role: "Charge Nurse", department: "General Medical", ward: "Ward 16", extension: "7716", schedule: "Day Shift" },
  { id: "S344", name: "Dr. Laurence Burns", role: "Consultant", department: "Out-Patient Clinic", ward: "N/A", extension: "7722", schedule: "Mon-Wed-Fri" },
  { id: "S355", name: "Dr. Helen Pearson", role: "Consultant", department: "Out-Patient Clinic", ward: "N/A", extension: "7721", schedule: "Tue-Thu" }
];

const wards = [
  { number: "11", name: "Orthopaedic", block: "Block E", charge: "Moira Samuel", staffId: "S011", extension: "7711", occupied: 24, capacity: 28, staff: 12 },
  { number: "12", name: "Cardiology", block: "Block A", charge: "Sarah Johnson", staffId: "S022", extension: "7712", occupied: 18, capacity: 20, staff: 10 },
  { number: "13", name: "Geriatric", block: "Block B", charge: "Michael Brown", staffId: "S033", extension: "7713", occupied: 30, capacity: 32, staff: 15 },
  { number: "14", name: "Respiratory", block: "Block C", charge: "Emma Wilson", staffId: "S044", extension: "7714", occupied: 12, capacity: 16, staff: 8 },
  { number: "15", name: "Neurology", block: "Block D", charge: "James Anderson", staffId: "S055", extension: "7715", occupied: 19, capacity: 22, staff: 11 },
  { number: "16", name: "General Medical", block: "Block E", charge: "Lisa Taylor", staffId: "S066", extension: "7716", occupied: 27, capacity: 30, staff: 14 }
];

const appointments = [
  { time: "09:00", patient: "Anne Phelps", patientId: "P10234", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Initial Consultation", status: "Scheduled", date: "2026-05-04" },
  { time: "10:30", patient: "David Black", patientId: "P10563", doctor: "Dr. Laurence Burns", room: "Room E253", type: "Follow-up", status: "Scheduled", date: "2026-05-04" },
  { time: "11:00", patient: "Robert MacDonald", patientId: "P10451", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Treatment Review", status: "In Progress", date: "2026-05-04" },
  { time: "14:00", patient: "Ian Thompson", patientId: "P10604", doctor: "Dr. Laurence Burns", room: "Room E254", type: "Pre-admission Assessment", status: "Scheduled", date: "2026-05-04" },
  { time: "15:30", patient: "Steven Parks", patientId: "P10480", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Discharge Planning", status: "Scheduled", date: "2026-05-04" }
];

const medications = [
  { patient: "Robert MacDonald", patientId: "P10451", ward: "Ward 11", bed: "Bed 84", drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "Oral", units: "50", start: "1996-03-24", finish: "1996-04-24", status: "Active" },
  { patient: "Robert MacDonald", patientId: "P10451", ward: "Ward 11", bed: "Bed 84", drugNo: "10334", name: "Tetracycline", description: "Antibiotic", dosage: "0.5mg/ml", method: "IV", units: "10", start: "1996-03-24", finish: "1996-04-17", status: "Completed" },
  { patient: "Anne Phelps", patientId: "P10234", ward: "Ward 11", bed: "Bed 79", drugNo: "10422", name: "Ibuprofen", description: "Pain relief", dosage: "200mg", method: "Oral", units: "30", start: "1996-05-01", finish: "1996-05-15", status: "Active" },
  { patient: "David Black", patientId: "P10563", ward: "Out-Patient Clinic", bed: "N/A", drugNo: "10551", name: "Warfarin", description: "Anticoagulant", dosage: "5mg", method: "Oral", units: "5", start: "1996-04-28", finish: "1996-05-28", status: "Active" }
];

const formFields = ["id", "firstName", "lastName", "dob", "sex", "maritalStatus", "address", "phone", "registered", "status", "ward", "bed", "waitingDate", "expectedStay", "datePlaced", "dateLeave", "kinName", "kinRelationship", "kinAddress", "kinPhone", "doctorName", "doctorAddress", "doctorPhone"];

const fieldIds = {
  id: "modalPatientId",
  maritalStatus: "modalMarital",
  expectedStay: "modalStay",
  datePlaced: "modalDatePlaced",
  dateLeave: "modalDateLeave"
};

function defaultStaffIdForRole(role) {
  const ids = {
    "Medical Director": "S001",
    "Personnel Officer": "S099",
    "Charge Nurse": "S011",
    "Staff Nurse": "S123",
    "Consultant": "S344"
  };
  return ids[role] || "S001";
}

function getField(field) {
  return document.querySelector(`#${fieldIds[field] || "modal" + field[0].toUpperCase() + field.slice(1)}`);
}

function currentRole() {
  return currentAccount?.role || "Medical Director";
}

function canAccess(page) {
  return (roleAccess[currentRole()] || []).includes(page);
}

function blocked(page) {
  alert(`Your role is ${currentRole()}. ${pageTitles[page] || "This module"} is locked for this role.`);
}

function patientName(patient) {
  return `${patient.firstName || ""} ${patient.lastName || ""}`.trim() || "New Patient";
}

function initials(name) {
  return name.split(" ").filter(Boolean).map(part => part[0]).join("").slice(0, 3).toUpperCase() || "WM";
}

function ageFromDob(dob) {
  if (!dob) return "N/A";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "N/A";
  const today = new Date("2026-05-08");
  let age = today.getFullYear() - birth.getFullYear();
  const beforeBirthday = today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (beforeBirthday) age -= 1;
  return String(age);
}

function displayDate(value) {
  if (!value) return "N/A";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" });
}

function statusClass(status) {
  if (status === "Out-Patient") return "out";
  if (status === "Waiting List") return "wait";
  if (status === "Completed") return "done";
  if (status === "In Progress") return "progress";
  return "in";
}

function nextPatientId() {
  const max = patients.reduce((highest, patient) => Math.max(highest, Number(patient.id.replace(/\D/g, "")) || 0), 0);
  return `P${max + 1}`;
}

function nextStaffId() {
  const max = staff.reduce((highest, item) => Math.max(highest, Number(item.id.replace(/\D/g, "")) || 0), 0);
  return `S${String(max + 1).padStart(3, "0")}`;
}

function setAuthMode(mode) {
  authMode = mode;
  const isRegister = mode === "register";

  authTitle.textContent = isRegister ? "Create Account" : "Sign In";
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
  const staffId = account?.staffId || defaultStaffIdForRole(role);
  const fullName = `${first} ${last}`;

  document.querySelector("#welcomeTitle").textContent = isFirstLogin ? `Welcome, ${fullName}` : `Welcome back, ${fullName}`;
  document.querySelector("#welcomeRole").textContent = `${role} - Staff #${staffId}`;
  document.querySelector("#sidebarName").textContent = fullName;
  document.querySelector("#sidebarRole").textContent = role;
  document.querySelector("#sidebarAvatar").textContent = initials(fullName);
}

function showApp(account, isFirstLogin = false) {
  currentAccount = account;
  updateUserDisplay(account, isFirstLogin);
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");
  setActivePage("dashboard");
}

function showLoggedOutLogin() {
  currentAccount = null;
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
  setAuthMode("login");
  authTitle.textContent = "Welcome Back";
  authSubtitle.textContent = "Thank you for using Wellmeadows Hospital System. Please sign in again.";
  authEmail.value = "";
  authPassword.value = "";
  authMessage.textContent = "";
  rememberMe.checked = false;
  localStorage.removeItem("wellmeadowsRememberEmail");
}

function setActivePage(page) {
  if (!canAccess(page)) {
    blocked(page);
    return;
  }

  dashboardPage.classList.toggle("hidden", page !== "dashboard");
  patientsPage.classList.toggle("hidden", page !== "patients");
  modulePage.classList.toggle("hidden", page === "dashboard" || page === "patients");

  navItems.forEach(item => item.classList.toggle("active", item.dataset.page === page));

  if (page === "staff") modulePage.innerHTML = renderStaffPage();
  if (page === "wards") modulePage.innerHTML = renderWardsPage();
  if (page === "appointments") modulePage.innerHTML = renderAppointmentsPage();
  if (page === "medications") modulePage.innerHTML = renderMedicationsPage();

  hydrateIcons(modulePage);
  document.querySelector(".content").scrollTo({ top: 0, behavior: "auto" });
}

function wardPatientsFor(wardNumber) {
  return patients.filter(patient => (patient.ward || "").startsWith(`Ward ${wardNumber}`));
}

function wardStaffFor(wardNumber) {
  return staff.filter(member => member.ward === `Ward ${wardNumber}`);
}

function renderWardDetails(wardNumber) {
  const ward = wards.find(item => item.number === wardNumber);
  const wardPatients = wardPatientsFor(wardNumber);
  const wardStaff = wardStaffFor(wardNumber);
  const details = document.querySelector("#wardDetails");

  details.innerHTML = `
    <section class="table-card" style="margin-top:24px">
      <header class="page-header" style="margin-bottom:14px">
        <div>
          <h2>Ward ${ward.number} - ${ward.name}</h2>
          <p>${ward.block} | Charge Nurse: ${ward.charge} | Extension ${ward.extension}</p>
        </div>
      </header>

      <h3>Patients in this Ward</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Bed</th>
              <th>Telephone</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            ${
              wardPatients.length
                ? wardPatients.map(patient => `
                  <tr>
                    <td><strong>${patient.id}</strong></td>
                    <td>${patientName(patient)}</td>
                    <td><span class="pill ${statusClass(patient.status)}">${patient.status}</span></td>
                    <td>${patient.bed || "N/A"}</td>
                    <td>${patient.phone || "N/A"}</td>
                    <td>${patient.doctorName || "N/A"}</td>
                  </tr>
                `).join("")
                : `<tr><td colspan="6">No patients currently assigned to Ward ${ward.number}.</td></tr>`
            }
          </tbody>
        </table>
      </div>

      <h3 style="margin-top:24px">Available Staff</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Staff</th>
              <th>Role</th>
              <th>Department</th>
              <th>Extension</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            ${
              wardStaff.length
                ? wardStaff.map(member => `
                  <tr>
                    <td><strong>${member.name}</strong></td>
                    <td>${member.role}</td>
                    <td>${member.department}</td>
                    <td>${member.extension}</td>
                    <td>${member.schedule}</td>
                  </tr>
                `).join("")
                : `<tr><td colspan="5">No available staff listed for Ward ${ward.number}.</td></tr>`
            }
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderPatients() {
  const filter = statusFilter.value;

  const visible = patients.map((patient, index) => ({ patient, index })).filter(({ patient }) => {
    const text = `${patient.id} ${patientName(patient)} ${patient.phone} ${patient.address}`.toLowerCase();
    const matchesQuery = !patientQuery || text.includes(patientQuery);
    const matchesStatus = filter === "All Status" || patient.status === filter;
    return matchesQuery && matchesStatus;
  });

  patientsBody.innerHTML = visible.map(({ patient, index }) => `
    <tr>
      <td><strong>${patient.id}</strong></td>
      <td><div class="patient-name"><span class="patient-avatar" data-icon="user"></span>${patientName(patient)}</div></td>
      <td>${ageFromDob(patient.dob)} / ${patient.sex || "N/A"}</td>
      <td><div class="contact-lines"><span>${patient.phone || "N/A"}</span><span>${(patient.address || "N/A").split(",")[0]}</span></div></td>
      <td><span class="pill ${statusClass(patient.status)}">${patient.status || "N/A"}</span></td>
      <td>${patient.ward || "N/A"}<br><span class="subtext">${patient.bed || "N/A"}</span></td>
      <td>
        <div class="actions">
          <button class="icon-button" data-action="view" data-index="${index}" type="button" title="View patient">${icons.eye}</button>
          <button class="icon-button edit" data-action="edit" data-index="${index}" type="button" title="Edit patient">${icons.edit}</button>
        </div>
      </td>
    </tr>
  `).join("");

  hydrateIcons(patientsBody);
}

function renderMedication(medication) {
  modalMedication.innerHTML = medication.length
    ? medication.map(item => `
      <article>
        <strong>${item.name}</strong>
        <span>${item.description} | ${item.dosage} | ${item.method}</span>
        <small>Drug #${item.drugNo} | ${item.units} units/day | ${displayDate(item.start)} to ${displayDate(item.finish)} | ${item.status}</small>
      </article>
    `).join("")
    : `<p class="empty-note">No medication recorded for this patient.</p>`;
}

function setModalReadonly(readonly) {
  patientForm.classList.toggle("readonly", readonly);
  modalSave.classList.toggle("hidden", readonly);
  modalCancel.classList.toggle("hidden", readonly);

  formFields.forEach(field => {
    const input = getField(field);
    if (!input) return;
    input.readOnly = readonly || field === "id";
    input.disabled = readonly && input.tagName === "SELECT";
  });
}

function openPatientModal(index, mode, draft = null) {
  const patient = draft || patients[index];
  patientIndex.value = index ?? "";
  modalTitle.textContent = mode === "view" ? "Patient Information" : index === null ? "Register Patient" : "Edit Patient Information";
  modalSubtitle.textContent = mode === "view" ? "Details from the Wellmeadows case study" : "Update details, then save changes";

  formFields.forEach(field => {
    const input = getField(field);
    if (input) input.value = patient[field] || "";
  });

  renderMedication(patient.medication || []);
  setModalReadonly(mode === "view");
  modalDelete.classList.toggle("hidden", index === null || index === undefined);
  patientModal.classList.remove("hidden");
}

function openRegisterModal() {
  openPatientModal(null, "edit", {
    id: nextPatientId(),
    firstName: "",
    lastName: "",
    dob: "",
    sex: "",
    maritalStatus: "",
    phone: "",
    address: "",
    registered: new Date().toISOString().slice(0, 10),
    status: "",
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
}

function closePatientModal() {
  patientModal.classList.add("hidden");
}

function renderStaffPage() {
  return `
    <header class="page-header">
      <div>
        <h2>Staff Management</h2>
        <p>Manage staff records, departments, roles, and schedules</p>
      </div>
      <button class="primary-btn" data-open-form="staff" data-page="staff" type="button"><span data-icon="plus"></span>Add Staff</button>
    </header>

    <section class="stat-grid">
      <article class="stat-card"><div><span>Total Staff</span><strong>142</strong><small>Active records</small></div><b class="stat-icon green" data-icon="staff"></b></article>
      <article class="stat-card"><div><span>Doctors</span><strong>38</strong><small>Consultants included</small></div><b class="stat-icon blue" data-icon="user"></b></article>
      <article class="stat-card"><div><span>Nurses</span><strong>82</strong><small>Ward coverage</small></div><b class="stat-icon purple" data-icon="patients"></b></article>
      <article class="stat-card"><div><span>On Duty</span><strong>95%</strong><small>Today</small></div><b class="stat-icon orange" data-icon="clock"></b></article>
    </section>

    <section class="table-card">
      <div class="table-wrap">
        <table class="staff-table">
          <thead><tr><th>Staff</th><th>Role</th><th>Department</th><th>Ward</th><th>Extension</th><th>Schedule</th></tr></thead>
          <tbody>
            ${staff.map(item => `
              <tr>
                <td><strong>${item.name}</strong></td>
                <td>${item.role}</td>
                <td>${item.department}</td>
                <td>${item.ward}</td>
                <td>${item.extension}</td>
                <td>${item.schedule}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderWardsPage() {
  const occupied = wards.reduce((sum, ward) => sum + ward.occupied, 0);

  return `
    <header class="page-header">
      <div>
        <h2>Ward Management</h2>
        <p>Monitor ward capacity and bed allocation</p>
      </div>
    </header>

    <section class="stat-grid">
      <article class="stat-card"><div><span>Total Wards</span><strong>17</strong></div><b class="stat-icon blue" data-icon="wards"></b></article>
      <article class="stat-card"><div><span>Total Beds</span><strong>240</strong><small>${occupied} occupied</small></div><b class="stat-icon green" data-icon="bed"></b></article>
      <article class="stat-card"><div><span>Occupancy Rate</span><strong>88%</strong></div><b class="stat-icon purple" data-icon="patients"></b></article>
    </section>

    <section class="ward-grid">
      ${wards.map(ward => {
        const percent = Math.round((ward.occupied / ward.capacity) * 100);
        const bar = percent >= 90 ? "hot" : percent >= 75 ? "" : "ok";
        return `
          <article class="ward-card" data-ward-number="${ward.number}" style="cursor:pointer">
            <div class="ward-top">
              <div><h3>Ward ${ward.number}</h3><p>${ward.name}</p></div>
              <span class="block-tag">${ward.block}</span>
            </div>
            <div class="ward-body">
              <div class="ward-meta">
                <div><span>Charge Nurse</span><strong>${ward.charge}</strong></div>
                <div><span>Extension</span><strong>${ward.extension}</strong></div>
              </div>
              <div class="occupancy">
                <div class="occupancy-head"><span>Bed Occupancy</span><strong>${ward.occupied} / ${ward.capacity}</strong></div>
                <div class="progress"><i class="${bar}" style="width:${percent}%"></i></div>
                <small>${ward.capacity - ward.occupied} beds available</small>
              </div>
              <div class="ward-stats">
                <div class="mini-stat"><span class="mini-icon" data-icon="patients"></span><div><span>Patients</span><strong>${ward.occupied}</strong></div></div>
                <div class="mini-stat staff"><span class="mini-icon" data-icon="staff"></span><div><span>Staff</span><strong>${ward.staff}</strong></div></div>
              </div>
            </div>
          </article>
        `;
      }).join("")}
    </section>

    <div id="wardDetails"></div>
  `;
}

function renderAppointmentsPage() {
  return `
    <header class="page-header">
      <div>
        <h2>Appointments</h2>
        <p>Schedule and manage patient appointments</p>
      </div>
      <button class="primary-btn" data-open-form="appointment" data-page="appointments" type="button"><span data-icon="plus"></span>Schedule Appointment</button>
    </header>

    <section class="stat-grid">
      <article class="stat-card"><div><span>Today's Appointments</span><strong>24</strong></div><b class="stat-icon blue" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>Completed</span><strong>8</strong></div><b class="stat-icon green" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>In Progress</span><strong>3</strong></div><b class="stat-icon orange" data-icon="clock"></b></article>
      <article class="stat-card"><div><span>Upcoming</span><strong>13</strong></div><b class="stat-icon purple" data-icon="calendar"></b></article>
    </section>

    <section class="list-card">
      ${appointments.map(item => `
        <article class="appointment-row">
          <span class="time-badge">${item.time}</span>
          <div class="row-main">
            <div><strong>${item.patient}</strong> <span class="subtext">(${item.patientId})</span> <span class="pill ${statusClass(item.status)}">${item.status}</span></div>
            <div class="row-details">
              <span>${item.doctor}</span>
              <span>${item.room}</span>
              <span>${item.type}</span>
            </div>
          </div>
          <div class="actions"><button class="icon-button" type="button">${icons.eye}</button><button class="icon-button edit" type="button">${icons.edit}</button></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderMedicationsPage() {
  return `
    <header class="page-header">
      <div>
        <h2>Medication Tracking</h2>
        <p>Record and monitor patient medications</p>
      </div>
      <button class="primary-btn" data-open-form="medication" data-page="medications" type="button"><span data-icon="plus"></span>Prescribe Medication</button>
    </header>

    <section class="stat-grid">
      <article class="stat-card"><div><span>Active Prescriptions</span><strong>342</strong></div><b class="stat-icon blue" data-icon="pulse"></b></article>
      <article class="stat-card"><div><span>Medications Today</span><strong>156</strong></div><b class="stat-icon green" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>Drug Types</span><strong>84</strong></div><b class="stat-icon purple" data-icon="pulse"></b></article>
      <article class="stat-card"><div><span>Expiring Soon</span><strong>12</strong></div><b class="stat-icon orange" data-icon="calendar"></b></article>
    </section>

    <section class="table-card">
      <div class="table-wrap">
        <table class="med-table">
          <thead><tr><th>Patient</th><th>Ward/Bed</th><th>Medication</th><th>Dosage</th><th>Method</th><th>Units/Day</th><th>Duration</th><th>Status</th></tr></thead>
          <tbody>
            ${medications.map(item => `
              <tr>
                <td><strong>${item.patient}</strong><span class="subtext">${item.patientId}</span></td>
                <td>${item.ward}<br><span class="subtext">${item.bed}</span></td>
                <td><strong>${item.name}</strong><span class="subtext">${item.description}</span></td>
                <td>${item.dosage}</td>
                <td><span class="pill ${item.method === "IV" ? "progress" : "in"}">${item.method}</span></td>
                <td>${item.units}</td>
                <td>${displayDate(item.start)}<br>${displayDate(item.finish)}</td>
                <td><span class="pill ${statusClass(item.status)}">${item.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderField(field) {
  const wide = field.wide ? "wide" : "";
  const value = field.value || "";

  if (field.type === "select") {
    return `
      <label class="${wide}">
        <span>${field.label}</span>
        <select name="${field.name}">
          ${field.options.map(option => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }

  return `
    <label class="${wide}">
      <span>${field.label}</span>
      <input name="${field.name}" type="${field.type || "text"}" value="${value}" placeholder="${field.placeholder || ""}" ${field.required ? "required" : ""}>
    </label>
  `;
}

function openRecordForm(type) {
  const configs = {
    staff: {
      title: "Add Staff",
      subtitle: "Create a new staff record",
      fields: [
        { label: "Staff ID", name: "id", value: nextStaffId(), required: true },
        { label: "Full Name", name: "name", placeholder: "Dr. Jane Miller", required: true },
        { label: "Role", name: "role", type: "select", options: ["Medical Director", "Personnel Officer", "Charge Nurse", "Staff Nurse", "Consultant"] },
        { label: "Department", name: "department", placeholder: "Orthopaedic" },
        { label: "Ward", name: "ward", type: "select", options: ["N/A", "Ward 11", "Ward 12", "Ward 13", "Ward 14", "Ward 15", "Ward 16"] },
        { label: "Extension", name: "extension", placeholder: "7717" },
        { label: "Schedule", name: "schedule", placeholder: "Mon-Fri", wide: true }
      ]
    },
    appointment: {
      title: "Schedule Appointment",
      subtitle: "Book a patient appointment with a doctor",
      fields: [
        { label: "Patient", name: "patient", type: "select", options: patients.map(patientName), required: true },
        { label: "Doctor", name: "doctor", type: "select", options: ["Dr. Helen Pearson", "Dr. Laurence Burns", "Dr. John Smith"] },
        { label: "Date", name: "date", type: "date", required: true },
        { label: "Time", name: "time", type: "time", required: true },
        { label: "Room", name: "room", placeholder: "Room E252" },
        { label: "Type", name: "type", placeholder: "Initial Consultation" },
        { label: "Status", name: "status", type: "select", options: ["Scheduled", "In Progress", "Completed"] }
      ]
    },
    medication: {
      title: "Prescribe Medication",
      subtitle: "Add medication to a patient record",
      fields: [
        { label: "Patient", name: "patient", type: "select", options: patients.map(patientName), required: true },
        { label: "Drug Number", name: "drugNo", placeholder: "10223", required: true },
        { label: "Drug Name", name: "name", placeholder: "Morphine", required: true },
        { label: "Description", name: "description", placeholder: "Pain killer" },
        { label: "Dosage", name: "dosage", placeholder: "10mg/ml" },
        { label: "Method", name: "method", type: "select", options: ["Oral", "IV", "Injection"] },
        { label: "Units/Day", name: "units", placeholder: "10" },
        { label: "Start Date", name: "start", type: "date" },
        { label: "Finish Date", name: "finish", type: "date" },
        { label: "Status", name: "status", type: "select", options: ["Active", "Completed"] }
      ]
    }
  };

  const config = configs[type];
  recordForm.dataset.type = type;
  recordTitle.textContent = config.title;
  recordSubtitle.textContent = config.subtitle;
  recordFields.innerHTML = config.fields.map(renderField).join("");
  recordModal.classList.remove("hidden");
}

function closeRecordModal() {
  recordModal.classList.add("hidden");
  recordForm.reset();
}

function closeSocialModal() {
  socialModal.classList.add("hidden");
  socialForm.reset();
  socialFields.innerHTML = "";
}

function addRecord(type, values) {
  if (type === "staff") {
    staff.push(values);
    setActivePage("staff");
  }

  if (type === "appointment") {
    const patient = patients.find(item => patientName(item) === values.patient);
    appointments.push({
      time: values.time,
      patient: values.patient,
      patientId: patient?.id || "N/A",
      doctor: values.doctor,
      room: values.room || "N/A",
      type: values.type || "N/A",
      status: values.status,
      date: values.date
    });
    setActivePage("appointments");
  }

  if (type === "medication") {
    const patient = patients.find(item => patientName(item) === values.patient);
    const medication = {
      patient: values.patient,
      patientId: patient?.id || "N/A",
      ward: patient?.ward || "N/A",
      bed: patient?.bed || "N/A",
      drugNo: values.drugNo,
      name: values.name,
      description: values.description || "N/A",
      dosage: values.dosage || "N/A",
      method: values.method,
      units: values.units || "N/A",
      start: values.start,
      finish: values.finish,
      status: values.status
    };

    medications.push(medication);
    if (patient) patient.medication.push(medication);
    setActivePage("medications");
  }
}

authForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = authEmail.value.trim();
  const password = authPassword.value;
  const role = document.querySelector("#authRole").value;

  if (authMode === "register") {
    registeredAccount = {
      firstName: document.querySelector("#authFirstName").value.trim() || "John",
      lastName: document.querySelector("#authLastName").value.trim() || "Smith",
      phone: document.querySelector("#authPhone").value.trim(),
      role,
      staffId: defaultStaffIdForRole(role),
      email,
      password,
      hasLoggedInBefore: false
    };

    localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));
    setAuthMode("login");
    authTitle.textContent = "Welcome Back";
    authSubtitle.textContent = "Account created. Please sign in using your new account.";
    authEmail.value = "";
    authPassword.value = "";
    authMessage.textContent = "";
    return;
  }

  if (!registeredAccount) {
    authMessage.textContent = "No account found. Please create an account first.";
    return;
  }

  if (email === registeredAccount.email && password === registeredAccount.password) {
    localStorage.removeItem("wellmeadowsRememberEmail");
    showApp(registeredAccount, !registeredAccount.hasLoggedInBefore);
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

forgotPassword.addEventListener("click", event => {
  event.preventDefault();
  authMessage.textContent = "Please contact the Personnel Office to reset your password.";
});

socialButtons.forEach(button => {
  button.addEventListener("click", () => {
    const provider = button.dataset.socialLogin;

    socialForm.reset();
    socialProvider.value = provider;
    socialTitle.textContent = `Continue with ${provider}`;

    if (provider === "Hospital ID") {
      socialSubtitle.textContent = "Enter your assigned Wellmeadows staff ID.";
      socialFields.innerHTML = `
        <label class="wide">
          <span>Hospital Staff ID</span>
          <input id="socialHospitalId" placeholder="Enter your staff ID" required autocomplete="off">
        </label>
      `;
    } else {
      socialSubtitle.textContent = "Fill up the needed hospital access details.";
      socialFields.innerHTML = `
        <label>
          <span>First Name</span>
          <input id="socialFirstName" required autocomplete="off">
        </label>

        <label>
          <span>Last Name</span>
          <input id="socialLastName" required autocomplete="off">
        </label>

        <label>
          <span>Email Address</span>
          <input id="socialEmail" type="email" required autocomplete="off">
        </label>

        <label>
          <span>Phone Number</span>
          <input id="socialPhone" placeholder="0131-XXX-XXXX" autocomplete="off">
        </label>

        <label>
          <span>Role</span>
          <select id="socialRole">
            <option>Medical Director</option>
            <option>Personnel Officer</option>
            <option>Charge Nurse</option>
            <option>Staff Nurse</option>
            <option>Consultant</option>
          </select>
        </label>
      `;
    }

    socialModal.classList.remove("hidden");
    hydrateIcons(socialModal);
  });
});

socialForm.addEventListener("submit", event => {
  event.preventDefault();

  const provider = socialProvider.value;

  if (provider === "Hospital ID") {
    const enteredId = document.querySelector("#socialHospitalId").value.trim().toUpperCase();
    const staffAccount = hospitalIdAccounts[enteredId];

    if (!staffAccount) {
      alert("Hospital Staff ID not found. Please check your assigned staff ID.");
      return;
    }

    registeredAccount = {
      ...staffAccount,
      staffId: enteredId,
      password: "",
      provider,
      hasLoggedInBefore: false
    };
  } else {
    const role = document.querySelector("#socialRole").value;

    registeredAccount = {
      firstName: document.querySelector("#socialFirstName").value.trim() || "John",
      lastName: document.querySelector("#socialLastName").value.trim() || "Smith",
      phone: document.querySelector("#socialPhone").value.trim(),
      role,
      staffId: defaultStaffIdForRole(role),
      email: document.querySelector("#socialEmail").value.trim(),
      password: "",
      provider,
      hasLoggedInBefore: false
    };
  }

  localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));

  closeSocialModal();
  authEmail.value = "";
  authPassword.value = "";
  showApp(registeredAccount, true);
});

socialClose.addEventListener("click", closeSocialModal);
socialCancel.addEventListener("click", closeSocialModal);

socialModal.addEventListener("click", event => {
  if (event.target === socialModal) closeSocialModal();
});

logoutBtn.addEventListener("click", showLoggedOutLogin);

navItems.forEach(item => item.addEventListener("click", () => setActivePage(item.dataset.page)));
moduleCards.forEach(card => card.addEventListener("click", () => setActivePage(card.dataset.page)));

patientsBody.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  openPatientModal(Number(button.dataset.index), button.dataset.action);
});

addPatientBtn.addEventListener("click", () => {
  if (!canAccess("patients")) {
    blocked("patients");
    return;
  }
  openRegisterModal();
});

patientForm.addEventListener("submit", event => {
  event.preventDefault();

  const indexValue = patientIndex.value;
  const existing = indexValue === "" ? null : patients[Number(indexValue)];
  const payload = {};

  formFields.forEach(field => {
    const input = getField(field);
    if (input) payload[field] = input.value.trim() || "N/A";
  });

  payload.medication = existing?.medication || [];

  if (indexValue === "") {
    patients.push(payload);
  } else {
    patients[Number(indexValue)] = payload;
  }

  patientQuery = "";
  patientSearch.value = "";
  statusFilter.value = "All Status";

  renderPatients();
  closePatientModal();
});

modalDelete.addEventListener("click", () => {
  if (patientIndex.value === "") {
    closePatientModal();
    return;
  }

  const patient = patients[Number(patientIndex.value)];
  if (!confirm(`Delete ${patientName(patient)} from patient records?`)) return;

  patients.splice(Number(patientIndex.value), 1);

  patientQuery = "";
  patientSearch.value = "";
  statusFilter.value = "All Status";

  renderPatients();
  closePatientModal();
});

modalClose.addEventListener("click", closePatientModal);
modalCancel.addEventListener("click", closePatientModal);
modalDone.addEventListener("click", closePatientModal);

patientModal.addEventListener("click", event => {
  if (event.target === patientModal) closePatientModal();
});

modalDoctorName.addEventListener("change", () => {
  const details = doctorDirectory[modalDoctorName.value];
  if (!details) return;

  modalDoctorAddress.value = details.address;
  modalDoctorPhone.value = details.phone;
});

patientSearch.addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  patientQuery = patientSearch.value.trim().toLowerCase();
  renderPatients();
});

patientSearch.addEventListener("search", () => {
  if (patientSearch.value.trim() === "") {
    patientQuery = "";
    renderPatients();
  }
});

statusFilter.addEventListener("change", renderPatients);

modulePage.addEventListener("click", event => {
  const wardCard = event.target.closest("[data-ward-number]");
  if (wardCard) {
    renderWardDetails(wardCard.dataset.wardNumber);
    return;
  }

  const button = event.target.closest("[data-open-form]");
  if (!button) return;

  const page = button.dataset.page;
  if (!canAccess(page)) {
    blocked(page);
    return;
  }

  openRecordForm(button.dataset.openForm);
});

recordForm.addEventListener("submit", event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(recordForm).entries());
  addRecord(recordForm.dataset.type, values);
  closeRecordModal();
});

recordClose.addEventListener("click", closeRecordModal);
recordCancel.addEventListener("click", closeRecordModal);

recordModal.addEventListener("click", event => {
  if (event.target === recordModal) closeRecordModal();
});

localStorage.removeItem("wellmeadowsRememberEmail");
authEmail.value = "";
authPassword.value = "";

hydrateIcons();
setAuthMode("login");
renderPatients();
setActivePage("dashboard");
