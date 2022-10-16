import { useState } from "react";

export const useTabs = (initialTab, allTabs)=>{
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

// const content =[
//     {
//         tab: "Section 1",
//         content: "I'm the content of the Section 1"
//     },
//     {
//         tab: "Section 2",
//         content: "I'm the content of the Section 2"
//     }
// ]

// function App() {
//     const {currentItem, changeItem} = useTabs(0, content);
//     return (
//       <div className="App">
//         {content.map((section, index)=>(
//           <button onClick={()=> changeItem(index)}>{section.tab}</button>
//         ))}
//         <div>{currentItem.content}</div>
//       </div>
//     );
// }

// const {currentItem, changeItem} = useTabs(0, content);
// 변수 선언후 useTabs(초기인덱스,배열)

// 함수안에 changeItem(인덱스)으로 이벤트 실행시 변경될 탭을 지정할 수 있다.
// currentItem을 이용해 지정된 탭의 내용을 뿌려줄 수 있다.
