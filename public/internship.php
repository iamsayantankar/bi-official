<!DOCTYPE html>
<html lang="en">

<head>


    <!-- meta tag start-->
    <meta charset="UTF-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta name="viewport" content="width=1024">
    <title>The Bengal Studio</title>


    <meta http-equiv="content-language" content="en">
    <meta name="keywords"
        content="make application, india, best software, gamming software, app devloper, website builder, IT Services And IT Consulting,">
    <meta name="author" content="Sayantan Kar">
    <meta name="publisher" content="The Bengal Studio">
    <meta name="copyright" content="The Bengal Studio">
    <meta name="description"
        content="The Bengal Studio Is A Software Development Company Specializing In App Development For The Society Which Is Available In Play Store.">
    <meta name="page-topic" content="Media">
    <meta name="page-type" content="Software">
    <meta name="audience" content="Everyone">
    <meta name="robots" content="index, follow">

    <meta property="og:title" content="The Bengal Studio - IT Services And IT Consulting" />
    <meta property="og:description"
        content="The Bengal Studio Is A Software Development Company Specializing In App Development For The Society Which Is Available In Play Store. With A Team Of Highly Skilled Developers And Engineers, We Also Deliver Custom Software Solutions Tailored To Meet Our Client's Unique Needs. From Web And Mobile Applications To Enterprise Software, We Combine Innovation, Quality, And Reliability To Empower Businesses With Advanced Digital Solutions—Partner With Us To Transform Your Ideas Into Robust Software Solutions That Drive Growth And Success." />
    <meta property="og:image" content="https://thebengalstudio.com/images/banner.jpg" />

 <meta property="og:title" content="TBS - IT Services And IT Consulting" />
    <meta property="og:description" content="Internship offer" />


    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="icon" href="./images/logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">
    <script src="./js/main.js"></script>
    <script src="https://kit.fontawesome.com/a3dbd9053e.js" crofssorigin="anonymous"></script>
</head>

<body>

<?php

$servername = "localhost";
$username = "sayantan_demoo";
$password = "sayantan_demoo";
$dbname = "sayantan_demoo";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection


 $ipaddress = getenv("REMOTE_ADDR") ;
 $milliseconds = floor(microtime(true) * 1000);
$ipaddress = strval($ipaddress);
$milliseconds = strval($milliseconds);


//  $sql = "INSERT INTO `demo` (`ip`, `times`) VALUES ( ".$ipaddress.", ".$milliseconds.")";
 $sql = "INSERT INTO `demo` (`times`) VALUES ( ".$milliseconds.")";

$conn->query($sql);
// if ($conn->query($sql) === TRUE) {
//   echo "Success...<br>";
// } 
$conn->close();
 echo "Success...";
?>
<script>
    window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLScU_jm-pOgq4fWvsIe-49LpnwuegPEHSoifV5qphTvWVwF0Ig/viewform?usp=sf_link');
</script>
<?php
 echo "Success...";
$link = "https://docs.google.com/forms/d/e/1FAIpQLScU_jm-pOgq4fWvsIe-49LpnwuegPEHSoifV5qphTvWVwF0Ig/viewform?usp=sf_link";
// Redirect browser
header("Location:".$link);

exit;

 
exit;
?>

</body>

</html>
