// import { useEffect } from "react";
// import { getMovieCredits } from "services/api";

// export const Cast = ({ actors }) => {
    
//         useEffect(() => {
//         const getCast = async () => {
//             try {
//                 const cast = await getMovieCredits();
//                 return cast;
//             } catch (error) {
//                 console.log('Error')
//             };
//             };
//             getCast();
//         });

//     return (
//         <>
//                         <ul>
//             {actors.map(({cast_id, profile_path, name, character}) => (
//                     <li key={cast_id}>
//                             <img src={profile_path} alt="" />
//                     <p>{name}</p>
//                     <p>{character}</p>
//                 </li>
//             ))}
//                 </ul>
//         </>
//     )
// }