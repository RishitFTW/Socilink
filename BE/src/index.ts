import express from 'express';
import AuthRouter from "./routes/cruds";
import router from "./routes/auth";

const app=express();

app.use('api/v1/auth',AuthRouter)
app.use('api/v1', router)

app.listen(3000,()=>{
    console.log(`Server is running at PORT 3000`)
});