import { useState, useEffect } from 'react'
import './App.css'
import Header from '../components/Header'
import Formulario from '../components/Formulario'
import ListadoPacientes from '../components/ListadoPacientes'


function App() {
  const[pacientes, setPacientes] = useState([])
  const[paciente, setPaciente] = useState({})

  useEffect(() =>{
    const obtenerStorage = () =>{
      const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(pacientesLs)
    }

    obtenerStorage()
  },[])
  useEffect(() => {
   return localStorage.setItem("pacientes", JSON.stringify(pacientes))
  
  }, [pacientes])
  
  
  function eliminarPaciente(id){
    const pacientesActualizados = pacientes.filter(item => item.folio !== id)
    setPacientes(pacientesActualizados)
  }
  return (
    <div className='container mt-3'>
      <Header 
         
      />
      <div className="formulario">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente ={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
