# Student Management Frontend

This is a React frontend for the Student Management System. It communicates with the Flask backend API to manage student data.

## Features

- ✅ View all students
- ✅ Add new students
- ✅ Update existing students
- ✅ Delete students
- ✅ Responsive design

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Make sure the Flask backend is running on `http://localhost:5000`

## Running the Application

Start the development server:

```bash
npm start
```

The React app will open in your browser at `http://localhost:3000`.

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentForm.js      # Form for adding/editing students
│   │   ├── StudentList.js      # List display of all students
│   │   └── StudentCard.js      # Individual student card
│   ├── styles/
│   │   ├── StudentForm.css
│   │   ├── StudentList.css
│   │   └── StudentCard.css
│   ├── App.js                  # Main App component with CRUD logic
│   ├── App.css                 # App styling
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── .gitignore
```

## API Endpoints Used

The app communicates with the following Flask endpoints:

- `GET /students` - Retrieve all students
- `GET /students/<id>` - Retrieve a single student
- `POST /students` - Add a new student
- `PUT /students/<id>` - Update a student
- `DELETE /students/<id>` - Delete a student

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` directory with optimized files ready for deployment.
