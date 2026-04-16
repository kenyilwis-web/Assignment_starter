# Student Management System

A full-stack application for managing student records with a Flask backend API and React frontend UI.

## Project Structure

```
Assignment_starter/
├── backend/                 # Flask REST API
│   ├── app.py              # Main application file with CRUD endpoints
│   ├── Pipfile             # Python dependencies
│   ├── Pipfile.lock        # Locked dependencies
│   └── README.md           # Backend documentation
├── frontend/               # React web application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/         # Component styles
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   ├── package.json        # Node dependencies
│   └── README.md           # Frontend documentation
└── readme.md               # This file
```

## Features

✅ **Retrieve all students** - View the complete list of students  
✅ **Retrieve a single student** - Access specific student details by ID  
✅ **Add new student** - Create new student records  
✅ **Update student** - Modify existing student information  
✅ **Delete student** - Remove student records  
✅ **Responsive UI** - Works on desktop and mobile devices  
✅ **In-memory storage** - No database persistence required  

## Tech Stack

### Backend
- **Framework:** Flask (Python web framework)
- **CORS:** Flask-CORS (for cross-origin requests)
- **Port:** 5000

### Frontend
- **Framework:** React 18
- **Styling:** CSS3 with Flexbox/Grid
- **HTTP Client:** Fetch API
- **Port:** 3000

## Quick Start

### Prerequisites

- **Node.js** (v14+) and **npm** for the frontend
- **Python** (3.7+) for the backend
- **pipenv** or **pip** for Python dependencies

### Running the Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies using Pipenv:

```bash
pipenv install
```

3. Activate the environment:

```bash
pipenv shell
```

4. Run the Flask application:

```bash
python app.py
```

The backend will be available at `http://localhost:5000`

### Running the Frontend

Open a new terminal and:

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Using the Application

1. **View Students** - The main page displays all students in a card layout
2. **Add Student** - Fill out the form on the left with a student name and course, then click "Add Student"
3. **Edit Student** - Click the "Edit" button on any student card to modify their information
4. **Delete Student** - Click the "Delete" button to remove a student (with confirmation)

## API Endpoints

All endpoints are prefixed with `http://localhost:5000` and return JSON data.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/<id>` | Get a specific student |
| POST | `/students` | Create a new student |
| PUT | `/students/<id>` | Update a student |
| DELETE | `/students/<id>` | Delete a student |

## Sample Data

The application comes with two pre-loaded students:

| ID | Name | Course |
|----|------|--------|
| 1 | Akida Mwaura | Software Development |
| 2 | Mike John | Cyber Security |

## Troubleshooting

### Backend issues

**Port 5000 already in use:**
```bash
# On Linux/Mac
lsof -i :5000
kill -9 <PID>

# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Module not found errors:**
Make sure you've installed dependencies with `pipenv install`

### Frontend issues

**Port 3000 already in use:**
The React app will ask to run on a different port. Accept the prompt.

**Backend connection errors:**
Ensure the Flask backend is running on `http://localhost:5000` before starting the frontend.

**CORS errors:**
The backend has CORS enabled. If issues persist, check that both apps can communicate on localhost.

## Development Notes

- **Data Persistence:** Data is stored in memory and will be reset when the backend restarts
- **Authentication:** No authentication is implemented
- **Rate Limiting:** No rate limiting is implemented
- **Validation:** Basic client-side validation is implemented

## Building for Production

### Frontend Production Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build/` directory.

### Backend Deployment

The Flask app can be deployed using services like:
- Heroku
- AWS EC2
- Google Cloud Run
- DigitalOcean

Remember to set `debug=False` for production.

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication and authorization
- [ ] Student grades and performance tracking
- [ ] File uploads for student documents
- [ ] Email notifications
- [ ] Search and filter functionality
- [ ] Pagination for large student lists
- [ ] Admin dashboard

## License

This project is provided as-is for educational purposes.

## Support

For issues or questions, please check the individual README files in the `backend/` and `frontend/` directories.
