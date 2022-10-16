import { useState } from "react"

export const useInput = (initialValue, validator)=>{
    const [value, setValue] = useState(initialValue);
    const onChange = (event)=>{
        const {
            target: {value}
        } = event;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return { value, onChange };
};


// const maxLen = value => !value.includes("@");
// const name = useInput("Mr.", maxLen);

//변수 선언 후 useInput(초깃값, 조건함수)