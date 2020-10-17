const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      localStorage.setItem("authToken", JSON.stringify(payload.auth_token));
      localStorage.setItem("isAdmin", JSON.stringify(payload.is_admin));
      return {
        isLoggedIn: true,
        authToken: payload.auth_token,
        isAdmin: payload.is_admin,
      };
    }
    case "LOGOUT": {
      localStorage.setItem("authToken", JSON.stringify(null));
      localStorage.setItem("isAdmin", JSON.stringify(false));
      return { isLoggedIn: false, authToken: null, isAdmin: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default authReducer;
