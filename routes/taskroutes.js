const express = require("express")
const Tasks = require("../models/Tasks")
const Taskrouter = express.Router()

//get all tasks
Taskrouter.get("/tasks", async (req, res) => {
	const tasks = await Tasks.find()
	res.send(tasks)
})

//get one task
Taskrouter.get("/tasks/:id", async (req, res) => {
    const task = await Tasks.findById(req.params.id)
    res.send(task)
})

//post new task
Taskrouter.post("/addtask", async (req, res) => {
    const task = new Tasks(req.body)
    await task.save()
    res.send(task)
})

//update task by id
Taskrouter.put("/updatetask/:id", async (req, res) => {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.send(task)
})

//delete task by id
Taskrouter.delete("/erasetask/:id", async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id)
    //send response in json format
    res.send({message: "Task deleted successfully"})
})


module.exports = Taskrouter