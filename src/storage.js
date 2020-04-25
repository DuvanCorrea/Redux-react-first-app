import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Raul",
      foto: "https://picsum.photos/70/80",
    },
    {
      id: 2,
      nombre: "Pacho",
      foto: "https://picsum.photos/70/81",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  console.log(state);
  return state;
};

export default createStore(reducerEntrenador);
