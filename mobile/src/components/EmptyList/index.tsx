import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/clipboard.png')} />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}