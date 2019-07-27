var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');
const db = monk('192.168.10.104:27017/db2');


var collection = db.get('books');
collection.find( {"no": {$gte: 2}},{},function(e, docs){
    console.log(docs);
    db.close()
});
return;

var collection = db.get('books');
collection.find( {"no": {$lte: 2}},{},function(e, docs){
    console.log(docs);
    db.close()
});
return;

//
var collection = db.get('books');
collection.find( {"no": {$gt: 2}},{},function(e, docs){
    console.log(docs);
    db.close()
});
return;

//
var collection = db.get('books');
collection.find( {"no": {$lt: 2}},{},function(e, docs){
    console.log(docs);
    db.close()
});
return;
