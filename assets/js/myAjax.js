function myAjax(page) {
  // console.log(data_blog);
  var perPage = 3;
  var start = (page > 1) ? (page * perPage) - perPage : 0;
  data = data_blog.slice(start, start+perPage);

  	var list = document.getElementById("content");
	  while (list.hasChildNodes()) {
	    list.removeChild(list.firstChild);
	  }

  	for(var row in data){
  		var article = document.createElement("article");
  		var h2 		= document.createElement("h2");
  		var divImg  = document.createElement("div");
  		var img 	= document.createElement("img");
  		var p 		= document.createElement("p");
  		var div 	= document.createElement("div");
  		var a  		= document.createElement("a");

  		var mode = '';
  		if(localStorage.getItem('mode') != null) {
  			mode = 'dark';
  		}

  		article.className = 'card ' + mode + 'Mode';
  		divImg.className = 'featured-image';
  		div.className = 'readmore';


  		h2.innerText = data[row].judul;
  		img.src = 'assets/upload/' + data[row].gambar;
  		p.innerHTML = data[row].text.substr(0, 150)+'...';
  		a.href = 'blog-' + data[row].id_blog + '.php';
      a.setAttribute('onclick','saveRecent('+data[row].id_blog+',"'+ data[row].judul+'","'+data[row].gambar+'");');
  		a.innerHTML = 'Read More >>';

  		var content 	= document.getElementById("content");
  		var DOMArticle  = content.appendChild(article);
  		DOMArticle.appendChild(h2);
  		DOMArticle.appendChild(divImg);
  		divImg.appendChild(img);
  		DOMArticle.appendChild(p);
  		DOMArticle.appendChild(div);
  		div.appendChild(a);
  	}
 setTimeout(function(){ location.href = "#main" }, 500);
}