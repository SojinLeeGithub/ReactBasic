import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react'
// 이벤트 처리:
// - 웹페이지(컴포넌트)가 사용자와의 상호작용을 받아드려 그것에 대한 처리를 하는 것
// - React에서는 addEventListener 함수를 사용하지 않고 on이벤트 속성을 사용
// - on이벤트 속성을 lowerCamelCase를 따름
// - on이벤트 속성에 콜백 함수를 전달
// - 인라인으로 만듦

export default function EventComponent() {

    const onClickHandler = () => {
        alert('클릭했습니다.')
    };

    // onClick: 클릭이 발생했을 떄
    // onKeyDown: input 요소에서 키보드 입력이 발생했을 때
    // onChange: 요소의 값이 변경될 때 (input 요소에서 값이 변경될 때)
    

    // 각 이벤트의 콜백 함수는 이벤트 객체를 매개변수로 받을 수 있음
    // Typescript에서는 이벤트 객체의 타입을 'Event클래스<이벤트가 발생한 요소>'
    // MouseEvent<HTMLDivElement> = React.MouseEvent<HTMLDivElement>
    const onClick2Handler = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event);

    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log("keydown : " + event.key);

    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("change : " + event.target.value);
    };

    // 콜백 함수의 매개변수가 event 혹은 아무것도 안받는게 형태가 아니라면 
    // 직접적으로 전달하여 사용할 수 없음
    // 그러한 함수를 이벤트에 등록하고자 하면 해당 이벤트 속성에
    //  직접 익명함수 표현식을 사용하여 선언 후 전달
    // 상태함수 저장 공간 = react DOM 변수에 말고 별도로 존재하고 있음
    const onClick3Handler = (str: string) => {
        alert(str);
    }

    // alert에 어떤 값이 오는지 모르기 때문에 매개변수에 employeeNumber: string 넣어줌
     //  직접 익명함수 표현식을 사용하여 선언 후 전달
    const onShowEmployeeNumber = (employeeNumber: string) => {
        alert(employeeNumber);
    }

    let count = 0;
    const onIncrease = () => {
        count++;
        console.log(count);
    }
  return (
   <>
   {/* onClickHandler = 전달, onClickHandler() = 호출 */}
   <button onClick={onClickHandler}>Click!</button>
   <div onClick={onClick2Handler}>Click mouse Event!</div>
   <input onKeyDown={onKeyDownHandler} onChange={onChangeHandler} />
   <button onClick={() => onClick3Handler}>Parameter Click</button>
   
   { employees.map((item, index) => (
    <div key={index}>
        <h1>{item.name}</h1>
        {/* 사번을 호출해야 하는데 사용할 수 없으므로 표현식으로 선언하여 사용하였음  () => onShowEmployeeNumber(item.employeeNumber)*/}
        <button onClick={() => onShowEmployeeNumber(item.employeeNumber)}>사번확인</button>
    </div>
   ))}
    <h1>{count}</h1>
    <button onClick={onIncrease}>+</button>
   </>
  )
}

const employees = [
    {
    name: '홍길동',
    employeeNumber: '202401'
},
{
    name: '김철수',
    employeeNumber: '202402'
}
]
