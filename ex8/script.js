/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task 
        (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var addButton = document.getElementById("add-button");

addButton.addEventListener('click', function(){
    var ul = document.getElementById("todo-list");
    var inputText = document.getElementById("description");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputText.value));
    ul.appendChild(li);
    modifyItem();
})

function modifyItem () {
    var allListItems = document.querySelectorAll("li");

    for (let i = 0; i < allListItems.length; i++) {

        allListItems[i].addEventListener('click', function(){
            this.style.textDecoration =  "line-through";
        })

        var bttn = document.createElement("button");
        bttn.innerText = "Delete";
        bttn.addEventListener('click', function(){
            this.parentNode.parentNode.removeChild(this.parentNode)
        })

        if (allListItems[i].lastChild.nodeType !== Node.ELEMENT_NODE) {
            allListItems[i].appendChild(bttn);
        }
    }
}


