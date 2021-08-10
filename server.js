const express = require('express')
const db = require ('./DataBase/db');
const bodyParser = require('body-parser');
const cors = require ('cors');
const path = require('path');

const port = 5000
const app = express()

app.use(cors());
/*-----------use the middleware of body-parser---------------*/
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/* ---------------------------------------
SERVE STATIC FILES IN SERVER
-------------------------------------------*/
app.use(express.static (path.join(__dirname,'public')));

app.get('/', function (req, res) {
    // res.json({ message: "Hello from Express!" });
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });


/*---------------------------------------------------

/*-----------------setup the server --------------------------------*/

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
});


