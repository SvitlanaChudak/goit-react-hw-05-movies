import { Link, Outlet } from "react-router-dom";
import {FcHome, FcFilmReel} from 'react-icons/fc'

export const SharedLayout = () => {
    return (
        <>
      <nav>
        <FcHome size={25} /><Link to="/">Home</Link>
        <FcFilmReel size={25} /><Link to="/movies">Movies</Link>
      </nav>
            <Outlet />
        </>
    )
}