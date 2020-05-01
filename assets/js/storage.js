const CACHE_KEY = "mode";
const RECENT_KEY = "recent";

function checkForStorage() {
		return typeof(Storage) !== "undefined"
}


function array_move(arr, old_index, new_index) {
//source https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};


function putRecent(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(RECENT_KEY) === null) {
           historyData = [];
       } else {
           historyData = JSON.parse(localStorage.getItem(RECENT_KEY));
       }
    
    i = 0;
    for(let row in historyData) {
      if(historyData[row].id_blog == data.id_blog){
        console.log(array_move(historyData,i,0));
        localStorage.setItem(RECENT_KEY, JSON.stringify(historyData));
        return;
      }
      i++;
    }

    historyData.unshift(data);
    if (historyData.length > 3) {
           historyData.pop();
    }

    localStorage.setItem(RECENT_KEY, JSON.stringify(historyData));


  }
}

function showHistory() {
   if (checkForStorage()) {
       return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
   } else {
       return [];
   }
}

function renderHistory() {
   const historyData = showHistory();

  if(historyData[0] == undefined){
    var recent = document.getElementById('recent-post');
    recent.parentNode.removeChild(recent);
  } else {
    var header = document.createElement("header");
    var h2     = document.createElement("h2");

    h2.innerText = 'Terakhir Dilihat'; 

    var DOMRecentPost  = document.getElementById("recent-post");
    var DOMHeader      = DOMRecentPost.appendChild(header);
    DOMHeader.appendChild(h2);
    for(let row in historyData) {
        var div   = document.createElement("div");
        var div2   = document.createElement("div");
        var img    = document.createElement("img");
        var a      = document.createElement("a");
        div.className = 'recent';
        div2.className = 'recentImg';

        img.src = 'assets/upload/' + historyData[row].gambar;
        a.href = 'blog.php?id_blog=' + historyData[row].id_blog;
        a.setAttribute('onclick','saveRecent('+historyData[row].id_blog+',"'+ historyData[row].judul+'","'+historyData[row].gambar+'");');
        a.innerHTML = historyData[row].judul;

        var DOMRecent    = DOMRecentPost.appendChild(div);
        var DOMRecentImg = DOMRecent.appendChild(div2);
        DOMRecentImg.appendChild(img);
        DOMRecent.appendChild(a);

    }
    

    

    


  }
}


function getMode() {
   if (checkForStorage()) {
       if (localStorage.getItem(CACHE_KEY) != null) {
          mode = JSON.parse(localStorage.getItem(CACHE_KEY));
           if(mode =='dark') {
              document.getElementById('jumbotron').classList.add("jumbotronDark");
              document.getElementById('main').classList.add("mainDark");
              var articles = document.querySelectorAll('article');
              for (let article of articles) {
                article.classList.add("darkMode");
              }
              document.getElementById('dark').checked = true;   
           } else if(mode == 'rgb') {
              document.getElementById('jumbotron').classList.add("jumbotronRGB");
              document.getElementById('main').classList.add("mainRGB");
              var articles = document.querySelectorAll('article');
              for (let article of articles) {
                article.classList.add("darkMode");
              }
              document.getElementById('rgb').checked = true;   
           }   
       } 
   }
}

getMode();
renderHistory();
