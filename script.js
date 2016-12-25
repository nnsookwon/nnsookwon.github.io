function printText(){
	let message_space = document.getElementById("message_space");
	
	let text_node = document.createTextNode("Yes");
	message_space.appendChild(text_node);
	message_space.appendChild(document.createElement("br"));
}

//window.onload = init;
