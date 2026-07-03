import { configureStore } from "@reduxjs/toolkit";
import movieReeducer from '../slices/movieslice'

export const store = configureStore({
    reducer : {
        movies : movieReeducer
    }
})