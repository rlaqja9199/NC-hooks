import { useEffect, useRef } from 'react';

export const useFadeIn = (duration = 1, delay = 0)=>{
    //매개변수에 듀레이션과 딜레이를 정할 수 있다
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  })
  if(typeof duration !== "number" || typeof delay !== "number"){
    return
  }
  return {ref: element, style: {opacity:0}};
}


//const fadeInH1 = useFadeIn();

//변수를 지정하고 값에 useFadeIn()을 넣는다.
//사용하고자 하는 요소에 전개연산자를 활용하여 변수를 넣어준다.
//<h1 {...fadeInH1}>안녕하세요.</h1>