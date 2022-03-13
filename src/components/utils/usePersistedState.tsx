import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function usePersistedState<T>(key: string, initialState: any){
    const[state, setState] = useState(() =>{
        const storeValue = localStorage.getItem(key)
        if(storeValue){
            return JSON.parse(storeValue);
        }else{
            return initialState;
        }
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state));

    },[key,state])
    return [state,setState];
}

export default usePersistedState;