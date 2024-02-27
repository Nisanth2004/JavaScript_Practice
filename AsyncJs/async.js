// Async,await

const jokeObject={
    id:'shdjhdj',
    joke:'dsdjsdhbv'

}
const postDadJoke=async(jokeObj)=>{
    const response=await fetch("https://httpbin.org/post",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(jokeObj)
    })
    const responseData=await response.json()
    console.log(responseData.headers);
}
postDadJoke(jokeObject);