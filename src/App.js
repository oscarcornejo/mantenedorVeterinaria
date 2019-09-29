import React, {Component, Fragment} from 'react';
// import './App.sass';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = { 
    citas: []
   }

   // CUANDO LA APLICACION CARGA
   componentDidMount() {
      const citasLS = localStorage.getItem('citas');
      if(citasLS) {
        this.setState({
          citas: JSON.parse(citasLS)
        })
      }
   }

   // CUANDO AGREGAMOS O ACTUALIZAMOS UNA NUEVA CITA
   componentDidUpdate() {
      localStorage.setItem('citas', JSON.stringify(this.state.citas));
   }

  crearNuevaCita = (datos) => {
    console.log(datos);
    // Copiar el state actual
    const citas = [
      ...this.state.citas,
      datos
    ];

    // SE AGREGA EL NUEVO STATE
    this.setState({
      citas: citas
    })
  }

  // ELIMINAR LAS CITAS DEL STATE
  eliminarCita = (id) => {
    console.log(id);

    // TOMAR UNA COPIA DEL STATE
    const citasActuales = [...this.state.citas];

    // UTILIZAR FILTER PARA SACAR EL ELEMENTO @ID DEL ARREGLO
    const citas = citasActuales.filter(cita => cita.id !== id);

    // ACTUALIZAR EL STATE
    this.setState({
      citas
    })

  }

  render() { 
    return ( 
      <Fragment>
          <Navbar titulo='Administrador de Pacientes de Veterinaria'/>

          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                  <NuevaCita crearNuevaCita={this.crearNuevaCita} />
              </div>

              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
              </div>
            </div>
          </div>
         
      </Fragment>
     );
  }
}
 
export default App;
