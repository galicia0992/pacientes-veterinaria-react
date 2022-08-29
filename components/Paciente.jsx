
import { useEffect } from "react";
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, folio} = paciente
  const handleEliminar = () =>{
    const respuesta = confirm("deseas eliminar ?")

    if(respuesta){
      eliminarPaciente(folio)
    }
  }
  return (
    <div className='mt-3 bg-white shadow p-5 w-75'>
        <p className='nombre'>Nombre: {""}<span className='hook'>{nombre}</span></p>
        <p className='nombre'>Propietario: {""}<span className='hook'>{propietario}</span></p>
        <p className='nombre'>Email: {""}<span className='hook'>{email}</span></p>
        <p className='nombre'>Fecha Alta: {""}<span className='hook'>{fecha}</span></p>
        <p className='nombre'>Sintomas: {""}<span className='hook'>{sintomas}</span></p>
        <p className='nombre'>Folio: {""}<span className='hook'>{folio}</span></p>
        <div className="d-flex w-100 justify-content-center justify-content-evenly">
          <button className="btn btn-danger boton text-uppercase" onClick={handleEliminar}>Eliminar</button>
          <button className="editar text-uppercase" onClick={()=>setPaciente(paciente)}>Editar</button>
        </div>
    </div>
  )
}

export default Paciente