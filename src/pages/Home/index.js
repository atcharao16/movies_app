import { useEffect } from "react";
import Navbar from "../../components/navbar"
import { useDispatch, useSelector} from "react-redux";
import { getMovies } from "../../apis/movies";

const Home = () => {
    const dispatch = useDispatch();
    
    const { movies } = useSelector(state => state.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(getMovies());
    },[]);

    return(
        <>
        <Navbar/>
        </>
    )
}

export default Home;