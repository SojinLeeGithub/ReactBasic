import { count } from 'console';
import React, { useState } from 'react'

// 상태 (state) : 
// - 각각의 컴포넌트가 독립적으로 가지고 있는 데이터 저장공간
// - 상태가 컴포넌트의 렌더링에 영향을 미침
// - 상태가 변경되면 컴포넌트가 리렌더링 됨
// -
export default function StateComponent() {

    // state 선언 방법
    // -useState 훅 함수로 상태를 선언
    // -const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);
    // 리액트에서 변수 선언할 때 그냥 전부 상태변수로 선언하는게 마음 편하다.
    // let count: number = 0;
    const [count, setCount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    // let counts: number[] = [];
    const [counts, setCounts] = useState<number[]>([]);

    const onIncrease = () => {
        //  setCount(count + 1);

        // 상태 변수는 반드시 상태변경함수를 통해 변경해야 리렌더링됨
        // count++;
        // console.log(count);

 
        // 상태 변경 함수를 사용하여 상태를 변경한다 해도 바로 변경되지 않음
        // 함수가 끝나고 렌더링 되는 시점에 적용됨 따라서 마지막 count + 1 값만 적용이 됨
        
        // count 상태 = 0
        // setCount(count + 1);
        // count 상태 = 0
        // setCount(count + 1);
        // count 상태 = 0
        // setCount(count + 1);

        // 콜백 함수 사용하면 즉각 값을 변경할 수 있다.
        // setCount(count => count + 1)
        // 따라서 아래는 6씩 증가


      // 상태변경 함수에 콜백함수를 전달하면 해당 콜백 함수는 누적되어 실행


        // 상태 count = 0
        // argCount : 1
        // console.log('상태 count ' + count)
        // setCount(argCount => {
        //   console.log('argCount: ' + argCount)
        //   return argCount + 1;
        // });        

        // // 상태 count = 0
        // // argCount : 1
        // console.log('상태 count ' + count)
        // setCount(argCount =>  {
        //   console.log('argCount: ' + argCount)
        //   return argCount + 2;
        // });  

        // // 상태 count = 0
        // // argCount : 3
        // console.log('상태 count ' + count)
        // setCount(argCount => {
        //   console.log('argCount: ' + argCount)
        //   return argCount + 1;
        // });    
          

        // 상태 변경하는 작업이 한번에 여러번 실행된다면 임시변수 활용하여 사용할 수 있음
      
      // let tmp = 0;
      // tmp = count;
      // tmp += 1;
      // tmp += 2;
      // tmp += 3;
      // setCount(tmp);

      // 아래 코드는 setTotal에서 기존의 count 값을 사용하기 때문에 
      // 동작이 한단계 전단계로 동작함
      // setCount(count + 1);
      // setTotal(total + count);
      
      // 임시변수를 사용하여 변경 결과 값을 미리 저장하고 사용하면
      // 위의 문제를 해결할 수 있음 
      const newCount = count + 1;
      setCount(newCount);
      setTotal(total + newCount);
      
      };
        


        return (
          <div>
          <h1>count: {count}</h1>
          <h1>total: {total}</h1>
          <button onClick={onIncrease}>+</button>
          </div>
        )
      };
