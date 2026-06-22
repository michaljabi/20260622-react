export function makeUser(name = "", email = "") {
  return {
    uuid: crypto.randomUUID(),
    name,
    email: email.toLowerCase(),
  };
}
