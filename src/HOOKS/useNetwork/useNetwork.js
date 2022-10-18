import { useEffect, useState } from 'react';

export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = ()=>{
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(()=>{
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return ()=>{
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  },[])
  return status;
}

//const onLine = useNetwork();
//변수를 선언하고 값에 useNetwork()를 사용한다.

// if(online){
//     console.log("we just went online")
//   }else{
//     console.log("we are offline")
//   }
//useNetwork()의 매개변수에 useNetwork(handleNetworkChange)와같이 다른함수를 사용하여 
//온라인일 경우 함수를 실행할 수 있다.