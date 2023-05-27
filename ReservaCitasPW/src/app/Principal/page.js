'use client';
import Title from '../../components/Titulo/Titulo.jsx'
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import './Principal.css'
const Ejercicio4 = () => {
    return (
    <main className='main-container'>

        <TopBar />
            <main className="container">
                <nav className="contenedorMenu">
                    <Menu />
                </nav>
                <section className="principal">
                </section>
            </main>
    </main>
    )
  }
export default Ejercicio4