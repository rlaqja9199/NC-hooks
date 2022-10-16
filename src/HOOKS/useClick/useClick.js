import { useEffect, useRef } from "react";

export const useClick = (onClick)=>{
    const element = useRef();
    useEffect(()=>{
        if(typeof onClick !=="function"){
            return;
        }
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return ()=>{
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        }
    },[])
    return typeof onClick !== "function"? undefined: element;
}

// const hello = useClick(()=>{console.log("say hello")})
// <h1 ref={hello}>Hi</h1>
//변수에 useClick 사용 후 적용할 요소에 ref에 변수명을 적어서 사용