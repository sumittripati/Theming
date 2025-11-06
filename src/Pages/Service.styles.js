import styled from "styled-components";

// ✅ Service container styling (theme ke according)
export const StyledServiceBox = styled.div`
  background: ${(props) => props.theme.pageBg};
  color: ${(props) => props.theme.text};
  padding: 30px;
  border-radius: 12px;
  transition: all 0.3s ease;

  h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
    font-size: 16px;
  }
`;

// ✅ Themed Button styling
export const ThemedButton = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: 2px solid ${(props) => props.theme.bordercl};
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
