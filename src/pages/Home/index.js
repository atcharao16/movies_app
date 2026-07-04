import { useEffect } from "react";
import Navbar from "../../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../apis/movies";
import MovieCard from '../../components/movieComponent'

const Home = () => {
    const dispatch = useDispatch();

    const { movies } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
            <Navbar />

            <div style={{
                paddingTop: '60px',
                alignContent: 'center'
            }}>
                <main
                    style={{
                        display: 'flex',
                        gap: '4px',
                        flexWrap: 'wrap',
                    }}
                >
                    {
                        movies?.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    }
                </main>
            </div>
        </>
    )
}

export default Home;