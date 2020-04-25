import React from 'react';
import { connect } from "react-redux"

const Suplentes = ({ suplentes }) => (

    <section>
        <h2>Suplentes</h2>
        <div className="banca">
            {
                suplentes.map(s => (
                    <article className="suplente" key={s.id}>
                        <img src={s.foto} alt={s.foto} />
                        <h3>{s.nombre}</h3>
                        <div>
                            <button>Remover</button>
                            <button>Titular</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>

)


const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispachesToProps = dispach => ({})


export default connect(mapStateToProps, mapDispachesToProps)(Suplentes)

