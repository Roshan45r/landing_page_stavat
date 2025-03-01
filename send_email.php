<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (use specific domains in production)
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this path is correct

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data["name"]);
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
$body = htmlspecialchars($data["body"]);

// Initialize PHPMailer
$mail = new PHPMailer(true);
$response = array();

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'thevasudev31@gmail.com'; // Replace with your email
    $mail->Password   = 'hdvr ueqe yteu gjbf'; // Replace with your password or App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email Content
    $mail->setFrom('thevasudev31@gmail.com', 'Vasudev'); 
    $mail->addAddress('roshan.5.ro.45@gmail.com', 'Roshan'); 
    $mail->Subject = "Number : ".$name ."   Email : ". $email;
    $mail->Body    = $body;

    $mail->send();
    $response["status"] = "success";
    $response["message"] = "Email sent successfully!";
} catch (Exception $e) {
    $response["status"] = "error";
    $response["message"] = "Email failed: " . $mail->ErrorInfo;
}

// Return JSON response
echo json_encode($response);
?>