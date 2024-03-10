import "./App.css";
// import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import AddPerson from "./pages/AddPerson";
import Find from "./pages/Find";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Single from "./pages/Single";
import Missing from "./pages/Missing";
import Seen from "./pages/Seen";
import PrivateRoutes from "./utils/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import FoundDetails from "./pages/FoundDetails";
import Stats from "./pages/Stats";
import Header from "./components/Header";
function App() {
  return (
    <div className="App);">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Header/>} />

            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<Profile />} />
              <Route path="/single" element={<Single />} />
              <Route path="/details" element={<FoundDetails />} />
              <Route path="/stats" element={<Stats />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/missing" element={<Missing />} />
                <Route path="/dashboard/seen" element={<Seen />} />
              </Route>
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/services" element={<Services />}>
                <Route path="/services/add_person" element={<AddPerson />} />
                <Route path="/services/find_person" element={<Find />}></Route>
                <Route path="/services/report_person" element={<Report />} />
              </Route>
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
