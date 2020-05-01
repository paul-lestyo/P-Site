<?php 
if($_SERVER['REQUEST_METHOD'] != 'POST' && !isset($_POST['page'])) {
	header('Location:blogs.php');
}
require_once 'core/init.php';

$blog = new Blog();

foreach ($blog->get_blog_page($_POST['page']) as $row) {
	$data[] = array('id_blog' => $row['id_blog'], 'judul' => $row['judul'], 'text' => $row['text'],'gambar'=> $row['gambar']); 
}
header("Content-type: application/json;charset=utf-8");
echo json_encode($data);

 ?>