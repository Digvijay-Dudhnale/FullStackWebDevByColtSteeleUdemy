let input = prompt("What would you like to do ?") ;
const toDoList = [] ;

while(input !== "quit" && input !== "q"){

    if(input==="add"){
        console.log("*********************")
        console.log("Enter the task")
        let addToDo = prompt("Enter the task.") ;
        toDoList.push(addToDo) ;
        console.log(`"${addToDo}" is Added to List.`) ;
        // input = prompt("What would you like to do ?") ;
        console.log("*********************")
    }
    else if(input==="list"){
        if(toDoList.length===0){
            console.log("Your TO DO list is empty!") ;
            // input = prompt("What would you like to do ?") ;
        }
        else{
            console.log("*********************") ;
            console.log("START") ;
            for(let i=0 ; i<toDoList.length ; i++){
                console.log(`${i} -->> ${toDoList[i]}`) ;
            }
            console.log("END") ;
            console.log("*********************") ;
        }
    } 
    else if(input==="delete"){
        console.log("*********************")
        if(toDoList.length===0){
            console.log("Your TO DO list is empty!") ;
            // input = prompt("What would you like to do ?") ;
        }
        else{
            console.log("Enter the index of task to be deleted.") ;
            let deleteIndex = parseInt(prompt("Enter the index of task to be deleted.")) ;
            
            if(deleteIndex >=0 && deleteIndex <= (toDoList.length-1) && deleteIndex!==NaN){
                console.log(`"${toDoList[deleteIndex]}" is Deleted from List.`) ;
                toDoList.splice(deleteIndex,1) ;
            }
            else{
                console.log("Incorrect index") ;
                // deleteIndex = prompt("Enter correct index of task to be deleted.") ;
            }
        }
        console.log("*********************")
    }
    else{
        console.log("Enter the right command.") ;
    }

    input = prompt("What would you like to do ?") ;
}

console.log("OK , YOU QUIT THE APP.") ;