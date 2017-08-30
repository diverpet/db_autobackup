
import mysqlDump from 'mysqldump';
import config from './config';
import {
    format,
    fromNow
} from 'silly-datetime';
//format(new Date(), 'YYYY-MM-DD HH:mm'); // 2015-07-06 15:10 
//fromNow(+new Date() - 2000); // a few seconds ago 
import fs from 'fs';
var path = require("path");

const dateextend = format(new Date(), 'YYYY-MM-DD');
const filePath = './saveddata/data' + dateextend + '.sql';
   //make a filename according to current date

var myDate = new Date;
var lw = new Date(myDate - 1000 * 60 * 60 * 24 * config.mysqlconfig.fileExpireDays);
const olddateextend = format(lw, 'YYYY-MM-DD');
const expiredFile = './saveddata/data' + olddateextend + '.sql';

mysqlDump({
  host: config.mysqlconfig.host,
  user: config.mysqlconfig.user,
  password: config.mysqlconfig.password,
  database: config.mysqlconfig.database,
  dest: filePath
}, function(err){
	//create data.sql file;
})

fs.unlinkSync(expiredFile);
  //detele expired file.