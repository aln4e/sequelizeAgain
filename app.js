let List = require('./models').List

List.create({
  time: '8:00',
  event: 'Iglesias Comedy Show'
}).then(function(list){
  console.log(list.get())

  return list.createTo_do({
    // list_id: DataTypes.INTEGER,
    description: 'Laugh lots',
    completed: false
  })
})
.then(function(todo){
  console.log("New To Do Item: ", todo.get())
}).catch(function(error){
  console.log(error)
})
