import React from 'react'
import App from '../App';

const Class = () =>{
    class Shape{
        static create(x,y){ return new Shape(x,y)};
        // 생성자에다가 this.name = 'shape'한거랑 똑같다.
        // 말인 즉슨 얘는 클래스 변수가 아닌 인스턴스 변수이다.
        name = 'shape';
        constructor(x,y){
            this.move(x,y)
        }
        move(x,y){
            // 변수가 선언되어 있지 않더라도 이렇게 this.x = 22 이렇게 초기화를 하면 알아서 생긴다. 캡슐화로서는 별로인듯 하다.
            // 인스턴스 변수 생성
            this.x = x;
            this.y = y;
        }
        area(){
            return this.x + this.y;
        }
    }

    const s = Shape.create(2,3);
    console.log(`area => ${s.area()}`);
    s.name = 'name';
    console.log(`name => ${s.name}`);

    const sh = Shape.create(3,5);
    console.log(`area => ${sh.area()}`);
    console.log(`name => ${sh.name}`);

    class Circle extends Shape{
        constructor(x,y,radius){
            super(x,y)
            this.radius = radius
        }
        area = () => {
            if(this.radius === 0) return super.area();
            return this.radius * this.radius;
        }
    }

    var c = new Circle(0,0,10);
    console.log(`c.area => ${c.area()}`);

    return <App />
}

export default Class;