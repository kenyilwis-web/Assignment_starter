Quick Start Guide - Student Management System

The Easiest Way To Start

If you are on Linux or Mac, you can use a setup script. Open your terminal in the project folder and run: chmod +x setup.sh && ./setup.sh

If you are on Windows, just double-click the file setup.bat

The script will install everything you need and tell you what to do next.

Manual Setup

If you prefer to set things up yourself, here is how to do it.

First, Install The Backend

Open a terminal. Go into the backend folder. Install the Python packages using pipenv or pip. Then run the app with python app.py. The backend will start on http://localhost:5000

Second, Install The Frontend

Open another terminal. Go into the frontend folder. Install the packages using npm install. Then run npm start. The app will open in your browser on http://localhost:3000

Now You Have Both Running

The frontend on your screen talks to the backend running in the terminal. When you add, edit, or delete a student in the browser, it sends the information to the backend. The backend stores it and the frontend shows the updated list.

What The Backend Can Do

GET all students - Returns a list of every student.

GET one student - Returns info about one student by ID.

POST a student - Creates a new student with a new ID.

PUT a student - Updates a student's information.

DELETE a student - Removes a student.

How To Tell If It Is Working

When you open http://localhost:3000 in your browser, you see the student management form and the list of students. You can add a new student and see it appear in the list. You can click Edit to change a student. You can click Delete to remove a student.

If you see an error that says it cannot connect to the backend, make sure the backend is running on http://localhost:5000

If you see an error about ports in use, another program might be using that port. You may need to close that program or restart your computer.

If you see an error about missing packages, go back and make sure you ran the install commands.

Where To Find Things

The backend code is in the backend folder. The file app.py has all the logic.

The frontend code is in the frontend folder. The folder src has all the React code.

There are README files in both folders with more details.

What Happens To My Data

All data is stored in memory. When you close the backend, the data is gone. There is no database. This is intentional for this project.

When you first start the backend, there are two students already: Akida Mwaura and Mike John. You can add more, edit them, or delete them.
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
