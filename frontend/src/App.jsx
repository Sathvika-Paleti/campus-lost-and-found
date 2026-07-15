import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/home";
import AddItem from "./pages/AddItem";
import Search from "./pages/Search";
import Login from "./pages/login";
import Register from "./pages/register";
import EditItem from "./pages/EditItem";

function App() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/login");

  };

  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-primary">

        <div className="container">

          <Link className="navbar-brand" to="/">
            Campus Lost & Found
          </Link>

          <div className="navbar-nav ms-auto">

            <Link className="nav-link text-white" to="/">
              Home
            </Link>

            <Link className="nav-link text-white" to="/add">
              Add Item
            </Link>

            <Link className="nav-link text-white" to="/search">
              Search
            </Link>

            <Link className="nav-link text-white" to="/edit">
              Edit
            </Link>

            <Link className="nav-link text-white" to="/login">
              Login
            </Link>

            <Link className="nav-link text-white" to="/register">
              Register
            </Link>

            <button
              className="btn btn-danger ms-3"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddItem />} />

        <Route path="/search" element={<Search />} />

        <Route path="/edit" element={<EditItem />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </>
  );
}

export default App;