import { create } from "https://esm.sh/zustand";

export const useUsersStore = create((set) => ({
  // STATE:
  users: [{ name: "Josh", email: "johs@sample.com" }],

  // COMMAND:
  addUser: (name) =>
    set((state) => ({
      users: [...state.users, { name, email: `${name}@sample.com` }],
    })),
  removeUser: (name) => {
    setTimeout(() => {
      set((state) => ({
        users: state.users.filter((u) => u.name !== name),
      }));
    }, 5000);
  },
}));


// QUERIES
export const selectUsers = (state) => state.users;
export const selectNumberOfUsers = (state) => state.users.length;
