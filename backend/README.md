# Backend - Student Management API

This is the Flask backend API for the Student Management System. It provides RESTful endpoints for managing student data.

## Features

- ✅ RESTful API with CRUD operations
- ✅ In-memory data storage (no persistence required)
- ✅ CORS enabled for frontend communication
- ✅ JSON request/response format

## Prerequisites

- Python 3.7+
- pip or pipenv

## Installation

### Using Pipenv (Recommended)

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
pipenv install
```

3. Activate the virtual environment:

```bash
pipenv shell
```

### Using pip

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install flask flask-cors
```

## Running the Backend

```bash
python app.py
```

The backend will start on `http://localhost:5000`

## API Endpoints

### Get All Students

```
GET /students
```

Returns a list of all students.

**Response Example:**

```json
[
  {
    "id": 1,
    "name": "Akida Mwaura",
    "course": "Software Development"
  },
  {
    "id": 2,
    "name": "Mike John",
    "course": "Cyber Security"
  }
]
```

### Get Single Student

```
GET /students/<id>
```

Returns a specific student by ID.

**Response Example:**

```json
{
  "id": 1,
  "name": "Akida Mwaura",
  "course": "Software Development"
}
```

### Create Student

```
POST /students
```

Creates a new student. ID is auto-generated if not provided.

**Request Body:**

```json
{
  "name": "John Doe",
  "course": "Data Science"
}
```

**Response (201 Created):**

```json
{
  "id": 3,
  "name": "John Doe",
  "course": "Data Science"
}
```

### Update Student

```
PUT /students/<id>
```

Updates an existing student.

**Request Body:**

```json
{
  "name": "Jane Doe",
  "course": "Web Development"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Jane Doe",
  "course": "Web Development"
}
```

### Delete Student

```
DELETE /students/<id>
```

Deletes a student by ID.

**Response (200 OK):**

```json
{
  "message": "Student deleted"
}
```

## Project Structure

```
backend/
├── app.py          # Main Flask application with all CRUD endpoints
├── Pipfile         # Pipenv dependencies file
├── Pipfile.lock    # Locked dependencies
└── README.md       # This file
```

## Data Model

```python
class Student:
    def __init__(self, id, name, course=None):
        self.id = id
        self.name = name
        self.course = course
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - OK (successful GET, PUT, DELETE)
- `201` - Created (successful POST)
- `400` - Bad Request (invalid input)
- `404` - Not Found (student doesn't exist)
- `500` - Internal Server Error

## Sample Usage with curl

```bash
# Get all students
curl http://localhost:5000/students

# Get a specific student
curl http://localhost:5000/students/1

# Add a new student
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Smith", "course": "AI/ML"}'

# Update a student
curl -X PUT http://localhost:5000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Smith", "course": "Machine Learning"}'

# Delete a student
curl -X DELETE http://localhost:5000/students/1
```

## CORS Configuration

CORS is enabled to allow requests from the React frontend running on different ports/domains.
