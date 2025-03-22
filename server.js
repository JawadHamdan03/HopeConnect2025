import express from 'express';
import orphans from './routes/Orphans.js';
import users from './routes/Users.js';
const app= express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.status(200).send('Hope Connect API');
})


 app.use('/api/orphans',orphans)

 app.use("/api/users",users)






app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})



