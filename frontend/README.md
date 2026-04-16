Student Management Frontend

This is a web application built with React. It shows you all the students and lets you add, edit, or delete them.

What You Need

You need to install Node.js. This gives you npm which you use to install JavaScript packages.

How To Get It Running

Go into the frontend folder. Type npm install to download all the packages the app needs. Then type npm start.

The app will open in your web browser at http://localhost:3000

What You See

When you open the app, you see the student management system. On the left side is a form. On the right side is a list of students.

How To Add A Student

Typ the student's name in the first box. Type the course name in the second box. Click the Add Student button. The student appears in the list.

How To Edit A Student

Click the Edit button on any student card. The form on the left now shows that student's information. Change whatever you want. Click Update Student.

How To Delete A Student

Click the Delete button on any student card. Confirm that you want to delete it. The student is removed from the list.

How It Looks

The app looks good on computer screens and phone screens. Students are shown in cards that display their ID, name, and course. Each card has Edit and Delete buttons.

How It Talks To The Backend

When you add, edit, or delete a student, the app sends a message to the backend API. The backend saves the changes. The app gets the updated list from the backend and shows it to you.

What Happens If Something Goes Wrong

If the backend is not running, you will see an error message. If the server has a problem, you will see an error. Read the message to understand what went wrong.

The Form Validation

Before you add or edit a student, the form checks that you filled in both the name and course. If either one is empty, it will not let you save.
