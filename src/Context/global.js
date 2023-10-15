import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const baseURL = "http://localhost:3000";

const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_TOP_AIRING_ANIME = "GET_TOP_AIRING_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_RECENT_ANIME = "GET_RECENT_ANIME";

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
        case GET_POPULAR_ANIME:
            return {...state, popularAnime : action.payload, loading: false}
        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) => {
    const initialState = {
        popularAnime: [],
        recentAnime: [],
        topAiringAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getPopularAnime = async () => {
        dispatch({type: LOADING});
        const response = await fetch(`${baseURL}/popular`);
        const data = await response.json();
        dispatch({type: GET_POPULAR_ANIME, payload: data});
    }

    useEffect(() => {
        getPopularAnime();
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}