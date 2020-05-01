<?php 
require_once 'Database.php';

Class Blog extends Database {
	public function __construct(){
		parent::__construct();
	}

	public function get_all() {
		return $this->run("SELECT * FROM blog");
	}

	public function get_blog_page($page = 1) {
		$perPage = 3; //per halaman
		$start   = ($page > 1) ? ($page * $perPage) - $perPage : 0;
		
		return $this->run("SELECT * FROM blog LIMIT $start,$perPage");	
	}

	public function get_blog_slider() {
		return $this->run("SELECT * FROM blog LIMIT 0,4");		
	}

	public function get_page() {
		$perPage = 3;
		$total = mysqli_num_rows($this->run("SELECT * FROM blog"));
		return ceil($total/$perPage);
	}

	public function get_single_blog($id_blog) {
		return $this->run("SELECT * FROM blog WHERE id_blog='$id_blog'");	
	}

	public function get_where($x,$y) {
		$x = $this->escape($x);
		$y = $this->escape($y);

		return $this->run("SELECT * FROM blog WHERE $x='$y'");
	}

	

}
 ?>