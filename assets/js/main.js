const radios = document.querySelectorAll(".mode");

function clearClass() {
    document.getElementById('jumbotron').classList.remove("jumbotronDark");
    document.getElementById('jumbotron').classList.remove("jumbotronRGB");
    document.getElementById('footer').classList.remove("footerDark");
    document.getElementById('main').classList.remove("mainDark");
    document.getElementById('main').classList.remove("mainRGB");
    var articles = document.querySelectorAll('article');
    for (let article of articles) {
      article.classList.remove("darkMode");
    }
}

function saveRecent(id_blog,judul,gambar) {
    const history = {
      id_blog : id_blog,
      judul   : judul,
      gambar  : gambar
    }

    putRecent(history);
}

function menu() {
  var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


for (let radio of radios) {
  radio.onclick = function() {
    if(radio.value == 'light'){
      clearClass();
      localStorage.removeItem('mode');
    } else if(radio.value == 'dark'){
      clearClass();
      document.getElementById('jumbotron').classList.add("jumbotronDark");
      document.getElementById('footer').classList.add("footerDark");
      document.getElementById('main').classList.add("mainDark");
      var articles = document.querySelectorAll('article');
      for (let article of articles) {
        article.classList.add("darkMode");
      }
      localStorage.setItem('mode', JSON.stringify('dark'));
    } else if(radio.value == 'rgb'){
      clearClass();
      document.getElementById('jumbotron').classList.add("jumbotronRGB");
      document.getElementById('footer').classList.add("footerDark");
      document.getElementById('main').classList.add("mainRGB");
      var articles = document.querySelectorAll('article');
      for (let article of articles) {
        article.classList.add("darkMode");
      }
      localStorage.setItem('mode', JSON.stringify('rgb'));
    }
  }
}

