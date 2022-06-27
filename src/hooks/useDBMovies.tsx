import React, { createContext, useCallback, useContext } from 'react';
import {moviesApi} from '@apis/moviesApi'

interface IDBMoviesContext {
    getLastestMovies: () =>Promise<any>
    getPopularMovies: () =>Promise<any>
    getTopRatedMovies: () =>Promise<any>
    getMovieDetails: (id:number) =>Promise<any>
}


const DBMoviesContext = createContext<IDBMoviesContext>({} as IDBMoviesContext)

export const DBMoviesProvider: React.FC =({children}) =>{

    const getLastestMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/lastest?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.data
    }, []);

    const getPopularMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.data
    }, []);
    const getTopRatedMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.data
    }, []);

    const getMovieDetails = useCallback(async (id:number) =>{
        const response = await moviesApi.get(`/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.data
    }, []);

    return (
        <DBMoviesContext.Provider
        value={{
            getLastestMovies,
            getPopularMovies,
            getMovieDetails,
            getTopRatedMovies
        }}>
            {children}
        </DBMoviesContext.Provider>
    );
};

export default function useDBMovies(){
    const context = useContext(DBMoviesContext);
    return context
}

