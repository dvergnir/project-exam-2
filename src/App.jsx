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
import Bookings from "./pages/Bookings";
import VenueManagement from "./pages/VenueManagement";
import CreateVenue from "./pages/CreateVenue";
import EditVenue from "./pages/EditVenue";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/booking-history" element={<Bookings />} />
          <Route path="/venue-management" element={<VenueManagement />} />
          <Route path="/create-venue" element={<CreateVenue />} />
          <Route path="/edit-venue/:id" element={<EditVenue />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
