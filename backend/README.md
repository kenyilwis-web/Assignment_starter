Backend - Student Management API

This is the Python Flask backend for the student management system.

What You Need

You must have Python 3.7 or higher installed. You can install packages using pipenv or pip.

How To Install

Go into the backend folder. Then install the dependencies using either pipenv or pip. After that, type python app.py to start the server.

The server will start on http://localhost:5000

What It Does

The backend is an API that handles all the student information. When the frontend needs to get, add, update, or delete a student, it talks to the backend. The backend gives back the information as JSON data.

How It Works

The backend has a Student class that represents a single student. Each student has an ID number, a name, and a course.

Students are stored in a list in memory. When you restart the backend, the list is reset to the original two students.

There are 5 main operations the backend can do.

GET students - This returns a list of all students.

GET students with ID - This returns one specific student by their ID number.

POST students - This creates a new student. You send the name and course, and the backend creates a new ID automatically and saves it.

PUT students with ID - This updates an existing student. You send the new information, and it replaces the old information.

DELETE students with ID - This removes a student from the list.

When Something Goes Wrong

The API responds with different codes. If everything is okay, you get code 200. If you create something new, you get code 201. If something is not found, you get code 404. If there is an error on the server, you get code 500.

CORS Support

CORS is enabled. This means the frontend can talk to the backend even though they are on different ports on the same computer.

The Two Starting Students

When you first start the backend, there are two students already saved. Akida Mwaura is taking Software Development. Mike John is taking Cyber Security.

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
