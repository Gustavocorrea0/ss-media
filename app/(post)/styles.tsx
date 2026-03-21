import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        //alignItems: 'center',
        //justifyContent: 'center'
    },

    titlePage: {
        color:colors.white,
        fontSize: 32,
        fontWeight: "bold",
        marginStart: "35%",
        marginTop: "0%"
    },

    textFieldInput: {
        height: 400,
        width: "110%", // largura fixa
        padding: 10,
        borderColor: "#ffffff",
        borderWidth: 1,
        marginTop: 12,
        textAlignVertical: "top",
        borderRadius: 10,
        backgroundColor: colors.white
    },

    separatorLine: {
        height: 1,
        width: "90%",
        marginStart: "5%",
        marginTop: "2%",
        backgroundColor: colors.white
    },

    btnPost: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "6%", 
        marginStart: "10%",
        marginTop: "10%",
        borderRadius: 20,
        backgroundColor: colors.white, 
    },

    btnBack:{ 
        height: 50, 
        width: 50, 
        alignItems: "center", 
        justifyContent: "center", 
        marginStart: "3%", 
        marginTop: "-10%"
    }

});

export default styles;