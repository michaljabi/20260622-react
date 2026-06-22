import { create } from "https://esm.sh/zustand";

export const useUsersStore = create((set) => ({
  users: [{ name: "Josh", email: "johs@sample.com" }],
  addUser: (name) =>
    set((state) => ({
      users: [...state.users, { name, email: `${name}@sample.com` }],
    })),
  removeUser: (name) =>
    set((state) => ({
      users: state.users.filter((u) => u.name !== name),
    })),
}));

export const selectUsers = (state) => state.users;
