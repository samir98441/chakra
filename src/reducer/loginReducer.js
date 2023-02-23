import { useTab } from "@chakra-ui/react";
import { defaultUsers } from "../constants/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGINVALIDATE":
      console.log("aaaa", action.payload);
      const result = defaultUsers.some(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (result) {
        return { ...state, isLoggedIn: true };
      } else return { ...state, isLoggedIn: false };
      break;
    default:
      return state;
  }
};

export default reducer;
