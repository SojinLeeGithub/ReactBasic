import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function PathMove() {

    // - a 요소로 경로 이동을 하게 되면 브라우저가 새로운 요청을 보냄
    // - 현재 페이지의 상태가 유지되지 않는다.

    // <Link> : 
    // - 현재 웹 애플리케이션 내에서 URL을 변경할 수 있도록 하는 컴포넌트
    // - <Link> 컴포넌트는 새로운 요청을 보내지 않는다.
    // - 외부 사이트로 이동하고자 할 땐 a 요소 사용해야 함
    // - 컴포넌트 클릭 시 다른 작업을 같이 수행한다면 해당 작업이 정상적으로 완료되지 않을 수 있다.
    // - 특정 작업 결과에 따라 다른 경로로 이동하고 싶을 때 <Link> 컴포넌트를 사용할 수 없다.
    const onClick = () => {
        // for (let index = 0; index < 100000; index++){
        //     console.log(index + '실행중 ...')
        // }

        const flag = false;
        if (!flag) return;
    }

    // location 객체의 href 값 변경으로 경로를 이동하면 새로운 요청을 보낸다.
    // 현재 웹 애플리케이션의 상태를 유지할 수 없다.
    const onLocationHref = () => {
        window.location.href = 'http://localhost:3000/component';
    }

    // useNavigate() : 
    // - navigator 함수를 반환하는 react-router의 훅 함수이다.
    // - navigator 함수 : 새로운 요청 없이 path 를 변경해주는 함수 
    const navigator = useNavigate();
    const onNavigator = () => {
        // ('/component') => 슬래시 꼭 붙여줘야 한다!!
        navigator('/component')
    }

  return (
    <div>
        <a href="http://localhost:3000/component">앵커</a>
    <br/>
        <Link to ='/component' onClick={onClick}>링크 컴포넌트</Link>
    <br/>
        <button onClick={onLocationHref}>location.href</button>    
    <br/>
        <button onClick={onNavigator}>location.href</button>  
    </div>
    
  )
}
