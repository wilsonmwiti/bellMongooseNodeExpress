var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dotenv = require("dotenv")

dotenv.config()

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/userRouter');


var mongoose=require('mongoose');
var path=require("path")
const uri = 'mongodb://localhost:27017/designPhase'
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/designPhase`
// const uri=`mongodb://ragavi:password@localhost:27017/designPhase`;
mongoose.connect(uri, {
  // dbName:'designPhase',
  // user:'ragavi',
  // pass:'abcde',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// console.log(dotenv.parsed);
let userModel = require('./Model/UserSchema');
let apiModel=require('./Model/ApiSchema');
let programModel=require('./Model/ProgramSchema');
let businessModel=require('./Model/BusinessUnitSchema');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/* (async () => {

  await userModel.insertMany([
      {
      first_name: "Ragavi",
  last_name: "Ramasamy",
  email: "ragaviramasamy@gmail.com",
  role: "role1",
  username: "ragavi_ramasamy",
  password: { 
     
      temp_password:"ram",
      password:"ram",
  },
  mobile:9087942068 ,
  token: ""
}
  ])
   
})() */

/* (async()=>{

  await apiModel.insertMany([
    {
    api_id: "api3",
    api_name: "api5",
    url: "'http://localhost:3000/apitest1/",
    method: "GET",
    description:"getting specific apitested",
    projects: [""],
    params: [{ key:"", value: "" ,description:"params3"}],
    headers: [
        { key: "", value: "" ,description:"headers3"}
    ],
    authorisation: {
      no_auth:false,
      basic_auth: [{ username: "ab", password: "ab"}],
      bearer_token: [{ token: "ab" }],
      api_key: [{ key: "ab", value: "ab" }]
  },
  body: {
      content_type: "ab",
      content: "ab"
  },
  setting: {
      type: "ab",
  }
  }
  ])

})() */

/* (async()=>{
  await programModel.insertMany([
    {
    programs: [

      {
          program_id:"program1",
          program_name: "program1",
          apis: [
              {
                  api_id: "api1"
              }
          ]
      },
  ]
}
  ])
})() */

/* (async()=>{
  await businessModel.insertMany([
    {
    business_name: "BBM",
  programs: [

      {
          program_id: "program1",
          apis: [
              {
                  api_id: "api1"
              }
          ]
      }
  ]
}
  ])
})() */

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send("error");
});
 */

app.listen('3000',()=>console.log("3000"));