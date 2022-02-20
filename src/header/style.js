import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #0D2149;
`;
export const NavList = styled.ul`
    list-style: none;
    background-color: #0D2149;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        transition: all .2s linear;
    }
`;
export const NavLink = styled.li`
    margin-right: 20px;
    font-size: 20px;
    text-transform: uppercase;
    color: #f1f1f1;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        &:nth-child(1){
            margin-top: 50px;
        }
        width: 100%;
        border-top: 1px solid #f1f1f1;
        text-align: center;
        margin-right: 0;
        padding: 20px 0;
    }
`;
export const NavButton = styled.button`
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    color: #000;
    font-size: 18px;
    @media screen and (max-width: 500px) {
        display: block;

    }
`;