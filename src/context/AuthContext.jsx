import { createContext, useReducer, useContext } from "react";

// 1️⃣ Create Context
const AuthContext = createContext();

// 2️⃣ Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// 3️⃣ Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  const login = (username) => dispatch({ type: "LOGIN", payload: username });
  const logout = () => dispatch({ type: "LOGOUT" });

  const value = { user: state.user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 4️⃣ Custom Hook
export const useAuth = () => useContext(AuthContext);
