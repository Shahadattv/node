// main 5 step for node express initialize
// main 5 step for node express initialize== 01
const express = require('express');

var cors = require('cors'); /*access all port  */
//main 5 step for node express initialize== 02
const app = express();
app.use(cors());/*access all port  */
app.use(express.json());/*convert string to json || this is use data post method  */
//main 5 step for node express initialize== 03
const port = 5000;

//main 5 step for node express initialize== 04
app.get('/', (req, res) => {
    res.send('Hello World! shahadat')
});
// =======================================================
// =======================================================

// {01 make API}
const users=[
    {id:0,name:'shahadat', email:"shahadatvip9459@gemail.com"},
    {id:1,name:'shahid', email:"shahadatvip9459@gemail.com"},
    {id:2,name:'sogir', email:"shahadatvip9459@gemail.com"},
    {id:3,name:'munna', email:"shahadatvip9459@gemail.com"},
    {id:4,name:'arapat', email:"shahadatvip9459@gemail.com"},
]

// ___________________________GET METHOD__________________________________
app.get('/users', (req, res) => {
    res.send(users)   /* res.send(user) mins send in IU clint side */
});

// =======================================================


// {02 find dynamic API}
app.get('/users/:id', (req, res) => {
    const id= req.params.id;
    const user = users[id]; /*  find on users array */ 
    res.send(user)      /* res.send(user) mins send in IU clint side */
});
// =======================================================

// {03 Access search query API}
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search)); /*  filter from users array */
        res.send(searchResult)
    }
    else{
        res.send(users)   /* res.send(user) mins send in IU clint side */
    }
    
});

// =======================================================

// ________________________________POST METHOD_____________________________
// post will be from clint side 
app.post('/users',(req, res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser));
    // or
    res.json(newUser);



})






// =======================================================
//main 5 step for node express initialize== 05  alltime declayr on last  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
