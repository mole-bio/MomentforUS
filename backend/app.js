const http = require('http');

const app = express();

app.get('/', (req,res)=> {
    res.send("hello express");

})

app.listen(3065, ()=> {
    console.log("실행중")
})