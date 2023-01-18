import React from "react";
import App from "../App";

const SpreadOperator = () => {
    // 나열형 자료를 추출하거나 연결할 때 사용한다.
    const array1 = ['1', '2', '3'];
    const array2 = ['4','5'];
    // ... 이게 바로 전개 연산자이다. 두 배열을 전재 연산자로 합쳤다.
    const combined = [...array1, ...array2];
    // const [first, second, three = 'empty', ...others] = combined;
    // 이름은 상관 없이 그냥 ...var 하면 남은거를 추출하는 구낭
    // three = 'empty', 는 없을 때 디폴트 값
    // 배열은 이렇게 순서대로 뽑는다.
    const [firt, second, threee = 'empty', ...others] = array2;
    // others는 추출하고 남은 요소를 그냥 배열로 만든 것.
    console.log(`other => ${others}`)
    console.log(`three => ${threee}`)

    // func(...args){ var [first, ...others] = args};

    
    // -------------------------------------------

    var objectOne = {one: 1, two: 2, other: 0};
    var objectTwo = {three: 3, four: 4, other: -1};
    var combinedTwo = {
        one: objectOne.one,
        two: objectOne.two,
        three: objectTwo.three,
        four: objectTwo.four,
    }

    console.log(`combinedTwo => ${JSON.stringify(combinedTwo)}`);
    // assign({})는 결과로 반환한 자료형이다. 나머지 인자를 병합할 객체. 앞에서부터 덮어씌워서 other가 -1임
    var combinedThree = Object.assign({}, objectOne, objectTwo);
    console.log(`combinedThree => ${JSON.stringify(combinedThree)}`);

    combinedThree = Object.assign({}, objectTwo, objectOne);
    console.log(`combinedThree2 => ${JSON.stringify(combinedThree)}`);

    var othersTwo = Object.assign({}, combinedThree);
    console.log(`othersTwo => ${JSON.stringify(othersTwo)}`);

    delete othersTwo.other;
    console.log(`othersTwo2 => ${JSON.stringify(othersTwo)}`);
    
    // assign({})랑 똑같다.
    combinedTwo = {
        ...objectOne,
        ...objectTwo,
    }
    console.log(`combinedTwo2 => ${JSON.stringify(combinedTwo)}`);

    // 프로토타입에서는  키 값으로 이렇게 뽑을 수가 있다.
    var {two, ...others2} = combinedTwo;
    console.log(`other => ${two}`);
    console.log(`others2 => ${JSON.stringify(others2)}`);
    

    return(
        <App />
    );
}

export default SpreadOperator;