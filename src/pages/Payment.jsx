import React from 'react';
import { Box,Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Payment(){
    const Navigate = useNavigate();
    function nextpage()
    {
      Navigate('/donation')
    }
    return(
    <Box sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: "normal",
        backgroundImage: 'url("https://img.freepik.com/free-photo/donate-sign-charity-campaign_53876-127165.jpg?w=1060&t=st=1701027021~exp=1701027621~hmac=fed506c179375e2d3731afd4014de18dfbe116109f02209ad62b8629a5860b5f")', // Replace with the path to your background image
        backgroundSize: 'cover', // Adjust to your preference
        backgroundPosition: 'center', // Adjust to your preference
        height: '100vh', // Adjust to your preference}}>
    }}>
        <h1>PAYMENT</h1>
        <TextField required id="Username" label="Name" variant="outlined"sx={{height:70,width:300}}/><br/>
        <TextField id="email" label="Email" variant="outlined" sx={{height:70,width:300}}/><br/>
        <TextField id="card number"  label="card number " variant="outlined"sx={{height:70,width:300}}/><br/>
        <TextField id="cvv" type="password" label="cvv " variant="outlined"sx={{height:70,width:300}}/><br/>
        <TextField id="upi id " type="password" label="upi id" variant="outlined"sx={{height:70,width:300}}/><br/>
        <TextField id="country" label="country" variant="outlined"sx={{height:70,width:300}}/><br/>
        <Button onClick={nextpage} sx={{backgroundColor:"blue",color:"white"}}>PAY
        </Button>
        <div>
        <p className="mb-5">
        “We know you have a lot of choices when it comes to donating, and we are so grateful that you chose to donate to our cause. .......!!!"
        </p>
        <p className="mb-5">
        "I have to admit I am overjoyed by your recent generosity. Thank you for your donation!!!"
        </p>
        {/* <img
        src="https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-12887.jpg?w=740&t=st=1701026454~exp=1701027054~hmac=2b8fd0b8093075a5864aeaf46efbf04e5c84935d0b72a4f8fc95483cc84b67f7"
        alt="Description for Image 1"
        className="mb-5"
      /> */}
      <img
        src="https://wiredimpact.com/wp-content/uploads/2017/02/one-drop.jpg.webp"
        alt="Description for Image 1"
        className="mb-5"
      />
      </div>
    </Box>
    )
}
