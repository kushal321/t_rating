var ourlist = document.getElementById("our-list");

var button = document.getElementById("btnid");

var headline = document.getElementById("headline");

var listItem = document.getElementById("our-list").getElementsByTagName("li");

//for(i=0; i < listItem.length; i++){
//	listItem[i].addEventListener("click",activateItem);
//}

ourlist.addEventListener("click",activateItem)

function activateItem(e){
	if(e.target.nodeName == "LI"){
	headline.innerHTML = e.target.innerHTML;
	for(i=0; i < e.target.parentNode.children.length; i++)
	{
		e.target.parentNode.children.length[i].classList.remove("active");
	}
	e.target.classList.add("active"); 
}}

button.addEventListener("click",createNewItem);

function createNewItem() {
	ourlist.innerHTML += "<li>Something new</li><hr/>";
}