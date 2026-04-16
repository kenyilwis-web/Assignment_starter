Student Management System

This is a simple application for managing students. It has two main parts: a backend that runs on your server using Python, and a frontend that runs in your browser using React.

What Can You Do

You can view all students. You can add a new student by entering their name and course. You can edit a student's information. You can delete a student from the list.

What You Need

For the frontend, you need Node.js and npm installed on your computer.

For the backend, you need Python version 3.7 or higher. You also need pipenv or pip to manage Python packages.

How The Project Is Organized

There is a backend folder that contains the Python Flask application. There is a frontend folder that contains the React application. The backend runs on port 5000, and the frontend runs on port 3000.

How To Get Started

Read the QUICKSTART.md file for step by step instructions. There is also a setup script you can run that will set everything up for you.

For more technical details about the backend, read the README.md file in the backend folder.

For more information about the frontend, read the README.md file in the frontend folder.

How The Application Works

When you start the application, you see a form on the left side where you can add a new student. On the right side, you see a list of all the students.

To add a student, type their name and course in the form and click the Add Student button.

To change a student's information, click the Edit button on their card.

To remove a student, click the Delete button on their card.

Data Storage

This application stores data in memory. This means that when you restart the backend, all the student information is reset. There is no database.

Two students are already added when you start the application: Akida Mwaura who is studying Software Development, and Mike John who is studying Cyber Security.

Front End Design

The application looks good on both desktop and mobile devices. There are cards that show each student's information. The form lets you easily add or edit students.

Back End Design

The backend is a simple API that handles the storage and retrieval of student data. It uses the Flask framework which is easy to understand. It has CORS enabled so the frontend can communicate with it.

How To Use The Application

Start the backend first. Then start the frontend. Open your browser to http://localhost:3000. You will see the student management application.

Trouble Shooting

If you get an error that a port is already in use, check if another program is using that port. You may need to close that program or find out what process PID is using it.

If the frontend cannot connect to the backend, make sure the backend is running on http://localhost:5000. Make sure both are running on localhost.

If you see errors about missing modules, make sure you ran the install command for dependencies.

What Next

You can improve this application by adding a database so data persists. You can add login functionality. You can add more information about each student like grades or attendance. You can add the ability to upload files for students.
