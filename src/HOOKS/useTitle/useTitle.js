import { useEffect, useState } from "react"

export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = ()=>{
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
}

//const titleUpdater = useTitle("");
//<div onClick={()=>{titleUpdater("타이틀명")}}>click</div> 
//변수에 useTitle()을 사용하여 onClick과 같은 액션시 변수의 매개변수로 변경할 타이틀 명을 넣어주어 사용한다.