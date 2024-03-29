import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: "21.3%",
        // width: "100%",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#0D0D0D",
    },
    form: {
        top: -27,

        flexDirection: 'row',
        justifyContent: "center",
    },
    input: {
        height: 54,
        padding: 16,
        maxWidth: 271,
        marginRight: 8,

        flex: 1,
        alignItems: "center",
        fontFamily: 'Inter_400Regular',
        fontSize: 16,

        color: '#F2F2F2',
        backgroundColor: '#262626',
        borderRadius: 6,

    },
    formButton: {
        width: 52,
        height: 52,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 6,
        backgroundColor: "#1E6F9F",
    },
    formButtonText: {
        color: "#FFF",
        fontSize: 20,
    }
})