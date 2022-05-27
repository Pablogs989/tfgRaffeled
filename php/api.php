<?php
 
class Api{

public function getProducts(){
     $vector = array();
     $conexion = new Conexion();
     $db = $conexion->getConexion();
     $sql = "SELECT * FROM product";
     $consulta = $db->prepare($sql);
     $consulta->execute();
     while($fila = $consulta->fetch()) {
        $vector[] = array(
          "id" => $fila['id'],
          "name" => $fila['name'],
          "description" => $fila['description'],
          "image" => $fila['image'],
          "type" =>  $fila['type']); }
     
          return $vector;
}

public function getUsers(){
  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "SELECT * FROM users";
  $consulta = $db->prepare($sql);
  $consulta->execute();
  while($fila = $consulta->fetch()) {
     $vector[] = array(
       "id" => $fila['id'],
       "email" => $fila['email'],
       "password" => $fila['password'],
       "nameU" => $fila['nameU'],
       "phone" => $fila['phone'],
       "address" => $fila['address'],
       "gratis" => $fila['gratis'],
       "tier1" => $fila['tier1'],
       "tier2" => $fila['tier2'],
      ); }
  
       return $vector;
}


public function postProduct($name, $description, $image, $type, $tipoConsulta){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
    $sql = "INSERT INTO 'product'('name', 'description', 'image', 'type') VALUES (':name',':description',':image',':type')";
    $consulta = $db->prepare($sql); 
    $consulta->bindParam(':name', $name);
    $consulta->bindParam(':description', $description);
    $consulta->bindParam(':image', $image);
    $consulta->bindParam(':type', $type);
    $consulta->execute();
  

  return '{"msg":"Product created"}';
}


public function postUser($email, $password){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
    $sql = "INSERT INTO 'users'('email', 'password', 'nameU', 'phone', 'address', 'gratis', 'tier1', 'tier2') VALUES (':email',':password', ':nameU', ':phone', ':address', ':gratis', ':tier1', ':tier2')";
    $consulta = $db->prepare($sql); 
    $consulta->bindParam(':email', $email);
    $consulta->bindParam(':password', $password);
    $consulta->bindParam(':nameU', $nameU);
    $consulta->bindParam(':phone', $phone);
    $consulta->bindParam(':address', $address);
    $consulta->bindParam(':gratis', $gratis);
    $consulta->bindParam(':tier1', $tier1);
    $consulta->bindParam(':tier2', $tier2);

    $consulta->execute();
  

  return '{"msg":"User created"}';
}

}
