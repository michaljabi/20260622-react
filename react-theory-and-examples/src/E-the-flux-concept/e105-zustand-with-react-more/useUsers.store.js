import { create } from "https://esm.sh/zustand";
import { devtools } from "https://esm.sh/zustand/middleware";
import { makeUser } from "./makeUser.js";

export const useUsersStore = create(
  devtools((set) => ({
    users: [
      makeUser("Anna", "ja.anna@com.pl"),
      makeUser("Marian", "marr@gmail.com"),
      makeUser("Waldek", "wladek@op.pl"),
    ],
    addUser: (name, email) =>
      set((state) => ({
        users: [...state.users, makeUser(name, email)],
      })),
    removeUser: (uuid) =>
      set((state) => ({
        users: state.users.filter((u) => u.uuid !== uuid),
      })),
  })),
);

export const selectUsers = (state) => state.users;
