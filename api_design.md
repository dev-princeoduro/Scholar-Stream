
# ScholarStream API Design

## Base URL
`https://api.scholarstream.edu/v1`

## Authentication

### Login
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a student using Student ID and Password.
- **Request Body:**
  ```json
  {
    "student_id": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_string",
    "student": {
      "id": "string",
      "name": "string",
      "avatar_url": "string"
    }
  }
  ```

## Student Resources

### Get Student Dashboard Data (Aggregate)
- **Endpoint:** `GET /student/{id}/dashboard`
- **Description:** Retrieves aggregated data for the dashboard (classes, assignments, grades).
- **Response:**
  ```json
  {
    "student_id": "string",
    "classes": [...],
    "upcoming_assignments": [...],
    "gpa": 3.8
  }
  ```

### Get Enrolled Classes
- **Endpoint:** `GET /student/{id}/classes`
- **Description:** Returns a list of classes the student is enrolled in.
- **Response:**
  ```json
  [
    {
      "class_id": "101",
      "name": "Introduction to Computer Science",
      "teacher": "Dr. Alan Turing",
      "schedule": "Mon/Wed 10:00 AM",
      "room": "CS-101"
    },
    ...
  ]
  ```

### Get Upcoming Assignments
- **Endpoint:** `GET /student/{id}/upcoming-assignments`
- **Description:** Returns the next 3 upcoming assignments.
- **Response:**
  ```json
  [
    {
      "assignment_id": "501",
      "class_name": "History 101",
      "title": "World War II Essay",
      "due_date": "2023-10-25T23:59:00Z",
      "status": "pending"
    },
    ...
  ]
  ```

### Get Grades
- **Endpoint:** `GET /student/{id}/grades`
- **Description:** Returns a summary of grades for all classes.
- **Response:**
  ```json
  {
    "gpa": 3.8,
    "breakdown": [
      {
        "class_name": "Math 202",
        "grade": "A-",
        "percentage": 92.5
      },
      ...
    ]
  }
  ```
