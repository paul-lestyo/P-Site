<!DOCTYPE html>
<html>
    <head>
       <title>Kota Bandung</title>
       <link rel="stylesheet" href="assets/css/style.css">
       <link rel="stylesheet" href="assets/css/css3.css">
       <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
       <header>
            <div class="home jumbotron" id="jumbotron">
               <h1>P-Site</h1>
               <br><br>
           </div>
           <nav id="nav" class="nav">
               <ul>
                   <li id="iconNav"><a href="#openMenu" onclick="menu()">&#9776;</a></li> 
                   <li><a href="index.php">Home</a></li>
                   <li><a href="blogs.php">Blog</a></li>
                   <li class="right"> <input type="radio" class="mode" name="mode" id="rgb" value="rgb"><label for="rgb">RGB</label></li>
                   <li class="right"> <input type="radio" class="mode" name="mode" id="light" value="light" checked><label for="light">Light</label></li>
                   <li class="right"> <input type="radio" class="mode" name="mode" id="dark" value="dark"><label for="dark">Dark</label></li>
               </ul>
           </nav>
        </header>
        <main id="main">
      <div id="mainContent">
            <div id="content">
             <article id="article" class="card article">
                 <h2 class="center">Blog</h2>
              <div id="main-slider">
              <div id="slider">
                <div><img src="assets/upload/day1Prakerin.jpeg">
                    <h2><a onclick="saveRecent(1,'Kesan Pertama Prakerin di Dexeos','day1Prakerin.jpeg');" 
                        href="blog-1.php">Kesan Pertama Prakerin di Dexeos</a></h2>
                </div>
                <div><img src="assets/upload/django.jpg">
                    <h2><a onclick="saveRecent(2,'Hari Ketujuhbelas Prakerin di Duxeos Software House','django.jpg');" 
                        href="blog-2.php">Hari Ketujuhbelas Prakerin di Duxeos Software House</a></h2>
                </div>
                <div><img src="assets/upload/mogok.jpg">
                    <h2><a onclick="saveRecent(3,'Hari Kedelapanbelas Prakerin di Duxeos Software House','mogok.jpg');" 
                        href="blog-3.php">Hari Kedelapanbelas Prakerin di Duxeos Software House</a></h2>
                </div>
                <div><img src="assets/upload/winner.jpg">
                    <h2><a onclick="saveRecent(4,'Hari Keduapuluh Empat Prakerin di Duxeos Software House','winner.jpg');" 
                        href="blog-4.php">Hari Keduapuluh Empat Prakerin di Duxeos Software House</a></h2>
                </div>
                <div><img src="assets/upload/day1Prakerin.jpeg">
                    <h2><a onclick="saveRecent(1,'Kesan Pertama Prakerin di Dexeos','day1Prakerin.jpeg');" 
                        href="blog-5.php">Kesan Pertama Prakerin di Dexeos</a></h2>
                </div>

              </div>
            </div>
             </article>
         </div>
      </div>

    <aside>
      <article class="card" id="aside">
          <div id="recent-post">
            </div>
            <div class="profile">
                <header>
                    <h2>Tentang</h2>
                    <figure>
                        <img src="assets/image/profile.jpg">
                    </figure>
                </header>
                <section>
                    <table>
                        <tr>
                            <th>Nama</th>
                            <td>Paulus Lestyo A</td>
                        </tr>
                        <tr>
                            <th>Tempat Lahir</th>
                            <td>Surakarta</td>
                        </tr>
                        <tr>
                            <th>Tgl Lahir</th>
                            <td>9 Maret 2002</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>lestyo24@gmail.com</td>
                        </tr>
                            <tr>
                            <th>No HP</th>
                            <td>+6281239466830</td>
                        </tr>
                    </table>
                </section>
            </div>
        </article>
  </aside>
<div style="clear: both;"></div>
   </main>
        <footer id="footer">
            <p>Belajar Dasar Pemrograman Web &#169; 2019, Dicoding Academy</p>
        </footer>
        <script type="text/javascript" src="assets/js/data.js"></script>
        <script type="text/javascript" src="assets/js/myAjax.js"></script>
        <script type="text/javascript" src="assets/js/storage.js"></script>
        <script type="text/javascript" src="assets/js/main.js"></script>
        <script type="text/javascript" src="assets/js/slider.js"></script>
    </body>
</html>