import React from 'react';
import { connect } from "react-redux"

const Titulares = ({ titulares }) => (

    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(t => (
                    <article className="titular" key={t.id}>
                        <img src={t.foto} alt={t.foto} />
                        <h3>{t.nombre}</h3>
                        <div>
                            <button>Remover</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>

)


const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispachesToProps = dispach => ({})


export default connect(mapStateToProps, mapDispachesToProps)(Titulares)

