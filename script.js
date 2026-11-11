
const ATTENDANCE_PASSWORD = "Password123";

const params = new URLSearchParams(window.location.search);

const studentId = params.get("id");

document.getElementById("studentName").textContent =
    studentId ? "Student ID: " + studentId : "No student QR detected";

function submitAttendance() {

    const password = document.getElementById("password").value;
    const status = document.getElementById("status");

    if (!studentId) {
        status.textContent = "Invalid student QR code.";
        return;
    }

    if (password !== ATTENDANCE_PASSWORD) {
        status.textContent = "Incorrect password!";
        return;
    }

    status.textContent = "Password accepted! Ready to connect to Google Sheets.";
}
