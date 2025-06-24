const express= require('express');
const connectDB=require('./config/database')
const app= express();
const User = require('./model/user');

app.use(express.json());
app.post('/signup', async(req, res) => {
    
    const user = new User(req.body);
    try{
     await user.save()
    res.send("User created successfully");
    }
    catch(err){
        console.error("Error creating user:", err);
        res.status(500).send("Internal Server Error");
    }
   
});



connectDB().then(()=>{
    console.log("Database connected successfully");
    
}).catch((err)=>{
    console.error("Database connection failed", err);
}  )

app.listen(1234,()=>{
    console.log("Server is running on port 1234");
})