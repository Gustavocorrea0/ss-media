import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },

    titlePage: {
        color:colors.white,
        fontSize: 32,
        fontWeight: "bold",
        marginStart: "42%",
        marginTop: "0%"
    },

    btnBack:{ 
        height: 50, 
        width: 50, 
        alignItems: "center", 
        justifyContent: "center", 
        marginStart: "3%", 
        marginTop: "-10%"
    },

    separatorLine: {
        height: 1,
        width: "90%",
        marginStart: "5%",
        backgroundColor: colors.white
    },

    cardUserProfile: {
        height: "45%",
        width: "90%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.white,
    },

    btnProfileEdit: {
        height: "20%", 
        width: "45%",
        marginTop: "10%",
        marginStart: "5%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: colors.white
    },

    userText: { 
        color: colors.white, 
        fontWeight: "bold", 
        fontSize: 26, 
        marginTop: "-19%", 
        marginStart: "30%" 
    },

    textPost: { 
        color: colors.white,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: "2%",
        marginStart: "30%" 
    },

    card: {
        width: "100%",
        backgroundColor: colors.backgroundColor,
        borderWidth: 1,
        borderStartWidth: 0,
        borderEndWidth: 0,
        borderColor: colors.white,
    }
})

export default styles;