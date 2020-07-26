var list = document.getElementById('list');
function addTodo() {
    var todo_item = document.getElementById('todo-item');
    // Create li item
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    list.appendChild(li);
    // Create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);
    // Create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit item");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    
    
    todo_item.value=""

    
    
}
function deleteItem(e) {
    e.parentNode.remove();
    
}
function deleteAll() {

    list.innerHTML=""
    
}
function editItem(e) {

  
    var edit = prompt("Change you value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=edit

    
}
