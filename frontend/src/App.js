import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Calendar from './components/Calendar';
import Error from './components/Error';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;