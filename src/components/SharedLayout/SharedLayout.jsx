import { Outlet } from "react-router-dom";
import { FcHome, FcFilmReel } from 'react-icons/fc';
import { Nav, NavLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <>
      <Nav>
        <FcHome size={30} /><NavLink to="/">Home</NavLink>
        <FcFilmReel size={30} /><NavLink to="/movies">Movies</NavLink>
      </Nav>
            <Outlet />
        </>
    )
}