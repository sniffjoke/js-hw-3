// let str = 'Hello, world!';
// let startIndex = 7

// const getSubStr = (str, i) => {
//     return str.slice(i)
// }

// console.log(getSubStr(str, startIndex))

// function getLastElements(arr, n) {
//     return arr.slice(-n)
// }
//
// const arr = [1, 2, 3, 4, 5]
//
// console.log(getLastElements(arr, 2))

// function extractPath(url, index) {
//     return url.slice(index+1)
// }

// const strUrl = "https://example.com/blog/article"

// console.log(extractPath(strUrl, 18))

// let numbers = [1, 2, 3, 4, 5];
// function removeElement(arr, index) {
//     arr.splice(index, 1);
//     return arr
// }
// console.log(removeElement(numbers, 2));

// let numbers = [1, 2, 4, 5];

// function insertElement(arr, index, element) {
//     arr.splice(index, 0, element)
//     return arr
// }

// console.log(insertElement(numbers, 2, 3))

// let numbers = [1, 2, 3, 4, 5];
//
// function sumArray(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// return arr.reduce((acc, curr) => {
//      return  acc + curr
// }, 0);
// }
//
// console.log(sumArray(numbers))

// const fruits = ['apple', 'banana', 'cherry']

// const sumStringLengths = (arr) => {
//     return arr.reduce((acc, curr) => {
//         return acc + curr.length
//     }, 0)
// }

// console.log(sumStringLengths(fruits))

// function sumNestedArrays(arr) {
//     return arr.reduce((acc, current) => {
//         return acc + current.reduce((a, b) => a + b);
//     }, 0);
// }
//
// const arrNumbers = [
//     [1, 2],
//     [3, 4, 5],
//     [6, 7, 8, 9],
// ]
//
// console.log(sumNestedArrays(arrNumbers))

// function removeDuplicates(arr) {
//     return arr.reduce((acc, curr) => {
//         if (!acc.includes(curr)) {
//             acc.push(curr)
//         }
//         return acc
//     }, [])
// }
//
// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
//
// console.log(removeDuplicates(numbers))

// function duplicatesArray(arr) {
//     return arr.reduce((acc, curr, index) => {
//         if (arr.indexOf(curr) !== index) {
//             acc.push(curr)
//         }
//         return acc
//     }, []);
// }
//
// const array = [1, 2, 3, 2, 4, 5, 4, 5]
//
// console.log(duplicatesArray(array))

// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
//
// function wordCount(arr) {
//     return arr.reduce((acc, curr) => {
//         return (typeof acc[curr] !== 'undefined')
//             ? { ...acc, [curr]: acc[curr] + 1 }
//             : { ...acc, [curr]: 1 }
//         // acc[curr] = (acc[curr] || 0) + 1;
//         // console.log(acc[curr])
//         // return acc
//     }, {});
// }
//
// console.log(wordCount(words))

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
]

function getPropertyValues(arr, name) {
    return arr.reduce((acc, curr) => {
        acc.push(curr[name])
        return acc
    }, [])
}

console.log(getPropertyValues(people, 'name'))
