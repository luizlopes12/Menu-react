import { useState, useEffect } from 'react';
import {
    Container,
    Logo,
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
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                {(toggleMenu || screenWidth > 600) && (
                <NavList>
                    <NavLink>Home</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About us</NavLink>
                </NavList>
                )
                }
                    <NavButton onClick={toggleNav} toggled={toggleMenu}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                    </NavButton>
            </Nav>
        </Container>

    );
}

export default Header;