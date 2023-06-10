import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import MaintenancePage from "./pages/MaintenancePage";
import ArticlesPage from "./pages/ArticlesPage";
import ContactsPage from "./pages/ContactsPage";
import AppNavbar from './components/AppNavbar';
import RepairPage from './pages/RepairPage';
import LoginPage from './pages/LoginPage';

function App() {

return (

        <div>
      <AppNavbar/>
  <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="HomePage" element={<HomePage />} />
      <Route path="MaintenancePage" element={<MaintenancePage />} />
      <Route path="RepairPage" element={<RepairPage />} />
      <Route path="ArticlesPage" element={<ArticlesPage />} />
      <Route path="ContactsPage" element={<ContactsPage />} />
  </Routes>

</div>
  );
}


export default App;
