import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    header: {
        marginTop: "10%"
    },

    titlePage: {
        color:colors.white,
        fontSize: 32,
        fontWeight: "bold",
        marginStart: "5%",
        marginTop: "10%"
    },

    btnUser: {
        height: "20%",
        width: "12%",
        backgroundColor: colors.backgroundColor,
    },

    textSeparator:{ 
        color: colors.white,
        fontSize: 45,
        fontWeight: "condensed",
        marginStart: "78%",
        marginTop: "-20%" 
    },

    separatorLine: {
        height: 1,
        width: "90%",
        marginStart: "5%",
        marginTop: "-55%",
        backgroundColor: colors.white
    },

    card: {
        width: "100%",
        backgroundColor: colors.backgroundColor,
        borderWidth: 1,
        borderStartWidth: 0,
        borderEndWidth: 0,
        borderColor: colors.white,
    },

    cardPostText:{ 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: "10%", 
        marginStart: "2%", 
        width: "100%" 
    }

});

export default styles;