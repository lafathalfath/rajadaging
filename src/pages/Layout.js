import { useState } from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import './Layout.css';
import LogoBrand from '../assets/img/logo/logo raja daging.png';
import About from './About';

const Layout=()=>{
    const [navOpen, setNavOpen] = useState(false);

    const navToggle = ()=>{
        setNavOpen(!navOpen);
    }

    const [popAbout, setPopAbout] = useState(false);
    const [stopScroll, setStopScroll] = useState(false);
    const handlePopAbout=()=>{
        setPopAbout(true)
        setStopScroll(true)
    }
    const stopPopUp=()=>{
        setPopAbout(false)
        setStopScroll(false)
    }

    return(
        <>
            <header>
                <div>
                    <Link to='/' className='logo-brand'>
                        <img src={LogoBrand} alt=''/>
                        Raja Daging
                    </Link>
                </div>
                <div className='nav-container'>
                    <button className='toggle-nav' onClick={navToggle}>&#9776;</button>
                    <nav className={`navbar ${navOpen?'open':''}`}>
                        <NavLink exact='true' to='/' id="beranda" className='navigator' activeclassname='active'>Home</NavLink>
                        <NavLink to='/product' className='navigator' activeclassname='active'>Produk</NavLink>
                        <div className='navigator' onClick={handlePopAbout}>Tentang</div>
                        {/* <button className='navigator'>Tentang</button> */}
                    </nav>
                </div>
            </header>
            <section className={stopScroll?'stop-scroll':''}> 
                <Outlet/>
            </section>

            <section className={`about-popup ${popAbout?'pop':''}`}>
                <About closePopUp={stopPopUp}/>
            </section>
        </>
    )
}

export default Layout;