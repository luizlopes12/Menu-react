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
    const [active, setActive] = useState(false)
    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
        setActive(!active)
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
                {(toggleMenu || screenWidth > 500) && (
                <NavList>
                    <NavLink>Home</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About us</NavLink>
                </NavList>
                )
                }
                    <NavButton onClick={toggleNav}>BTN</NavButton>
            </Nav>
        </Container>

    );
}

export default Header;