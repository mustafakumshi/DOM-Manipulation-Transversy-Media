const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// Form Submit Event
form.addEventListener("submit", addItem);
// Delete Event
itemList.addEventListener("click", removeItem);
// Filter Event
filter.addEventListener("keyup", filterItems);


// Add Item Function
function addItem(e){
e.preventDefault();

// Get Input Value
const newItem = document.getElementById("item").value;

// Create new li Element 
const li = document.createElement("li");

// Add class
li.className = "list-group-item";

// Add Text Node with Input Value
li.appendChild(document.createTextNode(newItem));

// Create Delete Button without delete functionality
const deleteBtn = document.createElement("button"); 

// Add Classes to delete button 
deleteBtn.className = "btn btn-danger btn-sm float-right delete";

// Append Text Node
deleteBtn.append(document.createTextNode("X"));

// Add delete button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);
}


// Remove Item Function
function removeItem(e){
    if(e.target.classList.contains("delete")){
      if(confirm("Are you Sure?")){
       const li = e.target.parentElement;
       itemList.removeChild(li);
      }   
    }
}

// Filter Function
function filterItems (e){
// convert text to lowercase
const text = e.target.value.toLowerCase();
// Get List
const items = itemList.getElementsByTagName("li");

// Convert to an Array
Array.from(items).forEach(function(item){
const itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = "block";
} else {
    item.style.display = "none";  
}
});

}