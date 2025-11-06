// import styled from "styled-components";

// // ✅ Service container styling (theme ke according)
// export const StyledServiceBox = styled.div`
//   background: ${(props) => props.theme.pageBg};
//   color: ${(props) => props.theme.text};
//   padding: 30px;
//   border-radius: 12px;
//   transition: all 0.3s ease;

//   h1 {
//     font-size: 26px;
//     margin-bottom: 20px;
//   }

//   p {
//     line-height: 1.6;
//     font-size: 16px;
//   }
// `;

// // ✅ Themed Button styling
// export const ThemedButton = styled.button`
//   background: ${(props) => props.theme.buttonBg};
//   color: ${(props) => props.theme.buttonText};
//   border: 2px solid ${(props) => props.theme.bordercl};
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: 600;
//   margin-bottom: 20px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     opacity: 0.9;
//   }
// `;


import styled from "styled-components";
import { deviceQuery } from "../MediaSizes";

export const StyledServiceBox = styled.div`
  background: ${({ theme }) => theme.pageBg};
  color: ${({ theme }) => theme.text};
  padding: 30px;

  @media ${deviceQuery.tablet} {
    padding: 24px;
    background: ${({ theme }) => theme.colors.grey.extraLight};
  }

  border-radius: 12px;

  /* ✅ Dynamic border from theme.borders */
  border: ${({ theme }) => theme.borders.border1};

  /* ✅ Dynamic shadow */
  box-shadow: ${({ theme }) => theme.shadows.shadow1};

  /* ✅ Typography */
  h1 {
    font-size: ${({ theme }) => theme.typography.title3};
    color: ${({ theme }) => theme.colors.blue.dark};
  }

  /* ✅ Nested grey color */
  p {
    color: ${({ theme }) => theme.colors.grey.dark};
    font-size: ${({ theme }) => theme.typography.text2};
  }
`;

export const ThemedButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px 20px;
  border-radius: 10px;

  /* ✅ Gradient background from deep color */
  border: ${({ theme }) => theme.borders.border5};

  &:hover {
    background: ${({ theme }) => theme.colors.blue.gradient};
  }
`;
