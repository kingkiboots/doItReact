import React from 'react'
import App from '../App'

const Const = () => {

    const num1 = 1;
    const num2 = num1 * 3;
    
    const str1 = '문자';
    const str2 = str1 + '추가';
    console.log(`str2 => ${str2}`);

    const arr3 = [];
    // 무결성 내장 함수
    const arr4 = arr3.concat([1,2]);
    console.log(`arr4 => ${arr4}`);
    const arr5 = [...arr4, 2,3];
    console.log(`arr5 => ${arr5}`)
    // slice(시작 인덱스, 끝 인덱스) 0이상, n미만
    const arr6 = arr5.slice(0,1);
    console.log(`arr6 => ${arr6}`)
    const [first, ...arr7] = arr5;
    console.log(`first => ${first}, arr7 =>${arr7}`)

    const obj3 = {name: '김기현', age: 20};
    // 무결성 내장함수로는 이렇게 변경한다.
    const objValue = {name: '김기련', age: obj3.age};
    console.log(`objValue => ${JSON.stringify(objValue)}`);
    const obj4 = {...obj3, name: '네이마르'};
    console.log(`obj4 => ${JSON.stringify(obj4)}`);

    const {age, ...obj5} = obj4;
    console.log(`age => ${age}, obj5 => ${JSON.stringify(obj5)}`)

    return <App />
}


export default Const;