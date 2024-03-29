import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listInfo: {
        width: '87.2%',

        flexDirection: 'row',
        justifyContent: 'space-between',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    infoHeaders: {
        flexDirection: 'row',
    },
    infoHeaderCreated: {
        marginRight: 8,

        color: '#4EA8DE',
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        lineHeight: 17,
    },
    infoHeaderDone: {
        marginRight: 8,

        color: '#8284FA',
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        lineHeight: 17,
    },
    infoHeaderNumber: {
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 2,
        paddingHorizontal: 8,

        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        lineHeight: 15,
        color: '#D9D9D9',
        backgroundColor: '#333',
        borderRadius: 999,
    },
})