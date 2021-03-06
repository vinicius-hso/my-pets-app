import api from "./api";

async function petList() {
  try {
    const { data } = await api.get("/pet/list");
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function petCreate(name) {
  try {
    const { data } = await api.post("/pet/create", { name });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function petRemove(idpet) {
  try {
    const { data } = await api.delete("/pet/remove", {
      data: { idpet },
    });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export { petList, petCreate, petRemove };
