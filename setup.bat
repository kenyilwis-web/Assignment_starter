@echo off
REM Setup script for Student Management System (Windows)

echo =========================================
echo Student Management System - Setup Script
echo =========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js is not installed. Please install from https://nodejs.org/
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo X Python is not installed. Please install from https://www.python.org/
    exit /b 1
)

echo OK Node.js installed
for /f "tokens=*" %%i in ('node --version') do echo   Version: %%i

echo OK Python installed
for /f "tokens=*" %%i in ('python --version') do echo   Version: %%i
echo.

REM Setup Backend
echo =========================================
echo Setting up Backend (Flask)
echo =========================================
cd backend

echo Installing backend dependencies with pip...
python -m venv venv
call venv\Scripts\activate.bat
pip install flask flask-cors
echo OK Backend dependencies installed

cd ..
echo.

REM Setup Frontend
echo =========================================
echo Setting up Frontend (React)
echo =========================================
cd frontend

echo Installing frontend dependencies...
call npm install

echo OK Frontend dependencies installed
cd ..
echo.

echo =========================================
echo OK Setup Complete!
echo =========================================
echo.
echo To run the application:
echo.
echo Terminal 1 - Start Backend:
echo   cd backend
echo   venv\Scripts\activate.bat
echo   python app.py
echo.
echo Terminal 2 - Start Frontend:
echo   cd frontend
echo   npm start
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
