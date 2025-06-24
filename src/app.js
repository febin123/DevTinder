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

//Find user by email-GET /user/:email
app.get('/user',async(req,res)=>{
    const userEmail=req.body.email;
    try{
        console.log("Fetching user with email:", userEmail);
        const user=await User.findOne({email:userEmail})
        if(!user){
            console.log("User not found");
            return res.status(404).send("User not found");
        }
        res.send(user);
    }
    catch(err){
        res.status(400).send("Internal Server Error");
      
    }
    
})
//Feed API-GET /feed get all users from the database
app.get('/feed', async(req, res) => {

})


connectDB().then(()=>{
    console.log("Database connected successfully");
    
}).catch((err)=>{
    console.error("Database connection failed", err);
}  )

app.listen(1234,()=>{
    console.log("Server is running on port 1234");
})