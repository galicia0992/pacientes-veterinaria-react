import {useState, useEffect} from "react"
import Error from "./Error"

function Formulario({setPacientes, pacientes, paciente, setPaciente}){
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas )
        }
    },[paciente])


    function generarId(){
        const fecha = Date.now()
        const random = Math.random().toString(36).substring(2)
        const id = fecha + random
        return id.substring(17)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        if([nombre, propietario, email, fecha, sintomas].includes("")){
            setError(true)
            return
        }
        setError(false)
        const objetoPaciente ={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.folio){
            objetoPaciente.folio = paciente.folio
            const pacientesActualizados = pacientes.map(item =>{
                return(item.folio === paciente.folio ? objetoPaciente:item)
            })
            
            setPacientes(pacientesActualizados)
            setPaciente({})

        }else{
            objetoPaciente.folio = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }
        

        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }

    return(
        <>
        <div className="w-50 d-flex flex-column">
            <h3 className="seguimiento">Seguimiento Pacientes</h3>
            <p className="mt-3">
                Añade Pacientes y {""}
                <span className="administralos">Administralos</span>
            </p>
            <form action=""
            onSubmit={handleSubmit}
            className="formularioMascota mt-3 bg-white shadow p-5">
            {error ? <Error 
            mensaje = "Todos los campos son necesarios"
            />:""}
            <div className="nombreMascota mb-3">
                <label htmlFor="mascota" className="espacioMascota">Nombre Mascota</label>
                <input type="text" id="mascota" placeholder="Nombre de la mascota" className="inputMascota mt-2 p-1" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div className="nombreMascota mb-3">
                <label htmlFor="propietario" className="espacioMascota">Nombre Propietario</label>
                <input type="text" id="propietario" placeholder="Nombre del propietario" className="inputMascota mt-2 p-1" value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
            </div>
            <div className="nombreMascota mb-3">
                <label htmlFor="email" className="espacioMascota">Email</label>
                <input type="email" id="email" placeholder="Email" className="inputMascota mt-2 p-1" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="nombreMascota mb-3">
                <label htmlFor="alta" className="espacioMascota">Fecha alta</label>
                <input type="date" id="alta" className="inputMascota mt-2 p-1" value={fecha} onChange={(e)=> setFecha(e.target.value)}/>
            </div>
            <div className="nombreMascota mb-3">
                <label htmlFor="sintomas" className="espacioMascota">Sintomas</label>
                <textarea name="" id="sintomas" cols="49" rows="5" className="inputSintomas" value={sintomas} onChange={(e)=> setSintomas(e.target.value)}></textarea>
            </div>
            <input type="submit" className="btn btn-warning w-100" value={paciente.folio ? "Editar paciente":"Agregar paciente"}/>
        </form>
        </div>
        </>
    )
}

export default Formulario