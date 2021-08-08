import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#C4DBE0',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#8ed0de',
        paddingVertical: 10     
    },
    board: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dailyTask: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#8ed0de',
        padding: 40,
        alignItems: 'center',
        marginVertical: 40,
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    numberDaily: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#102EC2"

    },
    dailyText: {
        fontSize: 13,
        fontWeight: "bold"
    },
    mySubjects: {
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-evenly",
        marginHorizontal: 15
    },
    carkStyle: {
        backgroundColor: "black"
    },
    textName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 13,
        fontStyle: "italic",
        paddingTop: 10,
        color: "#273746"
    }
});