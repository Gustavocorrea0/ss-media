import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },

    separatorLine: {
        height: 1,
        width: "90%",
        backgroundColor: colors.white
    },

    textInputField: {  
        width: "88%",  
        height: "9%",
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        margin: 12,
        borderRadius: 15
    },

    textIdentity:{
        color: colors.white,
        fontWeight: "bold",
    },

    titlePage:{ 
        color: colors.backgroundColor,
        fontSize: 35,
        fontWeight: "900",
        marginTop: "5%" 
    },

    btnLogin: { 
        alignItems: "center",
        justifyContent: "center",
        height: "9.5%",
        width: "80%",
        marginTop: "5%",
        borderRadius: 25,
        backgroundColor: colors.white 
    },

    btnSignup:{ 
        height: "10%",
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },

    textBtnSignup:{ 
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textDecorationLine: "underline" 
    },

    header:{ 
        height: "20%", 
        width: "100%", 
        backgroundColor: colors.white, 
        alignItems: "center", 
        justifyContent: "center",
    },

    inputContainer: {
        justifyContent: "center",
        alignItems: "center" 
    }
 
});

export default styles;