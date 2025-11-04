<?php

define('DB_SERVER','localhost');
define('DB_USER','root');
define('DB_PASS' ,'');
define('DB_NAME', 'portfolio');
$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
// Check connection
if (mysqli_connect_errno())
{
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $dscrption = $_POST['message'];
    $query = mysqli_query($con, "insert into tblcontactus(fullname,email,message) value('$name','$email','$dscrption')");
    echo "<script>alert('Your information succesfully submitted');</script>";
    echo "<script>window.location.href ='form.php'</script>";
} 
?>
