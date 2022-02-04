import Signup from "./components/SignUpForm";
import Login from "./components/LoginForm";
import UserRegistrationLayout from "./components/UserRegistrationLayout";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserRegistrationLayout />}>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
