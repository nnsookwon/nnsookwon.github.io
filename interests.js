/*** Pug Slideshow from Reddit ***/
let pugImgUrls = ["https://i.imgur.com/VUJnLw7.jpg"];
const danceImgCnt = 3;
let clickPug = 0;
let clickDance = 2;

function loadImages() {
  return fetch("https://www.reddit.com/r/pug.json?limit=100")
    .then( res => res.json() )
    .then( json => {
      const children = json.data.children;
      for (let i = 0; i < children.length; i++) {
        const url = children[i].data.url;
        if (url !== "")
          pugImgUrls.push(url);
      }
    })
}

function removeInvalidImg(){
  let src = document.getElementById("img_pug").src;
  pugImgUrls.splice(clickPug,1);
  setPugImage();
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

function setPugImage(){  
  if (clickPug == pugImgUrls.length)
    clickPug = 0;
	let imgSpace = document.getElementById("img_pug");
	imgSpace.src = convertImgUrl(pugImgUrls[clickPug]);
  //console.log(pugImgUrls[clickPug])
  clickPug++;
}

function setDanceImage() {
  if (clickDance > danceImgCnt)
    clickDance = 1;
  let imgSpace = document.getElementById("img_dance");
  imgSpace.src = "images/dance-" + clickDance + ".jpg";
  clickDance++;
}

loadImages();
setInterval(setPugImage,2500);
setInterval(setDanceImage, 5000);


