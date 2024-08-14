import { atom } from "recoil";

const categoriesState = atom({
  key: "categoriesState",
  default: [
    { id: 1, name: "Food" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Cars" },
  ],
});

export default categoriesState;
