# Quick Start Guide - Student Management System

## One-Line Setup

### Linux/Mac
```bash
chmod +x setup.sh && ./setup.sh
```

### Windows
```bash
setup.bat
```

## Manual Setup

### Backend Setup

1. **Navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   # Using pipenv (recommended)
   pipenv install
   
   # Or using pip
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install flask flask-cors
   ```

3. **Run the server:**
   ```bash
   # If using pipenv
   pipenv shell
   python app.py
   
   # If using pip
   source venv/bin/activate  # Windows: venv\Scripts\activate
   python app.py
   ```

   Backend runs on: `http://localhost:5000`

### Frontend Setup

1. **In a new terminal, navigate to frontend:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

   Frontend runs on: `http://localhost:3000`

## API Endpoints

Once both servers are running, the frontend will communicate with:

- `GET /students` - Get all students
- `GET /students/:id` - Get a specific student
- `POST /students` - Add a new student
- `PUT /students/:id` - Update a student
- `DELETE /students/:id` - Delete a student

## Testing the API with cURL

```bash
# Get all students
curl http://localhost:5000/students

# Add a new student
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","course":"Web Development"}'

# Update a student
curl -X PUT http://localhost:5000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","course":"Full Stack"}'

# Delete a student
curl -X DELETE http://localhost:5000/students/1
```

## Troubleshooting

### "Port 5000 is already in use"
```bash
# Find the process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### "npm: command not found"
Install Node.js from https://nodejs.org/

### "python: command not found"
Use `python3` instead or install Python from https://www.python.org/

### Frontend can't connect to backend
1. Make sure backend is running on `http://localhost:5000`
2. Check browser console for CORS errors
3. Verify both apps are running on the specified ports

## Production Build

To build for production:

```bash
cd frontend
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.
