//


//db.todos.find();
use db2;

db.createCollection("tasks");
db.tasks.insert({"no" : 1, "title": "t1-title", "content" : "c1-conte" });
db.tasks.insert({"no" : 2, "title": "t2-title", "content" : "c2-conte" });
db.tasks.insert({"no" : 3, "title": "t3-title", "content" : "c3-conte" });
db.tasks.find();

//find
db.tasks.find({"title": {"$regex": /tit/}}, { title: 1})
