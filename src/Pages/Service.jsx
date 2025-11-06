// import React from 'react'
// import { useTheme } from '../context/ThemeContext'
// import './Service.css'
// const Service = () => {

//   let {theme} = useTheme()

//   let servicecss = {
//     background: theme === "light" ? "#eee" : "#333",
//     color: theme === "light" ? "#000" : "#fff",
//     padding: "10px 20px",
//     borderRadius: "10px",
//     border: "1px solid gray",
//     margin: "20px",
//     textAlign: "center",
//     fontSize: "20px",
//     fontWeight: "bold",
//   }
//   let buttoncss = {
//     background: theme === "light" ? "#61ff18ff" : "#c62a37ff",
//     color: theme === "light" ? "#000" : "#fff",
//     padding: "10px 20px",
//     borderRadius: "10px", 
//     border: "1px solid gray",
//     margin: "20px",
//     textAlign: "center",
//     fontSize: "20px",
//     fontWeight: "bold",
//     cursor: "pointer"
//   }

//   return (
//     <div style={servicecss}>
//       <h1>this is service page</h1>
//       <button style={buttoncss}>hello sir</button>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//          Temporibus eum ipsum pariatur dolor consequatur consequuntur, 
//          consectetur nesciunt aut voluptates quisquam modi laborum neque 
//          omnis dolores eaque placeat reiciendis voluptatem commodi?
//       </p>
//     </div>
//   )
// }

// export default Service






import React from "react";
import { useTheme } from "../context/ThemeContext";
import { StyledServiceBox, ThemedButton } from "./Service.styles";
import styled from "styled-components";
import "./Service.css";

const Service = () => {
  // const { theme } = useTheme();
  const { themode } = useTheme();

  return (
    <StyledServiceBox className="service-container">
      <h1>this is service page</h1>
      <h2 style={{ color: themode.accentColor }}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>

      <ThemedButton className="service-btn">
        hello sir
      </ThemedButton>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus eum ipsum pariatur dolor consequatur consequuntur,
        consectetur nesciunt aut voluptates quisquam modi laborum neque
        omnis dolores eaque placeat reiciendis voluptatem commodi?
      </p>
    </StyledServiceBox>
  );
};

export default Service;

