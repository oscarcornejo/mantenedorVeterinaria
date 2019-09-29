import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {

    // EXTRAER VALOR PARA IMPRIMIR UN MENSAJE EN BASE A SI HAY CITAS O NO
    const mensaje = Object.keys(citas).length === 0 ? 'No existen citas creadas' : 'Administra las citas aquí';
    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                {/* {citas.length > 0 ? <h2 className="card-title text-center">Administrar las Citas</h2> : <div className="alert alert-info mt-2 mb-5 text-center">No existen Citas creadas</div>} */}
                <h2 className="card-title text-center">{mensaje}</h2>

                <div className="lista-citas">
                        {
                            citas.map( (cita, index) => {
                                console.log('La Cita: ', cita);
                                return (
                                    <Cita key={index} cita={cita} eliminarCita={eliminarCita}/>
                                );
                            })
                        }
                </div>
            </div>
        </div>
    );
}


ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired,
  }
 
export default ListaCitas;