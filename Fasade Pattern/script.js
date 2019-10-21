// Idea behind the Facade Pattern is to make it easy for your code to change in the future. The idea of this is that you create a facade between your complex code and your actual business logic code that you're writting.

// In general, the idea of the facade pattern is to take some form of API that's either difficult to use or ugly or not nice and create a nice API out of it. 

// Most importantly, it makes refactoring way easier because we only have to change our code in one place instead of having to change it everywhere inside of all of our code, which is easy to mess up and easy to miss.

// ============================================================================================

// =======================
// without Facade Pattern
// =======================

// function getUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users', {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//     }).then(res => res.json());
// }
  
// function getUserPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//     }).then(res => res.json());
// }
  
// getUsers().then(users => {
//     users.forEach(user => {
//         getUserPosts(user.id).then(posts => {
//             console.log(user.name);
//             console.log(posts.length);
//         })
//     })
// })

// ====================
// with Facade Pattern
// ====================

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users');
}
  
function getUserPosts(userId) {
    return getFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        userId: userId
    });
}
  
getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name);
            console.log(posts.length);
        })
    })
})

// function getFetch(url, params = {}) {
//     const queryStr = Object.entries(params).map(param => {
//         return `${param[0] = param[1]}`;
//     }).join('&');

//     return fetch(`${url}?${queryStr}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//     }).then(res => res.json());
// }

// if using AXIOS instead of fetch
function getFetch(url, params = {}) {
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => res.data);
}