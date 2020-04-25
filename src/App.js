import React from "react";
import { Provider } from "react-redux";
import store from "./storage.js";
import Jugadores from "./componets/Jugadores";
import EquipoSeleccionado from "./componets/EquipoSeleccionado";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Titulo</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
