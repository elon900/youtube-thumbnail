var getImages = document.getElementById("get-images");
	getImages.onclick = function() {
		// get all the link first
		var query = document.getElementById('thumbnail-url').value;
		if(query.includes('v=') == true){
			// if link has v= in the link
			var linkRemoved = query.split('v=');
			// if link has channel name also then
			var id = linkRemoved[1].split('&')[0];
			// id variable has the id of url
		}else{
			// if link has no v= in the link then
			// like that https://youtu.be/47eXVRJKdkU
			var linkRemoved = query.split('/');
			var id = linkRemoved[3];
		}
		if(id != undefined || id != null){
			for(var i = 0; i<= 0; i++){
				document.getElementsByTagName('img')[i].src = 'https://img.youtube.com/vi/'+id+'/maxresdefault.jpg';
			}
			for(var i = 1; i<= 1; i++){
				document.getElementsByTagName('img')[i].src = 'https://img.youtube.com/vi/'+id+'/sddefault.jpg';
			}
			for(var i = 2; i<= 2; i++){
				document.getElementsByTagName('img')[i].src = 'https://img.youtube.com/vi/'+id+'/hqdefault.jpg';
			}
			for(var i = 3; i<= 3; i++){
				document.getElementsByTagName('img')[i].src = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
			}
			for(var i = 4; i<= 4; i++){
				document.getElementsByTagName('img')[i].src = 'https://img.youtube.com/vi/'+id+'/default.jpg';
			}
			document.getElementById('output').style.display = 'block';
			// here we will save the Id for further use
			document.getElementById('output').caption = id;
		}else{
			alert('Invalid Link');
		}
	}
function preview(v){
	// first get the saved id
	var id = document.getElementById('output').caption;
	var a = document.createElement('a');
	a.target = '_blank';
	if(v == 1){
		a.href = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
	}else if(v == 2){
		a.href = 'https://img.youtube.com/vi/'+id+'/hqdefault.jpg';
	}else if(v == 5){
		a.href = 'https://img.youtube.com/vi/'+id+'/default.jpg';
	}else if(v == 3){
		a.href = 'https://img.youtube.com/vi/'+id+'/sddefault.jpg';
	}else if(v == 4){
		a.href = 'https://img.youtube.com/vi/'+id+'/maxresdefault.jpg';
	}else{
		a.href = "https://webtoolastra.com";
	}
	a.click();
}
async function download(v){
	var id = document.getElementById('output').caption;
	var maxbtn = document.getElementById("maxbtn");
	var hdimg = document.getElementById("hdimg");
	var url;
	if(v == 1){
		url = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
	}else if(v == 2){
		url = 'https://img.youtube.com/vi/'+id+'/hqdefault.jpg';
	}else if(v == 5){
		url = 'https://img.youtube.com/vi/'+id+'/default.jpg';
	}else if(v == 3){
		url= 'https://img.youtube.com/vi/'+id+'/sddefault.jpg';
	}else if(v == 4){
		url = 'https://img.youtube.com/vi/'+id+'/maxresdefault.jpg';
	}else{
		url = "https://webtoolastra.com";
	} 
	fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const imageUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = imageUrl;
            a.download = 'youtube-thumbnail.jpg';
	a.click(); 
        }); 

   }


var input = document.getElementById("thumbnail-url");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("get-images").click();
  }
});
const clearText = () => {
	const name = document.querySelector("#thumbnail-url");
	name.value = "";
	name.focus();
}
