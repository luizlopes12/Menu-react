import { useState } from 'react';
import {
    Header,
    Nav,
    NavList,
    NavLink,
    NavButton
} from './style'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <Nav>
                <NavList>
                    <NavLink>Home</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About us</NavLink>
                </NavList>
                    <NavButton>BTN</NavButton>
            </Nav>
        </>

    );
}

export default Header;