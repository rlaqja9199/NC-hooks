export const useConfirm = (message="", onConfirm, onCancel) => {
    if(onConfirm && typeof onConfirm !== "function"){
      return;
    }
    if(onCancel && typeof onCancel !=="function"){
      return;
    }
    const confirmAction = ()=> {
      if(window.confirm(message)){
        onConfirm();
      }else {
        try{
          onCancel();
        } catch(error){
          return;
        }
      }
    }
    return confirmAction;
  }


//const trueFunction = ()=>{console.log("확인입니다.")}
//const falseFuntion = ()=>{console.log("취소입니다.)}
//const confirmClick = useConfirm("질문",trueFunction,falseFunction)
// 변수에 useConfirm 사용 후 첫번째 매개변수로 질문, 두번째 매개변수로 true일 시 함수, 세번째 매개변수로 false일 시 함수를 넣어준다.