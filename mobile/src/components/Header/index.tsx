import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Task } from "../Task";
import { styles } from "./styles";

interface HeaderProps {
    handleAddTask: (task: Task) => void;
}

export function Header({ handleAddTask }: HeaderProps) {
    const [taskText, setTaskText] = useState<string>('');


    return (
        <>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.svg')} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    maxLength={50}
                    onChangeText={setTaskText}
                    value={taskText}
                />

                <TouchableOpacity style={styles.formButton} onPress={() => {
                    const task = {
                        text: taskText,
                        isChecked: false
                    } as Task
                    handleAddTask(task)
                    setTaskText('')
                }}>
                    <Text style={styles.formButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}