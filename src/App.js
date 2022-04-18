import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Registar from "./components/registar/Registar";
import Login from "./components/login/Login";
import Booknow from "./components/bookNow/BookNow";
import Requireauth from "./components/requireAuth/RequireAuth";
import Notfound from "./components/notFound/NotFound";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route
            path="/book-now"
            element={
              <Requireauth>
                <Booknow />
              </Requireauth>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/registar" element={<Registar />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
