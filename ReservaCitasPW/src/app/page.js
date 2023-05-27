'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Button from 'react-bootstrap/Button'

export default function Home() {

  const handleClick = () =>{
    console.log('hello')
  }

  return (
    <main >
      <h1>Ejercicios en React</h1>
    </main>
  )
}
