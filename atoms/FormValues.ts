import { atom } from "recoil";

export const formValues = atom({
  key: "values",
  default: {
    name: "",
    email: "",
    message: "",
  },
});
