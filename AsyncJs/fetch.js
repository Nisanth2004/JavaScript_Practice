// Asynchronous javascript
/* 
const users=fetch("https://jsonplaceholder.typicode.com/comments")
.then(response=>{
          return response.json()// readabe string
})
.then(users=>{
    console.log(users)
})
console.log(users); */


const myUsers={
    userList:[]
}
// Async/Await
const users= async ()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/comments")
    const userData= await response.json()
    anotherFunction(userData)
   
    return userData

}

const anotherFunction=(data)=>{
   
    myUsers.userList=data
    console.log(myUsers)
    return data

}
users();
console.log(myUsers)