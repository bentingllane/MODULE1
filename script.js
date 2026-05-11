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
const modalWard = document.querySelector("#modalWard");
const modalBed = document.querySelector("#modalBed");
const modalStay = document.querySelector("#modalStay");
const recordModal = document.querySelector("#recordModal");
const recordTitle = document.querySelector("#recordTitle");
const recordSubtitle = document.querySelector("#recordSubtitle");
const recordFields = document.querySelector("#recordFields");
const recordForm = document.querySelector("#recordForm");
const recordClose = document.querySelector("#recordClose");
const recordCancel = document.querySelector("#recordCancel");
const sidebarUser = document.querySelector(".sidebar-user");

let authMode = "login";
let currentAccount = null;
let currentPage = "dashboard";
let patientQuery = "";
let editTarget = null;
let registeredAccount = JSON.parse(localStorage.getItem("wellmeadowsAccount")) || null;

const roleAccess = {
  "Medical Director": ["dashboard", "patients", "staff", "wards", "appointments", "medications"],
  "Personnel Officer": ["dashboard", "staff"],
  "Charge Nurse": ["dashboard", "patients", "staff", "wards", "medications"],
  "Staff Nurse": ["dashboard", "patients", "wards", "medications"],
  "Consultant": ["dashboard", "patients", "appointments", "medications"]
};

const pageTitles = {
  dashboard: "Dashboard",
  patients: "Patient Management",
  staff: "Staff Management",
  wards: "Ward Management",
  appointments: "Appointments",
  medications: "Medication Tracking"
};

const hospitalIdAccounts = {
  S001: { firstName: "John", lastName: "Smith", phone: "0131-555-7701", role: "Medical Director", email: "john.smith@wellmeadows.com", staffId: "S001", background: "Medical Director responsible for overall hospital clinical management." },
  S011: { firstName: "Moira", lastName: "Samuel", phone: "0131-555-7711", role: "Charge Nurse", email: "moira.samuel@wellmeadows.com", staffId: "S011", background: "Charge Nurse assigned to Ward 11 Orthopaedic." },
  S099: { firstName: "Karen", lastName: "Mitchell", phone: "0131-555-7799", role: "Personnel Officer", email: "karen.mitchell@wellmeadows.com", staffId: "S099", background: "Personnel Officer assigned to staff records and schedules." },
  S123: { firstName: "Morgan", lastName: "Russell", phone: "0131-555-7723", role: "Staff Nurse", email: "morgan.russell@wellmeadows.com", staffId: "S123", background: "Staff Nurse assigned to ward patient care." },
  S344: { firstName: "Laurence", lastName: "Burns", phone: "0131-555-7722", role: "Consultant", email: "laurence.burns@wellmeadows.com", staffId: "S344", background: "Consultant responsible for out-patient care and reviews." },
  S355: { firstName: "Helen", lastName: "Pearson", phone: "0131-555-7721", role: "Consultant", email: "helen.pearson@wellmeadows.com", staffId: "S355", background: "Consultant responsible for patient consultations and referrals." }
};

const doctorDirectory = {
  "": { address: "", phone: "" },
  "N/A": { address: "N/A", phone: "N/A" },
  "Dr. Helen Pearson": { address: "22 Cannongate Way, Edinburgh, EH1 6TY", phone: "0131-332-0012" },
  "Dr. Laurence Burns": { address: "Out-Patient Clinic, Wellmeadows Hospital, Edinburgh", phone: "0131-555-7722" },
  "Dr. John Smith": { address: "Administration Office, Wellmeadows Hospital, Edinburgh", phone: "0131-555-7701" },
  "Local doctor referral": { address: "N/A", phone: "N/A" }
};

const wards = [
  { number: "1", name: "General Medical", block: "Block A", charge: "Anne White", staffId: "S123", extension: "7701", capacity: 14, staff: 6 },
  { number: "2", name: "Surgical", block: "Block A", charge: "Brian Adams", staffId: "S201", extension: "7702", capacity: 14, staff: 7 },
  { number: "3", name: "Children", block: "Block A", charge: "Clara Evans", staffId: "S202", extension: "7703", capacity: 14, staff: 8 },
  { number: "4", name: "Maternity", block: "Block B", charge: "Diana King", staffId: "S203", extension: "7704", capacity: 14, staff: 7 },
  { number: "5", name: "Emergency", block: "Block B", charge: "Edward Lee", staffId: "S204", extension: "7705", capacity: 14, staff: 9 },
  { number: "6", name: "Intensive Care", block: "Block B", charge: "Fiona Clark", staffId: "S205", extension: "7706", capacity: 14, staff: 10 },
  { number: "7", name: "Renal", block: "Block C", charge: "George Hill", staffId: "S206", extension: "7707", capacity: 14, staff: 6 },
  { number: "8", name: "Oncology", block: "Block C", charge: "Hannah Scott", staffId: "S207", extension: "7708", capacity: 14, staff: 6 },
  { number: "9", name: "ENT", block: "Block C", charge: "Ian Wood", staffId: "S208", extension: "7709", capacity: 14, staff: 5 },
  { number: "10", name: "Dermatology", block: "Block D", charge: "Julia Green", staffId: "S209", extension: "7710", capacity: 14, staff: 5 },
  { number: "11", name: "Orthopaedic", block: "Block E", charge: "Moira Samuel", staffId: "S011", extension: "7711", capacity: 14, staff: 12 },
  { number: "12", name: "Cardiology", block: "Block A", charge: "Sarah Johnson", staffId: "S022", extension: "7712", capacity: 14, staff: 10 },
  { number: "13", name: "Geriatric", block: "Block B", charge: "Michael Brown", staffId: "S033", extension: "7713", capacity: 14, staff: 15 },
  { number: "14", name: "Respiratory", block: "Block C", charge: "Emma Wilson", staffId: "S044", extension: "7714", capacity: 14, staff: 8 },
  { number: "15", name: "Neurology", block: "Block D", charge: "James Anderson", staffId: "S055", extension: "7715", capacity: 14, staff: 11 },
  { number: "16", name: "General Medical", block: "Block E", charge: "Lisa Taylor", staffId: "S066", extension: "7716", capacity: 15, staff: 14 },
  { number: "17", name: "Out-Patient Clinic", block: "Block F", charge: "N/A", staffId: "N/A", extension: "7720", capacity: 15, staff: 6 }
];

