import styled from "styled-components";
import { TextField, Button, FormControlLabel } from "@mui/material";

// 📩 Email Input (TextField)
export const StyledLoginEmailInput = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 15px;

    .MuiInputBase-root {
      height: 45px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.2);
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary || "#1976d2"};
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary || "#1976d2"};
      box-shadow: 0 0 5px rgba(25, 118, 210, 0.4);
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.grey?.semiDark || "#888"};
    }
  }
`;

// 🔐 Password Input (same as email, but with type="password")
export const StyledLoginPasswordInput = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 15px;

    .MuiInputBase-root {
      height: 45px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.2);
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary || "#1976d2"};
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary || "#1976d2"};
      box-shadow: 0 0 5px rgba(25, 118, 210, 0.4);
    }
  }
`;

// 🔵 Login Button
export const StyledLoginButton = styled(Button)`
  && {
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.primary || "#1976d2"};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark || "#0d47a1"};
      transform: scale(1.03);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.grey?.light || "#eee"};
      color: ${({ theme }) => theme.colors.grey?.semiDark || "#999"};
    }
  }
`;

// ☑️ Checkbox (MUI compatible)
export const StyledCheckbox = styled(FormControlLabel)`
  && {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 15px;

    .MuiCheckbox-root {
      color: ${({ theme }) => theme.colors.primary || "#1976d2"};
    }

    &:hover .MuiTypography-root {
      color: ${({ theme }) => theme.colors.primary || "#1976d2"};
    }
  }
`;

