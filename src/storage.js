import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      nombre: "Raul",
      foto: "https://picsum.photos/70/80",
    },
    {
      nombre: "Pacho",
      foto: "https://picsum.photos/70/81",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default createStore(reducerEntrenador);
