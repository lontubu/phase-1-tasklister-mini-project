document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector("form")
  form.addEventListener('submit',(e)=> {
    e.preventDefault()
    list(e.target["new-task-description"].value)
    form.reset()
})

}); 

function list(todo){
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click",(e)=>{ 
    e.target.parentNode.remove()
    
})
li.textContent='${todo}'
document.querySelector("ul").appendChild(li)

li.appendChild(btn)
btn.textContent="X"
  
}