const staff = [
  { id: "S001", name: "Dr. John Smith", role: "Medical Director", department: "Administration", ward: "N/A", extension: "7701", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S011", name: "Moira Samuel", role: "Charge Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S098", name: "Carol Cummings", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", shift: "Late", days: "Monday-Friday", schedule: "Monday-Friday / Late" },
  { id: "S123", name: "Morgan Russell", role: "Staff Nurse", department: "General Medical", ward: "Ward 1", extension: "7701", shift: "Night", days: "Monday-Friday", schedule: "Monday-Friday / Night" },
  { id: "S167", name: "Robin Plevin", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S234", name: "Amy O'Donnell", role: "Staff Nurse", department: "Orthopaedic", ward: "Ward 11", extension: "7711", shift: "Night", days: "Monday-Friday", schedule: "Monday-Friday / Night" },
  { id: "S022", name: "Sarah Johnson", role: "Charge Nurse", department: "Cardiology", ward: "Ward 12", extension: "7712", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S033", name: "Michael Brown", role: "Charge Nurse", department: "Geriatric", ward: "Ward 13", extension: "7713", shift: "Night", days: "Monday-Friday", schedule: "Monday-Friday / Night" },
  { id: "S044", name: "Emma Wilson", role: "Charge Nurse", department: "Respiratory", ward: "Ward 14", extension: "7714", shift: "Late", days: "Monday-Friday", schedule: "Monday-Friday / Late" },
  { id: "S055", name: "James Anderson", role: "Charge Nurse", department: "Neurology", ward: "Ward 15", extension: "7715", shift: "Night", days: "Monday-Friday", schedule: "Monday-Friday / Night" },
  { id: "S066", name: "Lisa Taylor", role: "Charge Nurse", department: "General Medical", ward: "Ward 16", extension: "7716", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S344", name: "Dr. Laurence Burns", role: "Consultant", department: "Out-Patient Clinic", ward: "N/A", extension: "7722", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" },
  { id: "S355", name: "Dr. Helen Pearson", role: "Consultant", department: "Out-Patient Clinic", ward: "N/A", extension: "7721", shift: "Early", days: "Monday-Friday", schedule: "Monday-Friday / Early" }
];

const patients = [
  {
    id: "P10234", firstName: "Anne", lastName: "Phelps", dob: "1933-12-12", sex: "Female", maritalStatus: "Single",
    phone: "0131-332-4111", address: "44 North Bridges, Cannonmills, Edinburgh, EH1 5GH", registered: "1995-02-21",
    status: "In-Patient", ward: "Ward 11", bed: "W11-B01", waitingDate: "", expectedStay: "7", datePlaced: "1996-05-01", dateLeave: "",
    kinName: "James Phelps", kinRelationship: "Father", kinAddress: "145 Rowlands Street, Paisley, PA2 5FE", kinPhone: "0141-848-2211",
    doctorName: "Dr. Helen Pearson", doctorAddress: doctorDirectory["Dr. Helen Pearson"].address, doctorPhone: doctorDirectory["Dr. Helen Pearson"].phone,
    medication: []
  },
  {
    id: "P10451", firstName: "Robert", lastName: "MacDonald", dob: "1947-06-18", sex: "Male", maritalStatus: "Married",
    phone: "0131-556-8899", address: "123 High Street, Edinburgh", registered: "1996-01-12",
    status: "In-Patient", ward: "Ward 11", bed: "W11-B02", waitingDate: "1996-01-12", expectedStay: "5", datePlaced: "1996-01-12", dateLeave: "1996-01-17",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A",
    doctorName: "Local doctor referral", doctorAddress: "N/A", doctorPhone: "N/A",
    medication: []
  },
  {
    id: "P10480", firstName: "Steven", lastName: "Parks", dob: "1940-08-09", sex: "Male", maritalStatus: "Widowed",
    phone: "01506-78910", address: "56 George Street, Broxburn", registered: "1996-01-12",
    status: "In-Patient", ward: "Ward 11", bed: "W11-B03", waitingDate: "1996-01-12", expectedStay: "4", datePlaced: "1996-01-14", dateLeave: "1996-01-18",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Local doctor referral", doctorAddress: "N/A", doctorPhone: "N/A", medication: []
  },
  {
    id: "P10563", firstName: "David", lastName: "Black", dob: "1953-02-20", sex: "Male", maritalStatus: "Single",
    phone: "0131-225-7766", address: "89 Princes Street, Edinburgh", registered: "1996-01-13",
    status: "Out-Patient", ward: "Ward 17", bed: "N/A", waitingDate: "1996-01-13", expectedStay: "14", datePlaced: "1996-01-13", dateLeave: "1996-01-27",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Dr. Laurence Burns", doctorAddress: doctorDirectory["Dr. Laurence Burns"].address, doctorPhone: doctorDirectory["Dr. Laurence Burns"].phone, medication: []
  },
  {
    id: "P10604", firstName: "Ian", lastName: "Thompson", dob: "1944-11-04", sex: "Male", maritalStatus: "Married",
    phone: "0131-447-3322", address: "34 Rose Street, Edinburgh", registered: "1996-01-14",
    status: "Waiting List", ward: "Ward 11", bed: "N/A", waitingDate: "1996-01-14", expectedStay: "10", datePlaced: "1996-01-15", dateLeave: "1996-01-25",
    kinName: "N/A", kinRelationship: "N/A", kinAddress: "N/A", kinPhone: "N/A", doctorName: "Dr. Laurence Burns", doctorAddress: doctorDirectory["Dr. Laurence Burns"].address, doctorPhone: doctorDirectory["Dr. Laurence Burns"].phone, medication: []
  }
];

const appointments = [
  { time: "09:00", patient: "Anne Phelps", patientId: "P10234", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Initial Consultation", status: "Scheduled", date: "2026-05-04" },
  { time: "10:30", patient: "David Black", patientId: "P10563", doctor: "Dr. Laurence Burns", room: "Room E253", type: "Follow-up", status: "Scheduled", date: "2026-05-04" },
  { time: "11:00", patient: "Robert MacDonald", patientId: "P10451", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Treatment Review", status: "In Progress", date: "2026-05-04" },
  { time: "14:00", patient: "Ian Thompson", patientId: "P10604", doctor: "Dr. Laurence Burns", room: "Room E254", type: "Pre-admission Assessment", status: "Scheduled", date: "2026-05-04" },
  { time: "15:30", patient: "Steven Parks", patientId: "P10480", doctor: "Dr. Helen Pearson", room: "Room E252", type: "Discharge Planning", status: "Scheduled", date: "2026-05-04" }
];

const medications = [
  { patient: "Robert MacDonald", patientId: "P10451", ward: "Ward 11", bed: "W11-B02", drugNo: "10223", name: "Morphine", description: "Pain killer", dosage: "10mg/ml", method: "Oral", units: "50", start: "1996-03-24", finish: "1996-04-24", status: "Active" },
  { patient: "Robert MacDonald", patientId: "P10451", ward: "Ward 11", bed: "W11-B02", drugNo: "10334", name: "Tetracycline", description: "Antibiotic", dosage: "0.5mg/ml", method: "IV", units: "10", start: "1996-03-24", finish: "1996-04-17", status: "Completed" },
  { patient: "Anne Phelps", patientId: "P10234", ward: "Ward 11", bed: "W11-B01", drugNo: "10422", name: "Ibuprofen", description: "Pain relief", dosage: "200mg", method: "Oral", units: "30", start: "1996-05-01", finish: "1996-05-15", status: "Active" },
  { patient: "David Black", patientId: "P10563", ward: "Ward 17", bed: "N/A", drugNo: "10551", name: "Warfarin", description: "Anticoagulant", dosage: "5mg", method: "Oral", units: "5", start: "1996-04-28", finish: "1996-05-28", status: "Active" }
];

const formFields = ["id", "firstName", "lastName", "dob", "sex", "maritalStatus", "address", "phone", "registered", "status", "ward", "bed", "waitingDate", "expectedStay", "datePlaced", "dateLeave", "kinName", "kinRelationship", "kinAddress", "kinPhone", "doctorName", "doctorAddress", "doctorPhone"];

const fieldIds = {
  id: "modalPatientId",
  maritalStatus: "modalMarital",
  expectedStay: "modalStay",
  datePlaced: "modalDatePlaced",
  dateLeave: "modalDateLeave"
};

function ensureCenterPopup() {
  let popup = document.querySelector("#centerPopup");

  if (popup) return popup;

  popup = document.createElement("div");
  popup.id = "centerPopup";
  popup.innerHTML = `
    <div class="center-popup-card">
      <h3 id="centerPopupTitle">Message</h3>
      <p id="centerPopupText"></p>
      <div class="center-popup-actions" id="centerPopupActions"></div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #centerPopup {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: none;
      place-items: center;
      padding: 24px;
      background: rgba(15, 23, 42, .46);
    }

    #centerPopup.show {
      display: grid;
    }

    .center-popup-card {
      width: min(390px, 100%);
      padding: 26px;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 24px 70px rgba(15, 23, 42, .28);
      text-align: center;
    }

    .center-popup-card h3 {
      margin: 0 0 10px;
      color: #06122a;
      font-size: 22px;
    }

    .center-popup-card p {
      margin: 0;
      color: #4b5d75;
      line-height: 1.5;
    }

    .center-popup-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 22px;
    }

    .center-popup-actions button {
      min-width: 92px;
      min-height: 42px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #fff;
      color: #06122a;
      font-weight: 800;
      cursor: pointer;
    }

    .center-popup-actions .ok-btn {
      border: 0;
      color: #fff;
      background: #1557ff;
    }

    .center-popup-actions .danger-ok {
      border: 0;
      color: #fff;
      background: #ef1235;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(popup);
  return popup;
}

function showCenterMessage(title, message, buttonText = "OK") {
  const popup = ensureCenterPopup();
  const titleEl = popup.querySelector("#centerPopupTitle");
  const textEl = popup.querySelector("#centerPopupText");
  const actions = popup.querySelector("#centerPopupActions");

  titleEl.textContent = title;
  textEl.textContent = message;
  actions.innerHTML = `<button class="ok-btn" type="button">${buttonText}</button>`;

  popup.classList.add("show");

  actions.querySelector("button").onclick = () => {
    popup.classList.remove("show");
  };
}

function showCenterConfirm(title, message, onConfirm) {
  const popup = ensureCenterPopup();
  const titleEl = popup.querySelector("#centerPopupTitle");
  const textEl = popup.querySelector("#centerPopupText");
  const actions = popup.querySelector("#centerPopupActions");

  titleEl.textContent = title;
  textEl.textContent = message;
  actions.innerHTML = `
    <button class="ok-btn" id="centerConfirmOk" type="button">OK</button>
    <button id="centerConfirmCancel" type="button">Cancel</button>
  `;

  popup.classList.add("show");

  popup.querySelector("#centerConfirmCancel").onclick = () => {
    popup.classList.remove("show");
  };

  popup.querySelector("#centerConfirmOk").onclick = () => {
    popup.classList.remove("show");
    onConfirm();
  };
}

function showSavedPopup(message = "Saved successfully.") {
  showCenterMessage("Saved", message);
}

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
  showCenterMessage("Access Locked", `Your role is ${currentRole()}. ${pageTitles[page] || "This module"} is locked for this role.`);
}

function patientName(patient) {
  return `${patient.firstName || ""} ${patient.lastName || ""}`.trim() || "New Patient";
}

function normalizeName(value) {
  return String(value || "").toLowerCase().replace(/\bdr\b/g, "").replace(/[^a-z]/g, "");
}

function initials(name) {
  return name.split(" ").filter(Boolean).map(part => part[0]).join("").slice(0, 3).toUpperCase() || "WM";
}

function ageFromDob(dob) {
  if (!dob) return "N/A";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "N/A";
  const today = new Date("2026-05-11");
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

function wardOptionText(ward) {
  return `Ward ${ward.number} - ${ward.name}`;
}

function wardLabel(ward) {
  return `Ward ${ward.number}`;
}

function wardByValue(value) {
  if (!value || value === "N/A" || value === "Out-Patient Clinic") return null;
  const number = String(value).match(/\d+/)?.[0];
  return wards.find(ward => ward.number === number) || null;
}

function bedOptionsForWard(value) {
  const ward = wardByValue(value);
  if (!ward) return ["N/A"];

  return Array.from({ length: ward.capacity }, (_, index) => {
    return `W${String(ward.number).padStart(2, "0")}-B${String(index + 1).padStart(2, "0")}`;
  });
}

function refreshWardOptions(selected = "") {
  modalWard.innerHTML = `<option value="">Select ward</option><option>N/A</option>` + wards.map(ward => `<option>${wardOptionText(ward)}</option>`).join("");

  if (selected?.startsWith("Ward ")) {
    const number = selected.match(/\d+/)?.[0];
    const match = wards.find(ward => ward.number === number);
    modalWard.value = match ? wardOptionText(match) : selected;
  } else {
    modalWard.value = selected || "";
  }

  refreshBedOptions();
}

function refreshBedOptions(selected = "") {
  const beds = bedOptionsForWard(modalWard.value);
  modalBed.innerHTML = `<option value="">Select bed</option>` + beds.map(bed => `<option>${bed}</option>`).join("");
  modalBed.value = beds.includes(selected) ? selected : "";
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
  showCenterConfirm("Confirm Logout", "Are you sure you want to log out?", () => {
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
  });
}

function setActivePage(page) {
  if (!canAccess(page)) {
    blocked(page);
    return;
  }

  currentPage = page;
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
  return patients.filter(patient => {
    const ward = wardByValue(patient.ward);
    return ward?.number === String(wardNumber);
  });
}

function wardStaffFor(wardNumber) {
  return staff.filter(member => member.ward === `Ward ${wardNumber}`);
}

function wardOccupiedCount(ward) {
  return wardPatientsFor(ward.number).filter(patient => patient.status === "In-Patient").length;
}

function openWardDetails(wardNumber) {
  const ward = wards.find(item => item.number === String(wardNumber));
  const wardPatients = wardPatientsFor(wardNumber);
  const wardStaff = wardStaffFor(wardNumber);

  editTarget = { type: "profile" };
  recordTitle.textContent = `Ward ${ward.number} - ${ward.name}`;
  recordSubtitle.textContent = `${ward.block} | Charge Nurse: ${ward.charge} | Extension ${ward.extension}`;

  recordFields.innerHTML = `
    <label class="wide">
      <span>Patients Assigned</span>
      <div class="mini-list">
        ${
          wardPatients.length
            ? wardPatients.map(patient => `
              <article class="med-list">
                <strong>${patientName(patient)}</strong>
                <span>${patient.id} | ${patient.status} | ${patient.bed || "N/A"}</span>
                <small>${patient.phone || "N/A"} | ${patient.doctorName || "N/A"}</small>
              </article>
            `).join("")
            : `<p class="empty-note">No patients currently assigned to Ward ${ward.number}.</p>`
        }
      </div>
    </label>

    <label class="wide">
      <span>Available Staff</span>
      <div class="mini-list">
        ${
          wardStaff.length
            ? wardStaff.map(member => `
              <article class="med-list">
                <strong>${member.name}</strong>
                <span>${member.role} | ${member.department}</span>
                <small>Extension ${member.extension} | ${member.schedule}</small>
              </article>
            `).join("")
            : `<p class="empty-note">No available staff listed for Ward ${ward.number}.</p>`
        }
      </div>
    </label>
  `;

  recordForm.querySelector("button[type='submit']").classList.add("hidden");
  recordModal.classList.remove("hidden");
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
  `).join("") || `<tr><td colspan="7">No patient found.</td></tr>`;

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
    if (field === "ward" || field === "bed") return;
    const input = getField(field);
    if (input) input.value = patient[field] || "";
  });

  refreshWardOptions(patient.ward || "");
  refreshBedOptions(patient.bed || "");

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
      <article class="stat-card"><div><span>Total Staff</span><strong>${staff.length}</strong><small>Active records</small></div><b class="stat-icon green" data-icon="staff"></b></article>
      <article class="stat-card"><div><span>Charge Nurses</span><strong>${staff.filter(item => item.role === "Charge Nurse").length}</strong><small>Ward coverage</small></div><b class="stat-icon blue" data-icon="user"></b></article>
      <article class="stat-card"><div><span>Staff Nurses</span><strong>${staff.filter(item => item.role === "Staff Nurse").length}</strong><small>Patient care</small></div><b class="stat-icon purple" data-icon="patients"></b></article>
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
  const totalBeds = wards.reduce((sum, ward) => sum + ward.capacity, 0);
  const occupied = wards.reduce((sum, ward) => sum + wardOccupiedCount(ward), 0);
  const rate = Math.round((occupied / totalBeds) * 100);

  return `
    <header class="page-header">
      <div>
        <h2>Ward Management</h2>
        <p>Monitor ward capacity and bed allocation</p>
      </div>
    </header>

    <section class="stat-grid">
      <article class="stat-card"><div><span>Total Wards</span><strong>${wards.length}</strong></div><b class="stat-icon blue" data-icon="wards"></b></article>
      <article class="stat-card"><div><span>Total Beds</span><strong>${totalBeds}</strong><small>${occupied} occupied</small></div><b class="stat-icon green" data-icon="bed"></b></article>
      <article class="stat-card"><div><span>Occupancy Rate</span><strong>${rate}%</strong></div><b class="stat-icon purple" data-icon="patients"></b></article>
    </section>

    <section class="ward-grid">
      ${wards.map(ward => {
        const realOccupied = wardOccupiedCount(ward);
        const percent = Math.round((realOccupied / ward.capacity) * 100);
        const bar = percent >= 90 ? "hot" : percent >= 75 ? "" : "ok";
        return `
          <article class="ward-card" data-ward-number="${ward.number}" style="cursor:pointer">
            <div class="ward-top">
              <div><h3>Ward ${ward.number}</h3><p>${ward.name}</p></div>
              <span class="block-tag">${ward.block}</span>
            </div>
            <div class="ward-body">
              <div class="ward-meta">
                <div><span>Charge Nurse</span><strong>${ward.charge}</strong><small>Staff #${ward.staffId}</small></div>
                <div><span>Extension</span><strong>${ward.extension}</strong></div>
              </div>
              <div class="occupancy">
                <div class="occupancy-head"><span>Bed Occupancy</span><strong>${realOccupied} / ${ward.capacity}</strong></div>
                <div class="progress"><i class="${bar}" style="width:${percent}%"></i></div>
                <small>${ward.capacity - realOccupied} beds available</small>
              </div>
              <div class="ward-stats">
                <div class="mini-stat"><span class="mini-icon" data-icon="patients"></span><div><span>Patients</span><strong>${wardPatientsFor(ward.number).length}</strong></div></div>
                <div class="mini-stat staff"><span class="mini-icon" data-icon="staff"></span><div><span>Staff</span><strong>${wardStaffFor(ward.number).length}</strong></div></div>
              </div>
            </div>
          </article>
        `;
      }).join("")}
    </section>
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
      <article class="stat-card"><div><span>Appointments</span><strong>${appointments.length}</strong></div><b class="stat-icon blue" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>Completed</span><strong>${appointments.filter(item => item.status === "Completed").length}</strong></div><b class="stat-icon green" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>In Progress</span><strong>${appointments.filter(item => item.status === "In Progress").length}</strong></div><b class="stat-icon orange" data-icon="clock"></b></article>
      <article class="stat-card"><div><span>Scheduled</span><strong>${appointments.filter(item => item.status === "Scheduled").length}</strong></div><b class="stat-icon purple" data-icon="calendar"></b></article>
    </section>

    <section class="list-card">
      ${appointments.map((item, index) => `
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
          <div class="actions">
            <button class="icon-button" data-appointment-action="view" data-index="${index}" type="button">${icons.eye}</button>
            <button class="icon-button edit" data-appointment-action="edit" data-index="${index}" type="button">${icons.edit}</button>
          </div>
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
      <article class="stat-card"><div><span>Active Prescriptions</span><strong>${medications.filter(item => item.status === "Active").length}</strong></div><b class="stat-icon blue" data-icon="pulse"></b></article>
      <article class="stat-card"><div><span>Completed</span><strong>${medications.filter(item => item.status === "Completed").length}</strong></div><b class="stat-icon green" data-icon="calendar"></b></article>
      <article class="stat-card"><div><span>Drug Types</span><strong>${new Set(medications.map(item => item.name)).size}</strong></div><b class="stat-icon purple" data-icon="pulse"></b></article>
      <article class="stat-card"><div><span>Total Records</span><strong>${medications.length}</strong></div><b class="stat-icon orange" data-icon="calendar"></b></article>
    </section>

    <section class="table-card">
      <div class="table-wrap">
        <table class="med-table">
          <thead><tr><th>Patient</th><th>Ward/Bed</th><th>Medication</th><th>Dosage</th><th>Method</th><th>Units/Day</th><th>Duration</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${medications.map((item, index) => `
              <tr>
                <td><strong>${item.patient}</strong><span class="subtext">${item.patientId}</span></td>
                <td>${item.ward}<br><span class="subtext">${item.bed}</span></td>
                <td><strong>${item.name}</strong><span class="subtext">${item.description}</span></td>
                <td>${item.dosage}</td>
                <td><span class="pill ${item.method === "IV" ? "progress" : "in"}">${item.method}</span></td>
                <td>${item.units}</td>
                <td>${displayDate(item.start)}<br>${displayDate(item.finish)}</td>
                <td><span class="pill ${statusClass(item.status)}">${item.status}</span></td>
                <td>
                  <div class="actions">
                    <button class="icon-button" data-medication-action="edit" data-index="${index}" type="button">${icons.edit}</button>
                    <button class="icon-button edit" data-medication-action="delete" data-index="${index}" type="button">${icons.x}</button>
                  </div>
                </td>
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

function restoreRecordSubmit(text = "Save Record") {
  const submit = recordForm.querySelector("button[type='submit']");
  submit.classList.remove("hidden");
  submit.textContent = text;
}

function wardOptions() {
  return ["N/A", ...wards.map(ward => wardLabel(ward))];
}

function openRecordForm(type, index = null, mode = "edit") {
  editTarget = { type, index };
  restoreRecordSubmit();

  const appointment = index !== null ? appointments[index] : null;
  const medication = index !== null ? medications[index] : null;

  const configs = {
    staff: {
      title: "Add Staff",
      subtitle: "Create a new staff record",
      submit: "Save Staff",
      fields: [
        { label: "Staff ID", name: "id", value: nextStaffId(), required: true },
        { label: "Full Name", name: "name", required: true },
        { label: "Role", name: "role", type: "select", options: ["Medical Director", "Personnel Officer", "Charge Nurse", "Staff Nurse", "Consultant"] },
        { label: "Ward", name: "ward", type: "select", options: wardOptions() },
        { label: "Department", name: "department" },
        { label: "Extension", name: "extension" },
        { label: "Shift", name: "shift", type: "select", options: ["Early", "Late", "Night"] },
        { label: "Days", name: "days", type: "select", options: ["Monday-Friday", "Saturday-Sunday", "Custom"] }
      ]
    },
    appointment: {
      title: mode === "view" ? "Appointment Details" : index === null ? "Schedule Appointment" : "Edit Appointment",
      subtitle: "Type patient name and choose time",
      submit: "Save Appointment",
      fields: [
        { label: "Patient Name", name: "patient", value: appointment?.patient || "", required: true },
        { label: "Doctor", name: "doctor", value: appointment?.doctor || "Dr. Helen Pearson", type: "select", options: ["Dr. Helen Pearson", "Dr. Laurence Burns", "Dr. John Smith"] },
        { label: "Date", name: "date", value: appointment?.date || "", type: "date", required: true },
        { label: "Time", name: "time", value: appointment?.time || "", type: "time", required: true },
        { label: "Room", name: "room", value: appointment?.room || "" },
        { label: "Type", name: "type", value: appointment?.type || "" },
        { label: "Status", name: "status", value: appointment?.status || "Scheduled", type: "select", options: ["Scheduled", "In Progress", "Completed"] }
      ]
    },
    medication: {
      title: index === null ? "Prescribe Medication" : "Edit Medication",
      subtitle: "Edit medication status or delete record",
      submit: "Save Medication",
      fields: [
        { label: "Patient Name", name: "patient", value: medication?.patient || "", required: true },
        { label: "Drug Number", name: "drugNo", value: medication?.drugNo || "", required: true },
        { label: "Drug Name", name: "name", value: medication?.name || "", required: true },
        { label: "Description", name: "description", value: medication?.description || "" },
        { label: "Dosage", name: "dosage", value: medication?.dosage || "" },
        { label: "Method", name: "method", value: medication?.method || "Oral", type: "select", options: ["Oral", "IV", "Injection"] },
        { label: "Units/Day", name: "units", value: medication?.units || "" },
        { label: "Start Date", name: "start", value: medication?.start || "", type: "date" },
        { label: "Finish Date", name: "finish", value: medication?.finish || "", type: "date" },
        { label: "Status", name: "status", value: medication?.status || "Active", type: "select", options: ["Active", "Completed"] }
      ]
    }
  };

  const config = configs[type];
  recordForm.dataset.type = type;
  recordTitle.textContent = config.title;
  recordSubtitle.textContent = config.subtitle;
  recordFields.innerHTML = config.fields.map(renderField).join("");
  restoreRecordSubmit(config.submit);

  if (type === "medication" && index !== null) {
    recordFields.insertAdjacentHTML("beforeend", `<button class="danger-btn wide" data-delete-medication="${index}" type="button">Delete Medication Record</button>`);
  }

  if (type === "appointment" && mode === "view") {
    recordFields.querySelectorAll("input, select").forEach(input => input.disabled = true);
    recordForm.querySelector("button[type='submit']").classList.add("hidden");
  }

  if (type === "staff") setupStaffAutofill();

  recordModal.classList.remove("hidden");
}

function setupStaffAutofill() {
  const role = recordForm.querySelector('[name="role"]');
  const ward = recordForm.querySelector('[name="ward"]');
  const department = recordForm.querySelector('[name="department"]');
  const extension = recordForm.querySelector('[name="extension"]');

  function fill() {
    const selectedWard = wardByValue(ward.value);
    if (role.value === "Charge Nurse" && selectedWard) {
      department.value = selectedWard.name;
      extension.value = selectedWard.extension;
    }
  }

  role.addEventListener("change", fill);
  ward.addEventListener("change", fill);
}

function closeRecordModal() {
  recordModal.classList.add("hidden");
  recordForm.reset();
  editTarget = null;
}

function closeSocialModal() {
  socialModal.classList.add("hidden");
  socialForm.reset();
  socialFields.innerHTML = "";
}

function addOrUpdateRecord(type, values) {
  if (type === "staff") {
    values.schedule = `${values.days} / ${values.shift}`;
    staff.push(values);
    setActivePage("staff");
  }

  if (type === "appointment") {
    const patient = patients.find(item => patientName(item).toLowerCase() === values.patient.toLowerCase());
    const payload = {
      time: values.time,
      patient: values.patient,
      patientId: patient?.id || "N/A",
      doctor: values.doctor,
      room: values.room || "N/A",
      type: values.type || "N/A",
      status: values.status,
      date: values.date
    };

    if (editTarget.index !== null) appointments[editTarget.index] = payload;
    else appointments.push(payload);

    setActivePage("appointments");
  }

  if (type === "medication") {
    const patient = patients.find(item => patientName(item).toLowerCase() === values.patient.toLowerCase());
    const payload = {
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

    if (editTarget.index !== null) medications[editTarget.index] = payload;
    else medications.push(payload);

    setActivePage("medications");
  }

  showSavedPopup();
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
      hasLoggedInBefore: false,
      background: "Registered Wellmeadows Hospital staff account."
    };

    localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));
    setAuthMode("login");
    authTitle.textContent = "Welcome Back";
    authSubtitle.textContent = "Account created. Please sign in using your new account.";
    authEmail.value = "";
    authPassword.value = "";
    authMessage.textContent = "";
    showSavedPopup("Account created.");
    return;
  }

  if (registeredAccount && email === registeredAccount.email && password === registeredAccount.password) {
    localStorage.removeItem("wellmeadowsRememberEmail");
    showApp(registeredAccount, !registeredAccount.hasLoggedInBefore);
    registeredAccount.hasLoggedInBefore = true;
    localStorage.setItem("wellmeadowsAccount", JSON.stringify(registeredAccount));
    return;
  }

  const knownAccount = Object.values(hospitalIdAccounts).find(account => account.email.toLowerCase() === email.toLowerCase());
  if (knownAccount && password.trim()) {
    showApp({ ...knownAccount, hasLoggedInBefore: true }, false);
    return;
  }

  authMessage.textContent = "Email or password does not match your registered account.";
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
      socialSubtitle.textContent = "Enter your name and assigned Wellmeadows staff ID.";
      socialFields.innerHTML = `
        <label>
          <span>Name</span>
          <input id="socialHospitalName" required autocomplete="off">
        </label>
        <label>
          <span>Hospital Staff ID</span>
          <input id="socialHospitalId" required autocomplete="off">
        </label>
      `;
    } else {
      socialSubtitle.textContent = "Email and password only.";
      socialFields.innerHTML = `
        <label>
          <span>Email Address</span>
          <input id="socialEmail" type="email" required autocomplete="off">
        </label>
        <label>
          <span>Password</span>
          <input id="socialPassword" type="password" required autocomplete="new-password">
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
    const enteredName = normalizeName(document.querySelector("#socialHospitalName").value);
    const enteredId = document.querySelector("#socialHospitalId").value.trim().toUpperCase();
    const staffAccount = hospitalIdAccounts[enteredId];

    if (!staffAccount) {
      showCenterMessage("Login Error", "Hospital Staff ID not found.");
      return;
    }

    const correctName = normalizeName(`${staffAccount.firstName} ${staffAccount.lastName}`);
    if (enteredName !== correctName) {
      showCenterMessage("Login Error", "Name and Staff ID do not match.");
      return;
    }

    registeredAccount = {
      ...staffAccount,
      password: "",
      provider,
      hasLoggedInBefore: false
    };
  } else {
    const email = document.querySelector("#socialEmail").value.trim();
    const password = document.querySelector("#socialPassword").value.trim();
    const staffAccount = Object.values(hospitalIdAccounts).find(account => account.email.toLowerCase() === email.toLowerCase());

    registeredAccount = staffAccount
      ? { ...staffAccount, provider, password, hasLoggedInBefore: false }
      : {
          firstName: email.split("@")[0],
          lastName: "",
          phone: "N/A",
          role: "Staff Nurse",
          staffId: defaultStaffIdForRole("Staff Nurse"),
          email,
          password,
          provider,
          hasLoggedInBefore: false,
          background: `${provider} login account.`
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
  payload.expectedStay = String(payload.expectedStay || "").replace(/\D/g, "") || "N/A";

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
  showSavedPopup();

  if (currentPage === "wards") setActivePage("wards");
});

modalDelete.addEventListener("click", () => {
  if (patientIndex.value === "") {
    closePatientModal();
    return;
  }

  const patient = patients[Number(patientIndex.value)];

  showCenterConfirm("Delete Patient", `Delete ${patientName(patient)} from patient records?`, () => {
    patients.splice(Number(patientIndex.value), 1);

    patientQuery = "";
    patientSearch.value = "";
    statusFilter.value = "All Status";

    renderPatients();
    closePatientModal();
    showSavedPopup("Patient record deleted.");
  });
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

modalWard.addEventListener("change", () => refreshBedOptions());

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
  const deleteMedication = event.target.closest("[data-delete-medication]");
  if (deleteMedication) {
    const index = Number(deleteMedication.dataset.deleteMedication);

    showCenterConfirm("Delete Medication", "Delete this medication record?", () => {
      medications.splice(index, 1);
      closeRecordModal();
      setActivePage("medications");
      showSavedPopup("Medication record deleted.");
    });

    return;
  }

  const medButton = event.target.closest("[data-medication-action]");
  if (medButton) {
    const index = Number(medButton.dataset.index);

    if (medButton.dataset.medicationAction === "delete") {
      showCenterConfirm("Delete Medication", "Delete this medication record?", () => {
        medications.splice(index, 1);
        setActivePage("medications");
        showSavedPopup("Medication record deleted.");
      });
      return;
    }

    openRecordForm("medication", index, "edit");
    return;
  }

  const appointmentButton = event.target.closest("[data-appointment-action]");
  if (appointmentButton) {
    openRecordForm("appointment", Number(appointmentButton.dataset.index), appointmentButton.dataset.appointmentAction);
    return;
  }

  const wardCard = event.target.closest("[data-ward-number]");
  if (wardCard) {
    openWardDetails(wardCard.dataset.wardNumber);
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

  if (editTarget?.type === "profile") {
    closeRecordModal();
    return;
  }

  const values = Object.fromEntries(new FormData(recordForm).entries());
  addOrUpdateRecord(recordForm.dataset.type, values);
  closeRecordModal();
});

recordClose.addEventListener("click", closeRecordModal);
recordCancel.addEventListener("click", closeRecordModal);

recordModal.addEventListener("click", event => {
  if (event.target === recordModal) closeRecordModal();
});

sidebarUser.addEventListener("click", () => {
  if (!currentAccount) return;

  editTarget = { type: "profile" };
  recordTitle.textContent = "Profile Details";
  recordSubtitle.textContent = "Personal details and background";
  recordFields.innerHTML = `
    <label>
      <span>Name</span>
      <input value="${currentAccount.firstName || ""} ${currentAccount.lastName || ""}" readonly>
    </label>
    <label>
      <span>Role</span>
      <input value="${currentAccount.role || "N/A"}" readonly>
    </label>
    <label>
      <span>Staff ID</span>
      <input value="${currentAccount.staffId || defaultStaffIdForRole(currentAccount.role)}" readonly>
    </label>
    <label>
      <span>Email</span>
      <input value="${currentAccount.email || "N/A"}" readonly>
    </label>
    <label>
      <span>Phone</span>
      <input value="${currentAccount.phone || "N/A"}" readonly>
    </label>
    <label class="wide">
      <span>Background</span>
      <textarea readonly>${currentAccount.background || "Wellmeadows Hospital staff account."}</textarea>
    </label>
  `;
  recordForm.querySelector("button[type='submit']").classList.add("hidden");
  recordModal.classList.remove("hidden");
});

localStorage.removeItem("wellmeadowsRememberEmail");
authEmail.value = "";
authPassword.value = "";

modalStay.type = "number";
modalStay.min = "0";
modalStay.placeholder = "Days only";
refreshWardOptions();

hydrateIcons();
setAuthMode("login");
renderPatients();
setActivePage("dashboard");
appView.classList.add("hidden");
loginView.classList.remove("hidden");
