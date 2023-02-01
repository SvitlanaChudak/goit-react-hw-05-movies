// import { Link, Outlet } from "react-router-dom";
// import { getMovieDetails } from "services/api";
// import { useEffect } from "react";

// export const MovieDetails = ({ id, poster_path, title, name, overview, genre_ids }) => {
    
//         useEffect(() => {
//         const getDetails = async () => {
//             try {
//                 const result = await getMovieDetails();
//                 return result;
//             } catch (error) {
//                 console.log('Error')
//             };
//             };
//             getDetails();
//         });
    
//     const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    
//     return (
// <>
//         <div key={id}>
//             <img src={IMG_URL + poster_path} alt="" />
//                 <h2>Title {title || name}</h2>
//                 <p>Overview {overview}</p>
//                 <p>Genres {genre_ids}</p>
//             </div>
            
//         <div>
//                 <p>Additional information</p>
//                 <ul>
//                     <li>
//                         <Link to="cast">Cast</Link>
//                     </li>
//                     <li>
//                         <Link to="reviews">Reviews</Link>
//                     </li>
//                 </ul>
//                 <Outlet />
//         </div>
// </>
//     )
// }