const ToDoModel = require("../models/ToDoModel")

module.exports.getTodo = async (req, res)=> {
      const toDo = await ToDoModel.find()
      res.send(toDo);
}

module.exports.saveTodo = async (req, res)=> {
      const {title,content,selectedCategory} = req.body
      ToDoModel
      .create({title,content,selectedCategory})
      .then((data)=> {
            console.log("Sucessfully added");
            res.send(data);
      })
}

module.exports.updateTodo = async (req, res)=> {
      const {_id, title,content,selectedCategory} = req.body
      ToDoModel
      .findByIdAndUpdate(_id, {title,content,selectedCategory})
      .then(()=> res.send("Successfully updated"))
      .catch((err)=> console.log(err,"Error"))
}

module.exports.deleteTodo = async (req, res)=> {
      const {_id} = req.body
      ToDoModel
      .findByIdAndDelete(_id )
      .then(()=> res.send("Successfully deleted"))
      .catch((err)=> console.log(err,"Error"))
}