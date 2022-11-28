// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 
const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));         // true // 클래스 이름을 사용하면 static 함수이다.
console.log(Array.isArray({}));             // false

// 특정한 아이템의 위치를 찾을 떄 
console.log(fruits.indexOf('🍎'));          // 1   

// 배열안에 특정한 아이템이 있는지 체크 
console.log(fruits.includes('🍎'));         // true

// 추가 - 제일 뒤에 추가하기
let length = fruits.push('🍓');             // 배열 자체를 수정 (업데이트)
console.log(fruits);                        // [ '🍌', '🍎', '🍇', '🍑', '🍓' ]
console.log(length);                        // 5 : push는 길이 자체를 리턴해줘서 해당 값이 나올 수 있음 
// 추가 - 제일 앞에 추가하기    
length = fruits.unshift('🍇');               // 배열 자체를 수정 (업데이트)
console.log(fruits);                        // [ '🍇', '🍌', '🍎', '🍇', '🍑', '🍓' ]
console.log(length);                        // 6

// 제거 - 제일 뒤에 제거하기
let lastItem = fruits.pop();                // 배열 자체를 수정 (업데이트)
console.log(fruits);                        // [ '🍇', '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem);                      // 🍓 : 마지막 아이템을 리턴해줘서 해당 값이 나올 수 있음 
// 제거 - 제일 앞에 제거하기 
lastItem = fruits.shift();                  // 배열 자체를 수정 (업데이트)
console.log(fruits);                        // [ '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem);                      // 🍇 : 마지막 아이템을 리턴해줘서 해당 값이 나올 수 있음 

// 중간에 추가 또는 삭제 
const deleted = fruits.splice(1, 1);        // 배열 자체를 수정 (업데이트)                 
console.log(fruits);                        // [ '🍌', '🍇', '🍑' ]
console.log(deleted);                       // [ '🍎' ] : 삭제된 값을 배열로 리턴해줘서 해당 값이 나올 수 있음 
fruits.splice(1, 0, '🍎');                  // 삭제하지 않고 배열에 값을 추가하기  
console.log(fruits);                        // [ '🍌', '🍎', '🍇', '🍑' ] : 배열 자체를 수정 (업데이트)   

console.clear();

// slice : 잘라진 새로운 배열을 만듦 -> 기존의 배열은 그대로 유지 된 상태이다.
let newArr = fruits.slice(0, 2);
console.log(newArr);                // [ '🍌', '🍎' ]
console.log(fruits);                // [ '🍌', '🍎', '🍇', '🍑' ]
newArr = fruits.slice(-1);          // [ '🍑' ]
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);                  // [ 1, 2, 3 ]
console.log(arr2);                  // [ 4, 5, 6 ]
console.log(arr3);                  // [ 1, 2, 3, 4, 5, 6 ]

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);                  // [ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6]]
];
console.log(arr);                   // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
// flat : 기본적으로 1단계까지만 배열을 펴준다. 
console.log(arr.flat());            // [ 1, 2, 3, 4, [ 5, 6 ] ]
// 원하는 단계를 넣어주면, 그 단계 만큼 flat을 해준다.
console.log(arr.flat(2));           // [ 1, 2, 3, 4, 5, 6 ]

// 특정한 값으로 배열을 채우기 
// fill : 배열 자체를 수정 
arr = arr.flat(2);
arr.fill(0);
console.log(arr);                   // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr);                   // [ 0, 's', 's', 0, 0, 0 ]

arr.fill('a',1)
console.log(arr);                   // [ 0, 'a', 'a', 'a', 'a', 'a' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);                  // 0,a,a,a,a,a
text = arr.join(' | ');             
console.log(text);                  // 0 | a | a | a | a | a
