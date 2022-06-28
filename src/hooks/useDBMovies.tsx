import React, { createContext, useCallback, useContext } from 'react';
import {moviesApi} from '@apis/moviesApi'
import config from '../../config.js'

interface IDBMoviesContext {
    getLastestMovies: () =>Promise<any>
    getPopularMovies: () =>Promise<any>
    getTopRatedMovies: () =>Promise<any>
}


const DBMoviesContext = createContext<IDBMoviesContext>({} as IDBMoviesContext)

export const DBMoviesProvider: React.FC =({children}) =>{
    
    const getLastestMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/latest?`, {params: {api_key: config.REACT_APP_API_KEY}})
        return response.data
    }, []);

    const getPopularMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/popular?`, {params: {api_key: config.REACT_APP_API_KEY}})
        return response.data
    }, []);

    const getTopRatedMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/top_rated?`, {params: {api_key: config.REACT_APP_API_KEY}})
        return response.data
    }, []);

    return (
        <DBMoviesContext.Provider
        value={{
            getLastestMovies,
            getPopularMovies,
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

