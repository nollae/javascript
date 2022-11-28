// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }
// class Dog{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('같이 놀자!');
//     }
// }

// 공통된 템플릿
class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹다!');
    }
    sleep(){
        console.log('잔다!');
    }
}

class Tiger extends Animal{}
const tiger = new Tiger('노랑이');

class Dog extends Animal{
    constructor(color, ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('같이 놀자!');
    }
    // 오버라이딩 overridng
    eat(){
        console.log('강아지가 먹는다');
    }
    sleep(){
        super.sleep();
        console.log('강아지가 잠을 잔다');
    }
}
const dog = new Dog('흰둥이', '공주');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();


