import { useState, useEffect } from "react";

const WelcomeMessage = () => {

const [message, setMessage] = useState()


    useEffect(() => {
        let currentTime=new Date();
        let hours=currentTime.getHours();
        let newMessage= "";

        if(hours < 12){
            newMessage="Goedemorgen"
        }else if (hours < 18){
            newMessage="goedemiddag"
        }else{
            newMessage="goedenacht"
        }

       setMessage(newMessage) 

      }, []);
   
   
    return (
<h1>{message}</h1>
    );
}
 
export default WelcomeMessage;