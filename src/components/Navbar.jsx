// import React from "react";
// import { Link } from 'react-router-dom'
// import { useAuth } from "../context/AuthContext";
// import { useTheme } from "../context/ThemeContext";

// const Navbar = () => {
//   const { user, login, logout } = useAuth();
//   const { theme, toggleTheme } = useTheme();

//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     background: theme === "light" ? "#eee" : "#333",
//     color: theme === "light" ? "#000" : "#fff",
//     padding: "10px 20px",
//   };

//   return (
//     <nav style={navStyle}>
//       <h3>My App</h3>
//       <nav>
//        <Link to='/'>Home</Link> <br />
//        <Link to='/about'>About</Link> <br />
//       </nav>
//       <div>
//         {user ? (
//           <>
//             <div> 
//               <Link to='/service'>Service</Link> <br />
//             </div>
//             <div>
//               <span>Welcome, {user} </span>
//               <button onClick={logout}>Logout</button>
//             </div>
//           </>
//         ) : (
//           <button onClick={() => login("Sumit")}>Login</button>
//         )}
//         <button onClick={toggleTheme} style={{ marginLeft: "10px" }}>
//           Switch to {theme === "light" ? "Dark" : "Light"}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px 20px",
  };

  return (
    <nav style={navStyle}>
      <h3>My App</h3>
      <nav>
       <Link to='/'>Home</Link> <br />
       <Link to='/about'>About</Link> <br />
      </nav>
      <div>
        {user ? (
          <>
            <div> 
              <Link to='/service'>Service</Link> <br />
            </div>
            <div>
              <span>Welcome, {user} </span>
              <button onClick={logout}>Logout</button>
            </div>
          </>
        ) : (
          <button onClick={() => login("Sumit")}>Login</button>
        )}
        <button onClick={toggleTheme} style={{ marginLeft: "10px" }}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;