import React from 'react'

const DestructuringAssignment = () => {
    var list = [0,1,6,7,8,9];
    var [
        item1,
        item2,
        item3 = -1,
        ...other
    ] = list;
    console.log(`item1: ${item1}, item2: ${item2}, item3: ${item3}, ...other: ${other}`);
    [item2, item1] = [item1, item2];
    console.log(`item1: ${item1}, item2: ${item2}`);

    var obj = {
        key1: 'one',
        key2: 'tow',
        key3: 'three',
        key4: 'four',
        key5: 'five',
    }
    var {
        key1: newKey1,
        key2,
        key3 = "default key3 value",
        ...otherKeys
    } = obj;
    // key1은 없음. 대신 이 값을 newKey1에 할당하였음
    console.log(`newKey1: ${newKey1}, key2: ${key2}, key3: ${key3}, otherKeys: ${JSON.stringify(otherKeys)}`)
}

export default DestructuringAssignment;