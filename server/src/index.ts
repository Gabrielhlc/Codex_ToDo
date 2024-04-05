import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const port = 3000;
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description: String,
    done: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

app.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

app.delete("/:id", async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.send("Task deleted");
});

app.post("/", async (req, res) => {
    const task = new Task({
        description: req.body.description,
        done: req.body.done
    });

    await task.save();
    res.send(task);
});

app.put("/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
        done: req.body.done
    })

    res.send(task);
});

app.listen(port, () => {
    mongoose.connect('mongodb+srv://gabrielhenlc:Uf2RYGNEy0ZWVEw8@codex-todo.fctn9z3.mongodb.net/?retryWrites=true&w=majority&appName=codex-todo');
    console.log("App running on port " + port);
});

