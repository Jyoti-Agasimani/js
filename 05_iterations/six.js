// const coding = ["js", "ruby", "java", "py", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Non-Fiction', Publish: 1981, edition: 1989},
    {title: 'Book Tne', genre: 'Fiction', Publish: 1990, edition: 1998},
    {title: 'Book Three', genre: 'History', Publish: 2000, edition: 2009},
    {title: 'Book Four', genre: 'Science', Publish: 2010, edition: 2020},
    {title: 'Book Five', genre: 'History', Publish: 2011, edition: 2021},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.Publish >=  1995 && bk.genre === "History"
})
console.log(userBooks);
