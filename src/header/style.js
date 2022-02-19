import styled from "styled-components";


export const Container = styled.section`
    background-color: aliceblue;
    height: 8vh;
    width: 100%;
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 80%;
    margin: auto;
    overflow: hidden;
`;
export const Logo = styled.header`

`;
export const Nav = styled.nav`

`;
export const NavButton = styled.button`
    display: none;
    @media(max-width: 768px) {
        display: initial; 
    }
`;
export const NavList = styled.ul`
    list-style: none;
    display: flex;
    @media(max-width: 768px) {
        position: absolute;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: green;
        width: 90vw;
        height: 92vh;
        transition: all .2s linear;
        transform: translateX(${props => props.active? '0' : '100%'});
    }
`;
export const NavLink = styled.li`
    padding: 10px 15px;
    margin: 2px;
    background-color: aqua;
`;
