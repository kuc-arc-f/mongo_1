// find / 正規表現で、部分一致検索
var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');

const db = monk('192.168.10.104:27017/db2');
//
var collection = db.get('tasks');
collection.find({"title": {"$regex": /tit/ }}, {} ,function(e, docs){
//    console.log(docs);
    var items = [];
    docs.forEach( function (item) {
        items.push(item);
        console.log(item.title );
    });

    db.close()
});

return;
