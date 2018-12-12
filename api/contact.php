<?php  

	$to = "info@kingsnuwaraeliya.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['Firstname'];
    $last_name = $_POST['Lastname'];
    $need = $_POST['need'];
    $subject = $need." - Kings Hotel Contact Form";
    $subject2 = $need." - Kings Hotel Contact Form";
    $message =  "Name: ".$first_name . " " . $last_name."\nEmail: ".$from."\n\n".$_POST['message'];
    $message2 = "Here is a copy of your message\n\nName: ".$first_name . " " . $last_name."\nEmail: ".$from."\n\n" . $_POST['message'];
    

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $success1 = mail($to,$subject,$message,$headers);
    $success2 = mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
     
   
    if($success1 && $success2){
        
        $output = array(
    		'status' => 200 , 
    		'data' => "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.",
    	);
        
    }else{
        
         $output = array(
    		'status' => 500 , 
    		'data' => "Mail sending faild. Please try again.",
    	);
        
    }
 

	echo json_encode($output, JSON_PRETTY_PRINT); 

?>