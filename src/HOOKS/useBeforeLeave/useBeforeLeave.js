import { useEffect } from 'react';

export const useBeforeLeave = (onBefore)=>{
  useEffect(()=>{
    document.addEventListener("mouseleave", handle)
    return ()=> document.removeEventListener("mouseleave", handle)
  },[])
  if(typeof onBefore !=="function"){
    return; 
  }
  const handle = (event)=>{
    //마우스가 클라이언트Y가 0보다 작아질때 useBeforeLeave의 매개변수 onBefore을 실행
    const {clientY} = event;
    if(clientY <= 0){
      onBefore();
    }
  };
}

//const useBeforeLeaveFunction = ()=> console.log("leaving");
//useBeforeLeave(useBeforeLeaveFunction);

//함수 생성 후 useBeforeLeave(함수명)으로 useBeforeLeave를 실행