import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

// SE CREA STATEINICIAL PARA LIMPIAR CAMPOS
const stateInicial = {
  cita: {
    nombreMascota: '',
    nombreDuenio: '',
    fecha:'',
    hora: '',
    sintomas: '',
  },
  error: false
}

class NuevaCita extends Component {
    state = {...stateInicial} //DATOS DEL PACIENTE QUE SE DA DE ALTA

    // RECIBIR LOS VALORES DE LOS INPUTS CUANDO EL USUARIO EN LOS CAMPOS DEL FORMULARIO
    handleChange = (e) => {
      // console.log('Estás escribiendo...', e.target.name, ' : ', e.target.value);
      this.setState({
        cita: {
          ...this.state.cita,
          [e.target.name]: e.target.value
        }
      });
    }

    // MÉTODO PARA CUANDO EL USUARIO ENVIA EL FORMULARIO
    handleSubmit = (e) => {
      e.preventDefault();

      // EXTRAER LOS VALORES DEL STATE
      const {nombreMascota, nombreDuenio, fecha, hora, sintomas} = this.state.cita;

      // VALIDAR QUE TODOS LOS CAMPOS ESTEN COMPLETOS 
      if (nombreMascota === '' || nombreDuenio === '' || fecha === '' || hora === '' || sintomas === '') {
        this.setState({
          error: true,
        });
        // DETENER LA EJECUCIÓN CON RETURN
        return;
      }

      // SE GENERA UN OBJETO CON LOS DATOS
      const nuevaCita = {...this.state.cita};
      nuevaCita.id = uuid();

      // PARA ACCEDER A LOS PROPS EN UN CLASS COMPONETS, A TRAVES DE UNA FUNCTION PUEDES PASAR DATOS DE UN COMPONENTS HIJO A UNO PADRE
      // SI TODO ESTA OK, AGREGAR LA CITA AL STATE
      this.props.crearNuevaCita(nuevaCita);

      // COLOCAR EN EL STATE EL STATEINICIAL PARA LIMPIAR CAMPOS
      console.log('SETEAR ESTADO: ', stateInicial);
     this.setState({
      ...stateInicial
     })
    }

    render() {

      const { error } = this.state;

        return (
          <Fragment>
            <div className="card mt-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-center mb-5">
                    Para una nueva cita, favor completar el formulario.
                </h2>

                {error ? <div className="alert alert-danger mt-2 mb-5 text-center">*Todos los campos son obligatorios</div> : null}

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-9">
                          <input type="text" className="form-control" placeholder="Nombre Mascota" name="nombreMascota" onChange={this.handleChange} value={this.state.cita.nombreMascota}  />
                        </div>
                    </div>{/* FORM GROUP NOMBRE MASCOTA */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-9">
                          <input type="text" className="form-control" placeholder="Nombre Dueño Mascota" name="nombreDuenio" onChange={this.handleChange} value={this.state.cita.nombreDuenio} />
                        </div>
                    </div>{/* FORM GROUP NOMBRE DUEÑO MASCOTA */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Fecha de Alta</label>
                        <div className="col-sm-8 col-lg-3">
                          <input type="date" className="form-control" name="fecha" onChange={this.handleChange} value={this.state.cita.fecha}  />
                        </div>
                    
                        <label className="col-sm-4 col-lg-2 col-form-label">Hora de Alta</label>
                        <div className="col-sm-8 col-lg-3">
                          <input type="time" className="form-control" name="hora" onChange={this.handleChange} value={this.state.cita.hora}  />
                        </div>
                    </div>{/* FORM GROUP FECHA Y HORA DE ALTA */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Síntomas</label>
                        <div className="col-sm-8 col-lg-9">
                          <textarea className="form-control" name="sintomas" placeholder="Ingresar Síntomas..." onChange={this.handleChange} value={this.state.cita.sintomas} ></textarea>
                        </div>
                    </div>{/* FORM GROUP SÍNTOMAS */}

                    <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />

                </form>
              </div>
            </div>
          </Fragment>

        );
    }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;