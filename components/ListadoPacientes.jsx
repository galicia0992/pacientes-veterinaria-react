import React, { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  useEffect(() => {
    if(pacientes.length > 0){
      console.log("nuevo paciente")
      console.log(pacientes)
    }
  }, [pacientes])
  
  return (
    <div className="w-50 mt-2 d-flex align-items-center flex-column overfl">
      {pacientes && pacientes.length ? (
        <>
        <h2 className='headerListado'>ListadoPacientes</h2>
         <p className='mt-2'>
           Administra tus {""}
           <span className='administralos'>Pacientes</span>
         </p>
      {pacientes.map(paciente =>{
        return(
          <Paciente
          key = {paciente.folio}
          paciente = {paciente}
          setPaciente = {setPaciente}
          eliminarPaciente={eliminarPaciente}
        />  
        )
      })}
        </>
      ):(
        <>
        <h2 className='headerListado'>ListadoPacientes</h2>
          <p className='mt-2'>
             Administra tus {""}
             <span className='administralos'>Pacientes</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes
