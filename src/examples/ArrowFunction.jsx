import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import App from '../App';

const ArrowFunction = () => {
    function add (first, second){
        return first + second;
    }
    var add1 = function(first, second){
        return first + second;
    }
    // 화살표 함수 선언
    // {} 함수형
    var arrowAdd1 = (first, second) => {
        return first + second;
    }
    // () 반환형
    var arrowAdd2 = (first, second) => (first + second);
    // () 반환형인데, object를 반환하는 것
    var arrowAdd3 = (first, second) => ({
        add: first + second,
        multiply: first * second
    });

    const first = 3;
    const second = 5;

    console.log(`types => `,typeof add, typeof add1, typeof arrowAdd1, typeof arrowAdd2, typeof arrowAdd3);
    
    console.log(`arrowAdd1 => ${arrowAdd1(first, second)}`);
    console.log(`arrowAdd2 => ${arrowAdd2(first, second)}`);

    const result = arrowAdd3(first, second);
    console.log(`arrowAdd3.add => ${result.add}`);
    console.log(`arrowAdd3.multiply => ${result.multiply}`);
    
    // 함수를 반환하는 함수를 간결하게 짤 수도 있다.
    function addNumber(num){
        return function(value){
            return num + value;
        };
    }
    var addNum = addNumber(2);
    console.log(`addNum => ${addNum(4)}`);

    var arrowAddNum = (num) => (value) => num + value;
    console.log(`arrowAddNum => ${arrowAddNum(3)(10)}`);

    class MyClass{
        value = 10;
        constructor(){
            this.addThis2 = function(first, second){
                return this.value + first + second;
            }.bind(this);
            this.addThis3 = (first, second) => this.value + first + second;
        }
    }

    var mc = new MyClass();
    console.log(`mc.addThis2(2,3) => ${mc.addThis2(2,3)}`);
    console.log(`mc.addThis3(2,3) => ${mc.addThis3(2,3)}`);

    return <App />
}

export default ArrowFunction;