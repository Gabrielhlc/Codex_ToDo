import { useState, useEffect } from "react";
import { Alert, FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { ListInfo } from "../../components/ListInfo";
import { Task } from "../../components/Task";

import { styles } from "./styles";
import { api } from "../../../services/api";
import Loading from "../../components/Loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [createdTasks, setCreatedTasks] = useState(0);
    const [doneTasks, setDoneTasks] = useState(0);

    useEffect(() => {
        async function fetchTasks() {
            setIsLoading(true);
            try {
                const { data } = await api.get("/");


                setTasks(data);
                setCreatedTasks(data.length);
                const fetchDoneTasks = data.reduce((acc: number, currentValue: Task) => {
                    if (currentValue.isChecked) {
                        acc++
                    }
                    return acc
                }, 0);
                setDoneTasks(fetchDoneTasks);

            } catch (error: any) {
                console.log('Error', error.request._response);
            }
            setIsLoading(false);
        }
        fetchTasks();
    }, []);

    async function handleAddTask(newTask: Task) {
        tasks.map(task => {
            if (task.text === newTask.text) {
                return Alert.alert('Tarefa já existe', 'Esta tarefa já existe na lista')
            }
        });

        try {
            await api.post("/", newTask);
        } catch (error: any) {
            Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde')
        }

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
                onPress: async () => {
                    if (selectedTask.isChecked) {
                        setDoneTasks(state => state - 1);
                    }
                    await api.delete(`/${selectedTask._id}`);
                    setTasks(state => state.filter(task => task.text !== selectedTask.text))
                    setCreatedTasks(state => state - 1)
                }
            },

        ])
    }

    async function handleToggleTask(task: Task) {
        await api.put(`/${task._id}`, {
            "text": task.text,
            "isChecked": !task.isChecked
        });

        setDoneTasks(state => task.isChecked ? state + 1 : state - 1);
    }

    return (
        <View style={styles.container}>
            <Header handleAddTask={handleAddTask} />
            <ListInfo
                createdTasks={createdTasks}
                doneTasks={doneTasks}
            />

            {isLoading ? <Loading /> : (

                <FlatList
                    data={tasks}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (
                        <Task
                            task={item}
                            removeTask={() => handleRemoveTask(item)}
                            onToggle={() => handleToggleTask(item)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyList />
                    )}
                />
            )}
        </View >
    )
}