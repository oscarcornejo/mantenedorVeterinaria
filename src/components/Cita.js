import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{cita.nombreMascota}</h3>
                <p className="card-text">
                    <span>Nombre Dueño: </span> {cita.nombreDuenio}
                </p>
                <p className="card-text">
                    <span>Fecha de Alta: </span> {cita.fecha}
                </p>
                <p className="card-text">
                    <span>Hora de Alta: </span> {cita.hora}
                </p>
                <p className="card-text">
                    <span>Síntomas: </span> {cita.sintomas}
                </p>

                <button className="btn btn-danger" onClick={ () => eliminarCita(cita.id)}>Borrar Cita</button>
            </div>
        </div>
     );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
  }
 
export default Cita;