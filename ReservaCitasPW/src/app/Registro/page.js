'use client';
import Form from 'react-bootstrap/Form'
import Titulo from '../../components/Titulo/Titulo.jsx'
import Button from '@/components/Button/Button.jsx';
import './Registro.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/Label/Label.jsx'
import Subtitle from '@/components/Subtitle/Subtitle.jsx';


const Registro = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const volver = () =>{
        router.push('/Login')
    }

    const handleClick = () => {
        if (usuario==="admin" && password==="admin") {
            router.push('/ejercicio6')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div className='container-principal'>
            <div>
                <Titulo text="Sistema de Citas para Atencion de Estudiantes" />
                <Titulo text="Registro de usuario"/>
                <div>    
                    <div className='container-block1'>
                        <div className='container-usuario'>
                            <Label text="Usuario"/>
                            <Form.Control type="text" 
                            placeholder="Ingrese un nuevo usuario"
                            onChange={e => setUsuario(e.target.value)} />
                        </div>
                        <div className='container-correo'>
                            <Label text="Correo"/>
                            <Form.Control type="text" 
                            placeholder="Ingrese un nuevo correo electronico"
                            onChange={e => setUsuario(e.target.value)} />
                        </div>
                        <div className='container-contraseña'>
                            <Label text = "Contraseña" />
                            <Form.Control type="password" 
                            placeholder="Ingrese una nueva contraseña"
                            onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className='container-rep-contraseña'>
                            <Label text = "Confirmar contraseña" />
                            <Form.Control type="password" 
                            placeholder="Confirme la contraseña"
                            onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>


                        <div className='subtitle'>
                            <Subtitle text="Datos Personales"/>
                        </div>
                    
                    
                    
                    
                    
                    <div className='container-nombres'>
                        <Label text = "Nombres" />
                        <Form.Control type="text" 
                        placeholder="Ingresar los nombres del usuario"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='container-apellidos'>
                        <Label text = "Apellidos" />
                        <Form.Control type="text" 
                        placeholder="Ingresar los apellidos del usuario"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='container-tipo'>
                        <Label text = "Tipo de Documento" />
                        <Form.Select aria-label="Default select example">
                            <option value="1">DNI</option>
                            <option value="2">Carnet Extranjeria</option>
                            <option value="2">Pasaporte</option>
                        </Form.Select>
                    </div>
                    <div className='container-numerodoc'>
                        <Label text = "Numero de Documento" />
                        <Form.Control type="text" 
                        placeholder="Ingresar el numero de documento"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='container-rol'>
                        <Label text = "Rol del Usuario" />
                        <Form.Select aria-label="Default select example">
                            <option value="1">Estudiante</option>
                            <option value="2">Docente</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
        <div className='contenedor-button'>
            <div className='contenedor-salir'>
                <Button value="Volver" onClick={volver}></Button>
            </div>
            <div className='contenedor-ingresar'>
                <Button value="Registrar" onClick={handleClick}></Button>
            </div>
        </div>
        </div>
    )
} 
export default Registro