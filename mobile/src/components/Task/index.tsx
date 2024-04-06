import { useState } from 'react'
import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export type Task = {
    _id: string
    __v: number
    text: string
    isChecked: boolean

}

interface TaskProps {
    task: Task
    removeTask: () => void
    onToggle: (isChecked: boolean) => void
}

export function Task({ task, removeTask, onToggle }: TaskProps) {
    const [checked, setChecked] = useState(task.isChecked);
    task.isChecked = checked;

    function handleToggle(isChecked: boolean) {
        setChecked(isChecked);
        onToggle(isChecked);

    }

    return (
        <View style={styles.taskContainer}>
            <Checkbox
                disabled={false}
                style={styles.taskSwitch}
                value={checked}
                onValueChange={handleToggle}
                color={checked ? "#5E60CE" : undefined}
            />
            <Text style={styles.taskText}>{task.text}</Text>
            <TouchableOpacity style={styles.taskRemove} onPress={removeTask}>

                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}