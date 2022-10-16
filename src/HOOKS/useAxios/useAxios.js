import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios)=>{
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = ()=>{
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(()=>{
        axiosInstance(opts).then(data=>{
            setState({
                ...state,
                loading:false,
                data
            });
        }).catch(error=>{
            setState({...state, loading:false, error})
        })
    },[trigger])
    if(!opts.url){
        return;
    }
    return {...state, refetch};
}

export default useAxios;


// const { loading, data, error, refetch } = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});

//위와같이 변수 선언 후 useAxios({url:주소})로 데이터를 받아온다