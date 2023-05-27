'use client';
import Link from '../../components/Link/Link.jsx'
import Form from 'react-bootstrap/Form'
import Titulo from '../../components/Titulo/Titulo.jsx'
import Button from '@/components/Button/Button.jsx';
import './Login.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/Label/Label.jsx'


const Login = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {
        if (usuario==="pepito" && password==="1234") {
            router.push('/Principal')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div className='container-principal'>
            <div>
                <Titulo text="Sistema de Citas para Atencion de Estudiantes" />
                <div className='container-login'>
                    <div className='container-usuario'>
                        <Label text="Usuario"/>
                        <Form.Control type="text" 
                        placeholder="Ingrese su usuario o correo electronico"
                        onChange={e => setUsuario(e.target.value)} />
                    </div>
                    <div className='container-contraseña'>
                        <Label text = "Contraseña" />
                        <Form.Control type="password" 
                        placeholder="Ingrese su contraseña"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                        <div className='container-links'>
                            <div className='container-registro'>
                            <Link href="/Registro" text="Registrar nuevo usuario"></Link>
                            </div>
                            <div className='container-olvido'>
                            <Link href="/ejercicio3" text="Olvide mi constraseña"></Link>
                            </div>
                        </div>
                </div>
                <br/>
            </div>
        <div className='contenedor-button'>
            <div className='contenedor-salir'>
                <Button value="Salir"></Button>
            </div>
            <div className='contenedor-ingresar'>
                <Button value="Ingresar" onClick={handleClick}></Button>
            </div>
        </div>
        </div>
    )
} 

export default Login