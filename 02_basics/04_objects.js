//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Jyoti"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regylarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jyoti",
            lastname: "agasimani"
        }
    }
}

//console.log(regylarUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Jyoti"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "jyoti",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

