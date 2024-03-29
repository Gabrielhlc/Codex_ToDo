import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { ListInfo } from "../../components/ListInfo";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [createdTasks, setCreatedTasks] = useState(0);
    const [doneTasks, setDoneTasks] = useState(0);

    function handleAddTask(newTask: Task) {
        tasks.map(task => {
            if (task.text === newTask.text) {
                return Alert.alert('Tarefa já existe', 'Esta tarefa já existe na lista')
            }
        })
        setTasks(state => (
            [...state, newTask]
        ))
        setCreatedTasks(state => (
            state + 1
        ))
    }
    function handleRemoveTask(selectedTask: Task) {
        Alert.alert('Remover', `Deseja remover esta task?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    if (selectedTask.isChecked) {
                        setDoneTasks(state => state - 1);
                    }
                    setTasks(state => state.filter(task => task.text !== selectedTask.text))
                    setCreatedTasks(state => state - 1)
                }
            },

        ])
    }

    function handleToggleTask(isChecked: boolean) {
        setDoneTasks(state => isChecked ? state + 1 : state - 1);
    }

    return (
        <View style={styles.container}>
            <Header handleAddTask={handleAddTask} />

            <ListInfo
                createdTasks={createdTasks}
                doneTasks={doneTasks}
            />

            <FlatList
                data={tasks}
                keyExtractor={item => item.text}
                renderItem={({ item }) => (
                    <Task
                        task={item}
                        removeTask={() => handleRemoveTask(item)}
                        onToggle={handleToggleTask}
                    />
                )}
                ListEmptyComponent={() => (
                    <EmptyList />
                )}
            />
        </View >
    )
}