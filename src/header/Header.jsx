import { useState } from 'react';
import * as C from './style'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <C.Container>
            <C.Header>
                <C.Logo>Logo</C.Logo>
                <C.Nav>
                    <C.NavButton>
                        Opa
                    </C.NavButton>
                    <C.NavList>
                        <C.NavLink>Link 1</C.NavLink>
                        <C.NavLink>Link 2</C.NavLink>
                        <C.NavLink>Link 3</C.NavLink>
                        <C.NavLink>Link 4</C.NavLink>
                    </C.NavList>
                </C.Nav>
            </C.Header>

        </C.Container>
    );
}

export default Header;