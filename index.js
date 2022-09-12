const express=require('express');
const app= express();
const moment = require('moment');
const port=4000;
app.set("view engine","ejs");

app.get("*", (req, res) => {
 if (
  moment().day() >= 1 &&
  moment().hours() >= 9 &&
  moment().day() <= 5 &&
  moment().hours() <= 17
   ) {
    res.render("home")
   } else {
    
       res.status(400);
       res.send(
         "<h1>The web application is only available in working time (Monday to Friday,  from 9 to 17) </h1>"
      );}
  })
    app.listen(port,(err)=>err?console.log(err)
    :console.log(`Server fired at http://localhost:${port}`));


