const express = require("express")
const Lists = require("../models/Lists")
const Listrouter = express.Router()
const Tasks = require("../models/Tasks")

//get all lists
Listrouter.get("/lists", async (req, res) => {
    const lists = await Lists.find()
    res.send(lists)
})

//get one list
Listrouter.get("/lists/:id", async (req, res) => {
    const list = await Lists.findById(req.params.id)
    res.send(list)
})

//post new list
Listrouter.post("/addlist", async (req, res) => {
    const list = new Lists(req.body)
    await list.save()
    res.send(list)
})

//update list by id
Listrouter.put("/updatelist/:id", async (req, res) => {
    const oldList = await Lists.findById(req.params.id)
    const listName = oldList.name
    const list = await Lists.findByIdAndUpdate
    (req.params
    .id, req
    .body, {
        new: true
    })
    res.send(list)

    //set task.list to the new list name for the tasks with the old list name using map
    const tasks = await Tasks.find()
    tasks.map(async (task) => {
        if (task.list === listName) {
            task.list = list.name
            await task.save()
        }
    })
})

//delete list by id
Listrouter.delete("/eraselist/:id", async (req, res) => {
    const list = await Lists.findById(req.params.id)
    const listName = list.name
    await Lists.findByIdAndDelete(req.params.id)
    
    //send response in json format
    res.send({message: "List deleted successfully"})

    //set task.list to "None" for the tasks with the deleted list using map
    const tasks = await Tasks.find()
    tasks.map(async (task) => {
        if (task.list === listName) {
            task.list = "None"
            await task.save()
        }
    })

})

module.exports = Listrouter