import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryString() {

    // useSerchParam() :
    // - url에서 Query String 값을 받을 수 있도록 하는 react-router의 hook
    const [queryParam] = useSearchParams();
    const name = queryParam.get('name');
    const age = queryParam.get('age');


  return (
    <div>
        NAME : {name} / AGE : {age} 
    </div>
  )
}
