
import mysql2 from 'mysql2'
import express from 'express'
const connection=mysql2.createConnection({
    host:"localhost",//"127.0,0.1"
    database:"five_db",
    user:"root",
    password:"root54321"
});
const app=express();
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`SERVER : http//localhost:${PORT}`)
    connection.connect((err)=>{
        if(err) throw err;
        console.log("DATABASE Connected");
    })
})
app.use("/all",(req,res)=>{
const sql_querry=`SELECT * FROM five_db.employees`
connection.query(sql_querry,(err,result)=>{
    if(err) throw err;
    res.send(result);
});
});