// app.js

// Function to load admin data from localStorage
function loadAdminData() {
    const data = localStorage.getItem('adminData');
    return data ? JSON.parse(data) : [];
}

// Function to render admin data in a table
function renderAdminTable(data) {
    const table = document.getElementById('admin-table');
    table.innerHTML = '';
    data.forEach((item) => {
        const row = table.insertRow();
        Object.values(item).forEach((value) => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

// Function to export data to CSV format
function exportToCSV(data, filename) {
    const csvContent = "data:text/csv;charset=utf-8," +
        data.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}

// Function to save angket data
function saveAngketData(angket) {
    const data = loadAdminData();
    data.push(angket);
    localStorage.setItem('adminData', JSON.stringify(data));
}

// Function to manage user activities
function manageUserActivity(userId, action) {
    const log = { userId, action, timestamp: new Date() };
    const activities = JSON.parse(localStorage.getItem('userActivities')) || [];
    activities.push(log);
    localStorage.setItem('userActivities', JSON.stringify(activities));
}

// Example Usage
// const adminData = loadAdminData();
// renderAdminTable(adminData);
// exportToCSV(adminData, 'admin_data.csv');
// saveAngketData({ question: 'Your question?', answer: 'Your answer' });
// manageUserActivity('user123', 'login');