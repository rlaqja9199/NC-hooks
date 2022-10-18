import { useRef } from 'react';

export const useFullscreen = (callback)=>{
  const element = useRef();
  const runCb = isFull => {
    if(callback && typeof callback === "function"){
      callback(isFull)
    }
  }
  const triggerFull = ()=>{
    if(element.current){
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if(element.current.mozRequestFullscreen){
        element.current.mozRequestFullScreen();
      }else if(element.current.webkitRequestFullscreen){
        element.current.webkitRequestFullscreen();
      }else if(element.current.msRequestFullscreen){
        element.current.msRequestFullscreen(); 
      }
      runCb(true);
    }
  }
  const exitFull = ()=>{
    document.exitFullscreen();
    if(element.current){
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if(element.current.mozRequestFullscreen){
        element.current.mozRequestFullScreen();
      }else if(element.current.webkitRequestFullscreen){
        element.current.webkitRequestFullscreen();
      }else if(element.current.msRequestFullscreen){
        element.current.msRequestFullscreen(); 
      }
      runCb(false);
    }
  }
  return {element, triggerFull, exitFull};
}



//const onFullS = (isFull) => console.log(isFull ? "We are full" : "We are small");
//const {element, triggerFull, exitFull} = useFullscreen(onFullS);

//풀스크린을 할 대상에 ref={element}를 넣어주고 온클릭이벤트로 풀스크린 버튼에 triggerFull을, 종료버튼에 exitFull을 넣어준다