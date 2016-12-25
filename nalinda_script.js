
var images = [];
for (let i = 1; i<=8; i++){
	images.push("img"+i+".jpg");
}
var count = 0;

function setImage(){
	if (count == images.length)
		count = 0;
	let img_space = document.getElementById("big_img");
	img_space.src = images[count];
	count++;
}
setInterval(setImage, 3000);