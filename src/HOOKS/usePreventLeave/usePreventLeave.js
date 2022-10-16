
export const usePreventLeave = ()=>{
    const listener = (event)=>{
      event.preventDefault();
      event.returnValue = "";
    }
    const enablePrevent = ()=>window.addEventListener("beforeunload", listener)
    const disablePrevent = ()=>
    window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  }

//const {enablePrevent, disablePrevent} = usePreventLeave();
//<button onClick={enablePrevent}>protect</button>
//<button onClick={disablePrevent}>unprotect</button>

//const {enablePrevent, disablePrevent} = usePreventLeave() 선언 후 onClick이벤트에 같은 변수명으로 넣어준다

//const {enablePrevent:변수명1, disablePrevent:변수명2} = usePreventLeave();
//<button onClick={변수명1}>protect</button>
//<button onClick={변수명2}>unprotect</button>
//위와 같이 변수명을 변경하여 사용가능