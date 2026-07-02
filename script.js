const create = document.querySelector(".create")
const form = document.querySelector("form")
const end = document.querySelector(".close")
const task = document.querySelector(".task")
const main = document.querySelector("main")  

//  Make Array to store the object values
const taskArr = []

let updateIndex = null

form.addEventListener("submit",(event)=>{
      // Prevent the reload of form 
    event.preventDefault()

 let title = event.target[0].value
 let description = event.target[1].value
 let priority = event.target[2].value
 let add = event.target[3].value
 
  if(description.trim() === "" || 
 title.trim() === "" ||
  priority.trim() === "" 
){
    alert("Please fill all the fields!")
    return;
 }



let card = () =>{
    taskArr.forEach((element) => {
       task.innerHTML = "" 
    
    task.innerHTML += `<div class="card">
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <p>${element.priority}</p>
      <div class="btn">
      <button onclick="updateTask('${element.title}')" class="edit">Edit</button>
      <button onclick="del(this)"class="delete">Delete</button>
      </div>
    </div>`
})
};
// Uses Event Deligation to get value of input fields
let details = {
    title,
    description,
    priority,
}

if(updateIndex !== null){
    taskArr[updateIndex] = details
    updateIndex = null;
}
else{
// Push object into Array already declared
 taskArr.push(details)
 }
 card()
 form.reset()
 form.style.display = "none"
 console.log(details);
})  

function del (btn){
btn.parentElement.parentElement.remove()
}
task.addEventListener("click",(e)=>{
  let cli = e.target;
})


end.addEventListener("click",()=>{
    form.style.display = "none"
})


create.addEventListener("click",()=>{
    form.style.display = "flex"
})


const updateTask = (name) =>{
     form.style.display = "flex"
    let task = taskArr.find((element)=> element.title === name);
    updateIndex = taskArr.findIndex((element)=> element.title === name)
    form[0].value = task.title
    form[1].value = task.description
    form[2].value = task.priority
    
    

}