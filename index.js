// 1. Fetch user value.
// 2. Creating newelement with user input
// 3. Displaying it to user
// 4. Adding styles to newelement
// 5. Add eventlistener to new element 

const addbutton = document.getElementById("addbtn");
const inputbox = document.getElementById("inputbox");
const content = document.getElementById("output");

function settasks(){
    localStorage.setItem("tasks" , JSON.stringify(taskarr));
};

function getTasks(){
    let task = localStorage.getItem("tasks");
    if (!tasks){
        return;
    }

    task = JSON.parse(tasks);
    console.log(tasks);
}

// getTasks();

function createTask(userinput){
    //creating newelement with value
    const newelement = document.createElement("div");
    newelement.innerText = userinput;
    newelement.setAttribute("class" , "task");


    //adding eventlistener
    newelement.addEventListener("click" , function(){
        //toggle
        this.classList.toggle("completed");
    });
    newelement.addEventListener("dblclick" , function(){
        this.remove();
    });

    //append to container
    content.append(newelement);
}


function addtask(){
    //taking user input
    const userinput = inputbox.value;

    if (userinput.length === 0) {      
        return alert("enter some task");
     }
     

     taskarr.push(userinput);
     settasks();  
     createTask(userinput);
}

const taskarr = [];

//creating function to button
addbutton.addEventListener("click" , addtask)


//ways to storing our content in browser

// 1.cookies
// 2.local storage
// 3.session storage