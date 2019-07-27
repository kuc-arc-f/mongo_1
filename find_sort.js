var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');

const db = monk('192.168.10.104:27017/db2');
//
var collection = db.get('books');
collection.find({}, {sort: {no: -1}} ,function(e, docs){
    console.log(docs);
    /*
    var items = [];
    docs.forEach( function (item) {
        items.push(item);
        console.log(item.title  );
        console.log(item.up_date  );
    });
    */
    db.close()
});

return;
