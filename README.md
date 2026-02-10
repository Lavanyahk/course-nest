# Course Nest

Course Nest is a React-based course management application built using Vite.  
The project is designed to demonstrate component-based architecture, routing, and state management using React Context API.

## About
The application allows users to browse courses, manage selected courses in a cart, and perform authentication actions such as login and signup.  
It follows a clean and organized folder structure for better scalability and maintainability.

## Project Structure
course-nest/ │ ├── public/ │   └── index.html │ ├── src/ │   ├── components/ │   │   ├── Navbar.jsx │   │   ├── Footer.jsx │   │   ├── Layout.jsx │   │   └── ProtectedRoutes.jsx │   │ │   ├── pages/ │   │   ├── Main.jsx │   │   ├── Login.jsx │   │   ├── SignUp.jsx │   │   ├── CourseList.jsx │   │   ├── Course.jsx │   │   ├── Cart.jsx │   │   ├── AddCourse.jsx │   │   └── UpdateCourse.jsx │   │ │   ├── context/ │   │   ├── AuthContext.jsx │   │   └── CartContext.jsx │   │ │   ├── styles/ │   │   └── App.css │   │ │   ├── App.jsx │   └── main.jsx │ ├── .gitignore ├── eslint.config.js ├── package.json ├── package-lock.json ├── vite.config.js └── README.md

## Features
- Course listing and course details  
- Add and update course functionality  
- Cart management using React Context API  
- User authentication (login and signup)  
- Protected routes for secured pages  
- Reusable components and clean UI  

## Technologies Used
- React (Vite)  
- JavaScript  
- HTML  
- CSS

## How to Run the Project

This project is implemented using React Context API for state management, Axios for API communication, and JSON Server for data persistence.  
Follow the steps below to run the application locally.

1. Clone or download the repository  
   git clone https://github.com/your-username/course-nest.git
   cd course-nest
2. Install dependencies
   npm install
3. Create a db.json file in the project root and add sample data
   {
     "courses": [],
     "users": [],
     "cart": []
   }
4. Start JSON Server
   json-server --watch db.json --port 3001
5. Start the React application
   npm run dev
6. Open the application in your browser
   http://localhost:5173

Note: Make sure JSON Server is running before starting the React application to ensure proper data fetching and persistence.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
