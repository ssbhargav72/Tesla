const express = require("express");
const path = require("path");
const app = express();
const fs=require('fs');
const bodyparser = require("body-parser", { UserNewUrlparser: true });
 // Tesla will be the database name // changed to ip adress from localhost because of updatee
const port = 40;




// usage of static and views folder
app.use('/views',express.static('views'))
app.use('/static',express.static('static'))



// End pointsss
app.get('/', (req, res)=>{
    //const params = { }
    // res.status(200).sendFile(path.join("home.html");
    res.sendFile(path.join(__dirname ,'./model.html'));
})

app.get('/vehicles', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname ,'./vehicles.html'));
})

app.get('/energy', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname ,'./energy.html'));
})
app.get('/charging', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname ,'./charging.html'));
})
app.get('/order-mod3', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname,'./order-mod3.html'));
})
app.get('/order-mods', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname,'./order-mods.html'));
})
app.get('/order-modx', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname,'./order-modx.html'));
})
app.get('/order-mody', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname ,'./order-mody.html'));
})





//To Start The Server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});



