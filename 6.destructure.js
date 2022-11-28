// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = [ '🍏', '🥝', '🍓', '🍌' ];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const rose = { name: 'rose', age: 26, job: 'singer' }; 
function display({name, age, job}){
    console.log('이름 :', name);
    console.log('나이 :', age);
    console.log('직업 :', job);
}
display(rose);

const { name, age, job: occupation, pet = '행크' } = rose;
console.log(name);
console.log(pet);
console.log(occupation);

// Quiz

const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };
  
  function changeColor({name, styles:{size, color}}) {
    // styles는 변수가 아니기 때문에 접근 불가! 
    console.log(color);
  }
  
  changeColor(prop);


