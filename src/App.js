import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { FeedProvider } from "./context/FeedContext";
import { NotificationProvider } from "./context/NotificationContext";
import { InteractionProvider } from "./context/InteractionContext";
import { FollowingProvider } from "./context/FollowingContext";

// Import components
import PostCreator from "./components/PostCreator";
import PersonalizedFeed from "./components/PersonalizedFeed";
import Notifications from "./components/Notifications";
import LoginForm from "./Login/LoginForm";
import SignUpForm from "./Login/SignUpForm";

// Import navigation components
import Home from "./Navigation/components/Home";
import Search from "./Navigation/components/SearchAndFollow";
import Explore from "./Navigation/components/Explore";
import Messages from "./Navigation/components/Messages";
import Profile from "./Navigation/components/Profile";

// Import styles
import "./styles.css";

const Navbar = ({ logout }) => {
  return (
    <div className="navbar">
      <h2 className="navbar-title">SocialHub</h2>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Search</NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Notifications</NavLink>
        <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore</NavLink>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Messages</NavLink>
        <NavLink to="/postcreator" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Create Post</NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Profile</NavLink>
        <NavLink to="/logout" className="nav-link" onClick={logout}>Logout</NavLink>
      </nav>
    </div>
  );
};

const MainContent = () => {
  const { user, logout } = useAuth();
  const [showSignup, setShowSignup] = React.useState(false);

  return (
    <div className="main-container">
      {user && <Navbar logout={logout} />}

      {/* Main Content */}
      <div className={`content ${user ? "content-authenticated" : ""}`}>
        {!user ? (
          <div className="welcome-container">
            <h2 className="welcome-title">Welcome to SocialHub</h2>
            {showSignup ? <SignUpForm /> : <LoginForm />}
            <button 
              className="toggle-auth-button" 
              onClick={() => setShowSignup(!showSignup)}
            >
              {showSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
            </button>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<><Home /><div className="card"><PersonalizedFeed /></div></>} />
            <Route path="/search" element={<Search />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/postcreator" element={<PostCreator />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <FeedProvider>
        <NotificationProvider>
          <InteractionProvider>
            <FollowingProvider>
              <Router>
                <MainContent />
              </Router>
            </FollowingProvider>
          </InteractionProvider>
        </NotificationProvider>
      </FeedProvider>
    </AuthProvider>
  );
};

export default App;