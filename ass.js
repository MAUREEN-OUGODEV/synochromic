// Asynchronous Function Assignment
// Write an asynchronous function that accepts a message string and a delay 
// time in milliseconds. The function should log the message to the console after 
// the specified delay time.
function message(){
    console.log("How are you doing here?")
}

setTimeout(message,3000)

// You have an array of user IDs and a 
// function getUserData(id) that returns a Promise with user data when given
//  a user ID. Write an asynchronous function that fetches and logs the data for
//   each user ID one by one, in sequence.
function getUserData(id){

}

// You have an asynchronous function performTask() 
// that returns a Promise. The Promise resolves if the task is successful and
//  rejects if there's an error. Write a function that calls performTask() 
// and logs a
//   custom success message if the task is successful, and a custom error
//  message if
//    there's an error.
function performTask() {
    let task=true
    let promise= new Promise(function(resolve,reject){
        if(task){
            resolve("sucessfully completed")
        }
        else{
            reject("The task is not complete")
        }

    })
    console.log({promise})

}
performTask()