const express = require("express")
const Tasks = require("../models/Tasks")
const Taskrouter = express.Router()

//get all events
Taskrouter.get("/tasks", async (req, res) => {
	const tasks = await Tasks.find()
	res.send(tasks)
})

//get one event
Taskrouter.get("/tasks/:id", async (req, res) => {
    const task = await Tasks.findById(req.params.id)
    res.send(task)
})

//post new event
Taskrouter.post("/addtask", async (req, res) => {
    const task = new Tasks(req.body)
    await task.save()
    res.send(task)
})

//update event by id
Taskrouter.put("/edittask/:id", async (req, res) => {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.send(task)
})

//delete event by id
Taskrouter.delete("/erasetask/:id", async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id)
    res.send(`task with id ${req.params.id} deleted`)
})


module.exports = Taskrouter