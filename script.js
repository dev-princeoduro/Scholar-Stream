// Mock Data
const MOCK_STUDENT = {
    id: "12345",
    name: "Jane Smith",
    gpa: 3.8,
    classes: [
        { id: 101, name: "Intro to Computer Science", teacher: "Dr. Alan Turing", room: "CS-101" },
        { id: 102, name: "Calculus II", teacher: "Prof. Ada Lovelace", room: "Math-202" },
        { id: 103, name: "World History", teacher: "Dr. Howard Zinn", room: "Hist-305" }
    ],
    assignments: [
        { id: 501, class: "World History", title: "WWII Essay", due: "2023-11-30", status: "pending" },
        { id: 502, class: "Calculus II", title: "Problem Set 4", due: "2023-12-02", status: "pending" },
        { id: 503, class: "Intro to CS", title: "Final Project Proposal", due: "2023-12-05", status: "pending" }
    ]
};

// Login Handler
function handleLogin(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    if (studentId && password) {
        // Simulate API call
        console.log(`Logging in with ID: ${studentId}`);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both Student ID and Password');
    }
}

// Logout Handler
function handleLogout(event) {
    event.preventDefault();
    // In a real app, clear tokens/session here
    console.log("Logging out...");
    window.location.href = 'index.html';
}

// Dashboard Data Loader
function loadDashboardData() {
    // Set Student Name
    const nameElement = document.getElementById('studentName');
    if (nameElement) nameElement.textContent = MOCK_STUDENT.name;

    // Set Date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Set Pending Count
    const countElement = document.getElementById('pendingCount');
    if (countElement) countElement.textContent = MOCK_STUDENT.assignments.length;

    // Populate Classes
    const classList = document.getElementById('classList');
    if (classList) {
        classList.innerHTML = MOCK_STUDENT.classes.map(cls => `
            <a href="class.html" class="card class-card" style="text-decoration: none; color: inherit; display: block;">
                <div class="class-name">${cls.name}</div>
                <div class="teacher-name">${cls.teacher}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Room: ${cls.room}</div>
            </a>
        `).join('');
    }

    // Populate Assignments
    const assignmentsList = document.getElementById('assignmentsList');
    if (assignmentsList) {
        assignmentsList.innerHTML = MOCK_STUDENT.assignments.map(assign => `
            <div class="assignment-item">
                <div>
                    <div style="font-weight: 500;">${assign.title}</div>
                    <div style="font-size: 0.75rem; color: var(--primary-color);">${assign.class}</div>
                </div>
                <div class="assignment-date">
                    Due: ${new Date(assign.due).toLocaleDateString()}
                </div>
            </div>
        `).join('');
    }

    // Set GPA
    const gpaElement = document.getElementById('gpaDisplay');
    if (gpaElement) gpaElement.textContent = MOCK_STUDENT.gpa;
}

// Tab Switching
function switchTab(event, tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabId).classList.add('active');

    // Activate clicked button
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
