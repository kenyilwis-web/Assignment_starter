#!/bin/bash

# Setup script for Student Management System
# This script sets up both backend and frontend

echo "========================================="
echo "Student Management System - Setup Script"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python from https://www.python.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ Python version: $(python3 --version)"
echo ""

# Setup Backend
echo "========================================="
echo "Setting up Backend (Flask)"
echo "========================================="
cd backend

# Check if pipenv is installed, if not use pip
if command -v pipenv &> /dev/null; then
    echo "Installing backend dependencies with pipenv..."
    pipenv install
    echo "✅ Backend dependencies installed"
else
    echo "Installing backend dependencies with pip..."
    python3 -m venv venv
    source venv/bin/activate
    pip install flask flask-cors
    echo "✅ Backend dependencies installed"
fi

cd ..
echo ""

# Setup Frontend
echo "========================================="
echo "Setting up Frontend (React)"
echo "========================================="
cd frontend

echo "Installing frontend dependencies..."
npm install

echo "✅ Frontend dependencies installed"
cd ..
echo ""

echo "========================================="
echo "✅ Setup Complete!"
echo "========================================="
echo ""
echo "To run the application:"
echo ""
echo "Terminal 1 - Start Backend:"
echo "  cd backend"
echo "  pipenv shell  # or source venv/bin/activate if using pip"
echo "  python app.py"
echo ""
echo "Terminal 2 - Start Frontend:"
echo "  cd frontend"
echo "  npm start"
echo ""
echo "Backend will run on: http://localhost:5000"
echo "Frontend will run on: http://localhost:3000"
echo ""
