const express=require('express');
const app=express();
const port=3001;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/views/index.html');
})
//app.listen(3001);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});