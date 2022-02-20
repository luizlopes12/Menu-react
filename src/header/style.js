import styled from "styled-components";

export const Container = styled.section`
    background-color: #0D2149;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

export const Logo = styled.div`
    z-index: 999;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
`;
export const Nav = styled.nav`
    top: 0;
    height: 50px;
    @media screen and (max-width: 500px) {
        position: absolute;
        width: 100vw;
    }
`;
export const NavList = styled.ul`
    list-style: none;
    background-color: #0D2149;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all .2s linear;
    
    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: 100vh;
        justify-content: start;  
        transition: all .2s linear ;
    }

`;
export const NavLink = styled.li`
    margin-right: 20px;
    font-size: 18px;
    color: #f1f1f1;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        &:nth-child(1){
            border-top: none;
            margin-top: 50px;
        }
        width: 80%;
        border-top: 1px solid #f1f1f14f;
        text-align: center;
        margin-right: 0;
        padding: 25px 0;
    }
`;
export const NavButton = styled.div`
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    color: #000;
    font-size: 18px;
    div{
        width: 28px;
        height: 2px;
        background-color: #fff;
        margin: 8px;
        transition: .2s;
    }
    .line1{
        ${({toggled}) => (toggled ? 'transform: rotate(-45deg) translate(-8px, 8px);':'')}
    }
    .line2{
        ${({toggled}) => (toggled ? 'opacity: 0;':'')}
    }
    .line3{
        ${({toggled}) => (toggled ? 'transform: rotate(45deg) translate(-5px, -7px);':'')}
    }
    @media screen and (max-width: 500px) {
        display: block;
    }
`;