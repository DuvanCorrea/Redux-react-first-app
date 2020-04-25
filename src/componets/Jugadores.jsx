import React, { Component } from "react";
import { connect } from 'react-redux';

const Jugadores = ({ jugadores }) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador">
                        <img src={j.foto} alt="no image" />
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
});

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
