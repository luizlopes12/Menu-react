import { useState, useEffect } from 'react';
import {
    Nav,
    NavList,
    NavLink,
    NavButton
} from './style'
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
    }
    useEffect(() =>{
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)

        return () =>{
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (
        <>
            <Nav>
                {(toggleMenu || screenWidth > 500) && (
                <NavList toggleMenu={toggleMenu}>
                    <NavLink>Home</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About us</NavLink>
                </NavList>
                )
                }
                    <NavButton onClick={toggleNav}>BTN</NavButton>
            </Nav>
        </>

    );
}

export default Header;