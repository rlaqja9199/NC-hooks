const useNotification = (title, options)=>{
    if(!("Notification" in window)){
      return;
    }
    const fireNotif = ()=>{
      if(Notification.permission !== "granted"){
        Notification.requestPermission().then(permission => {
          if(permission === "granted"){
            new Notification(title, options);
          }else {
            return;
          }
        });
      }else {
        new Notification(title, options);
      }
    };
    return fireNotif;
}


// const triggerNotif = useNotification("Hello", {body:"Nice to meet you",requireInteraction:true})
// <button onClick={triggerNotif}>button</button>

//notification API를 이용한 Hook
//notification 관련 정보는 아래 링크에서 확인 가능
//https://developer.mozilla.org/ko/docs/Web/API/notification

//변수 선언 후 이벤트에 변수를 넣어사용한다
//useNotification(타이틀명, {프로퍼티명:값}) 
