import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        width: '87.2%',
        minHeight: 64,

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,

        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    taskSwitch: {
        marginLeft: 11,
        marginRight: 8,

        borderRadius: 999,
        borderColor: '#1E6F9F',
    },
    taskText: {
        maxWidth: 235,
        flex: 1,

        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',

    },
    taskRemove: {
        marginRight: 8,
    },
})