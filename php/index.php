<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
//obteniedo el metodo http
$method = $_SERVER['REQUEST_METHOD'];

// if($method == "GET") {

//     $api = new Api();
//     $vector = $api->getUsers();
//     $json = json_encode($vector);
//     echo $json; 
   
// }

// if($method == "POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);

    $tipoConsulta = $data['tipoConsulta'];

    //Product
    $name = $data['name'];
    $description = $data['description'];
    $selectedImage = $data['selectedImage'];
    $type = $data['type'];

    //User
    $email = $data['email'];
    $password = $data['password'];
    $nameU = $data['nameU'];
    $address = $data['address'];
    $phone = $data['phone'];
    $gratis = $data['gratis'];
    $tier1 = $data['tier1'];
    $tier2 = $data['tier2'];

    $api = new Api();

    echo $email;
    if ($tipoConsulta == 1) {
        $json = $api->postUser($email, $password, $nameU, $address, $phone, $gratis, $tier1, $tier2);
    } else if ($tipoConsulta == 2) {
        $json = $api->postProduct($name, $description, $image, $type, $tipoConsulta);
    }
    echo $json;
//}

