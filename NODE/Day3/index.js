import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const POST=process.env.PORT||4000




const value=express();
value.use(cors());
value.use(express.json());

value.listen(POST,()=>{
    console.log(`server is running http://localhost:${POST}`);
})


// What is a server?

// A server is a program (or computer) that listens for requests and sends responses.

// When you open a website, your browser (client) sends a request
// The server receives it, processes it, and sends back data (HTML, JSON, etc.)



// What is CORS?

// CORS = Cross-Origin Resource Sharing

// It is a security rule in browsers.

// 👉 It controls:

// Which websites are allowed to talk to your server



// What is json() in Express?

// express.json() is middleware that lets your server read JSON data from requests.