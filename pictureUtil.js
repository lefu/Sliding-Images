function binaryToDataUrl(data){
	return 'data:image/jpeg;base64,' + encodeBase64(data);
}

function showPicture(id, v){
	if(v != null){
		alert(id);
		//document.get
		//var pictures = document.getElementById("pictures");
		//alert(pictures);
		//pictures.style.visibility = "hidden";
		alert("clicked");
	}
};
