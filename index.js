const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());


app.get("/",(req,res)=>{

    res.send("Hello, world!");

})

app.get("/user", (req, res) => {

    // Fetching data from a remote API using axios

    return res.status(200).json({

        message: "Welcome to the API!",
        data:{

            name: "John Doe",
            age: 30,
            email: "john.doe@example.com"
        },
        error:null,

    })
})

app.listen(4000,()=>{

    console.log("listening on 4000")
})
