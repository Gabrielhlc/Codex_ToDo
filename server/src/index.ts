import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    text: String,
    isChecked: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

app.get("/", async (req, res) => {
    const tasks = await Task.find();
    return res.json(tasks);
});

app.delete("/:id", async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.send("Task deleted");
});

app.post("/", async (req, res) => {
    const task = new Task({
        text: req.body.text,
        isChecked: req.body.isChecked
    });

    await task.save();
    res.send(task);
});

app.put("/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        isChecked: req.body.isChecked
    })

    res.send(task);
});

app.listen(port, () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_PASSWORD}/?retryWrites=true&w=majority&appName=codex-todo`);
    console.log("App running on port " + port);
});