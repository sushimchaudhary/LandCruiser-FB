"use client";

import { createContext, useEffect, useReducer, ReactNode, Dispatch } from "react";

// Auth State & Actions
interface AuthState {
  user: any | null;
  loading: boolean;
  error: any | null;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "LOGIN_FAILURE"; payload: any }
  | { type: "REGISTER_SUCCESS"; payload: any }
  | { type: "LOGOUT" };

// Initial state
const initialState: AuthState = {
  user:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null,
  loading: false,
  error: null,
};

// Context creation
export const AuthContext = createContext<{
  user: any | null;
  loading: boolean;
  error: any | null;
  dispatch: Dispatch<AuthAction>;
}>({
  ...initialState,
  dispatch: () => {},
});

// Reducer
const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };

    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };

    case "REGISTER_SUCCESS":
      return { user: action.payload, loading: false, error: null };

    case "LOGOUT":
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

// Provider
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
