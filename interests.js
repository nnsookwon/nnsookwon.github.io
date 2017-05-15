/*** Pug Slideshow from Reddit ***/
var img_urls = [""];
var click = 0;
var lastId="";

function loadImages(times){
  if (times === 0)
    return;
    $.getJSON(
      "http://www.reddit.com/r/pug.json?limit=10&after=t3_"+lastId,
      (data) =>{
        var children = data.data.children;
        $.each(children, (i, post) => {
            let url = post.data.url;
            url = convertImgUrl(url);
            if (url !== "")
              img_urls.push(url);
         lastId = post.data.id;
         console.log(lastId)
         })
         loadImages(times-1);
    });
}

function removeInvalidImg(){
  let src = document.getElementById("img_pug").src;
  img_urls.splice(click,1);
  setImage();
}

function convertImgUrl(url){
  if (url.includes("imgur")){
    if (!url.endsWith(".jpg"))  
     url+=".jpg";
    if (!url.substring(url.indexOf("//")).startsWith("//i."))
      url = url.replace("//", "//i.");
    return url;
  } else if (url.endsWith(".jpg")) {
    return url;
  } else {
    return "";
  }      
}

function setImage(){  
  if (click == img_urls.length)
    click = 0;
	let img_space = document.getElementById("img_pug");
	img_space.src = convertImgUrl(img_urls[click]);
  click++;
}

loadImages(25)
setInterval(setImage,2500);


