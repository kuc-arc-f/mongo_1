//


//db.todos.find();
use db2;

db.createCollection("books");
db.books.insert({"no" : 1, "title": "t1", "content" : "c1" });
db.books.insert({"no" : 2, "title": "t2", "content" : "c2" });
db.books.insert({"no" : 3, "title": "t3", "content" : "c3" });
db.books.find();

//find
//$gt	より小さい

db.books.find( {"no": {$lt: 2}} );

//$gt	より大きい
db.books.find( {"no": {$gt: 2}} );

//$lte	以下
db.books.find( {"no": {$lte: 2}} );

//$gte	以上
db.books.find( {"no": {$gte: 2}} );

//sort
db.books.find().sort({no : -1})

