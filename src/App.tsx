import React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { useAppSelector } from "./app/hooks";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const isAuthorized = useAppSelector(
    (state) => state.authorization.isAuthorized
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0853f1",
      },
      secondary: {
        main: "#f1d309",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/news" element={<News />} />
              <Route
                path="/profile"
                element={isAuthorized ? <Profile /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={isAuthorized ? <Navigate to="/profile" /> : <Login />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
