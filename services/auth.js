import api from "./api";

async function signIn(mail, password) {
  try {
    const { data } = await api.post("/user/login", { mail, password });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function userCreate(mail, password) {
  try {
    const { data } = await api.post("/user/create", { mail, password });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export { signIn, userCreate };
