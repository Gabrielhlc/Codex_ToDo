import { Text, View } from "react-native";

import { styles } from "./styles";

interface ListInfoProps {
    createdTasks: number;
    doneTasks: number;
}

export function ListInfo({ createdTasks, doneTasks }: ListInfoProps) {
    return (
        <View style={styles.listInfo}>
            <View style={styles.infoHeaders}>
                <Text style={styles.infoHeaderCreated}>Criadas</Text>
                <Text style={styles.infoHeaderNumber}>{createdTasks}</Text>
            </View>
            <View style={styles.infoHeaders}>
                <Text style={styles.infoHeaderDone}>Concluídas</Text>
                <Text style={styles.infoHeaderNumber}>{doneTasks}</Text>
            </View>
        </View>
    )

}