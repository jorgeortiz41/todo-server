const express = require("express")
const Lists = require("../models/Lists")
const Listrouter = express.Router()

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
    const list = await Lists.findByIdAndUpdate
    (req.params
    .id, req
    .body, {
        new: true
    })
    res.send(list)
})

//delete list by id
Listrouter.delete("/eraselist/:id", async (req, res) => {
    await Lists.findByIdAndDelete(req.params.id)
    //send response in json format
    res.send({message: "List deleted successfully"})
})

module.exports = Listrouter