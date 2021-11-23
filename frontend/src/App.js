import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// * Pages
import Login from "./pages/Login";
import Layout from "./pages/Layout";
// * Admin pages
import AdminDashboard from "./pages/Admin/Dashboard";
import AllStudents from "./pages/Admin/AllStudents";
import AllTeachers from "./pages/Admin/AllTeachers";
import CreateStudent from "./pages/Admin/CreateStudent";
import CreateTeacher from "./pages/Admin/CreateTeacher";
import AdminProfile from "./pages/Admin/Profile";
import AdminCourses from "./pages/Admin/Courses";
import AdminAssignTeacher from "./pages/Admin/AssignTeacher";

// * Teacher pages 
import TeacherDashboard from "./pages/Teacher/Dashboard";
import TeacherProfile from "./pages/Teacher/Profile";

// * Student Pages
import StudentDashboard from "./pages/Student/Dashboard";
import StudentProfile from "./pages/Student/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />

          {/* //* Admin  */}
          <Route path="/admin/courses/assign-teacher/:id" element={<AdminAssignTeacher />} />
          <Route path="/admin/all-students" exact element={<AllStudents />} />
          <Route path="/admin/all-teachers" exact element={<AllTeachers />} />
          <Route path="/admin/add-student" element={<CreateStudent />} />
          <Route path="/admin/add-teacher" element={<CreateTeacher />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/courses" element={<AdminCourses />} />

          {/* //* Teacher  */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />

          {/* //* Student  */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;