var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MyContractJSON =require(path.join(__dirname, 'build/contracts/certi.json'))
Web3 = require("web3");

const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraKey = "infura_project_id";
const mnemonic = "metamask_seed";
addressIndex = 0;
numberOfAddresses = 1;

var indexRouter = require('./routes/index');
accountAddress = "metamask_seed_account";

const provider = new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 
                                      addressIndex, numberOfAddresses);

web3 = new Web3(provider);
contractAddress = MyContractJSON.networks['4'].address;
const contractAbi = MyContractJSON.abi;

MyContract = new web3.eth.Contract(contractAbi, contractAddress);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
