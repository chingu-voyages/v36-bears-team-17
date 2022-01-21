import Signup from "./components/SignUpForm";
import Login from "./components/LoginForm";
import UserRegistrationLayout from "./components/UserRegistrationLayout";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserRegistrationLayout />}>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
