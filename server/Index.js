const express = require('express');
const app = express();
const mapRoutes = require('express-routes-mapper');
const port = process.env.port || 3000;
const routesConfig = require('./routes/routesConfig');
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file ,a) =>{
      a(null,'images');
    },
    filename: (req , file, a) => {
      a(null,file.originalname);
    }
});
const upload = multer({storage: storage});

app.use(express.static('images'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());


// const usersData = require('./controllers/usersController')
// app.use('/', usersData)

const mappedUsersRoutes = mapRoutes(routesConfig.usersRoutes, '/controllers/');
app.use('/usersRoutes', mappedUsersRoutes);

const mappedPostsRoutes = mapRoutes(routesConfig.postsRoutes, '/controllers/');
app.use('/postsRoutes', mappedPostsRoutes);

app.post('/postsRoutes/posts/photo',upload.single('Photo'));
app.listen(port, function () {
    console.log("server is running at port 3000!!!");
});