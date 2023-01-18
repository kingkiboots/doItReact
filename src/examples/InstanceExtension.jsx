import React from 'react'

const InstanceExtension = () => {
    var x = 1;
    var y = 2;
    var obj = {x,y}
    var randomKeyString = 'other';
    console.log(`obj.x => ${obj.x}`);
// 연산결과로 하려면 이렇게 []씌워서 한다.
    var combined = {
        ['one'+randomKeyString]: 'some value',
    }
    console.log(`combined.randomKeyString => ${combined.oneother}`);

    var obj2 = {
        ...combined,
        x,
        methodA(){console.log('method A')},
        methodB(){console.log('method B')},
        // 둘 중에 뭐로 하나 결과는 같다.
        // ["lol"]: "haha",
        lol: "haha",
    }
    console.log(`obj2.x => ${obj2.x}`);
    obj2.methodA();
    console.log(`obj2 => ${JSON.stringify(obj2)}`)


}

export default InstanceExtension;