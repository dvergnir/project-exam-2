import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Venue from "./pages/Venues";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useAdobeFonts } from "react-adobe-fonts";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/api/auth/AuthProvider";
import RouteToTop from "./components/utils/RouteToTop";
import VenueManagement from "./pages/VenueManagement";
import CreateVenue from "./pages/CreateVenue";
import EditVenue from "./pages/EditVenue";
import BookingHistory from "./components/profile/bookings/BookingHistory";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./components/api/auth/AuthProvider";

function ProtectedRoute({ children }) {
  const { accessToken } = useContext(AuthContext);

  return accessToken ? children : <Navigate to="/login" />;
}

function App() {
  const projectId = "txs7jyy";
  const fontsLoaded = useAdobeFonts(projectId);

  return (
    <AuthProvider>
      <RouteToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venues/:id" element={<Venue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/booking-history"
            element={
              <ProtectedRoute>
                <BookingHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue-management"
            element={
              <ProtectedRoute>
                <VenueManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-venue"
            element={
              <ProtectedRoute>
                <CreateVenue />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-venue/:id"
            element={
              <ProtectedRoute>
                <EditVenue />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
