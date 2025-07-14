import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  UserCheck,
  Briefcase,
  BarChart3,
  Bell,
  User,
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: Home,
      exact: true,
    },
    {
      path: "/admin/students",
      name: "Étudiants",
      icon: Users,
      badge: 12,
    },
    {
      path: "/admin/jobs",
      name: "Candidatures RH",
      icon: Briefcase,
      badge: 5,
    },
    {
      path: "/admin/stats",
      name: "Statistiques",
      icon: BarChart3,
    },
    {
      path: "/admin/settings",
      name: "Paramètres",
      icon: Settings,
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <UserCheck className="logo-icon-svg" />
            </div>
            <h2 className="logo-text">École Admin</h2>
          </div>
          <button
            className="sidebar-toggle mobile-only"
            onClick={toggleSidebar}
          >
            <X className="toggle-icon" />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    isActive(item.path, item.exact) ? "nav-link-active" : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.name}</span>
                  {item.badge && (
                    <span className="nav-badge">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <LogOut className="logout-icon" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Top Bar */}
        <header className="admin-header">
          <div className="header-left">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              <Menu className="toggle-icon" />
            </button>
            <h1 className="page-title">
              {menuItems.find((item) => isActive(item.path, item.exact))
                ?.name || "Dashboard"}
            </h1>
          </div>

          <div className="header-right">
            <button className="notification-btn">
              <Bell className="notification-icon" />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-profile">
              <div className="profile-avatar">
                <User className="profile-icon" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>

      {/* Sidebar Overlay pour mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
