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
        width: "93%",
        marginStart: "3.5%",
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
        padding: 15
    },

    cardPostText:{ 
        justifyContent: "flex-start", 
        alignItems: "stretch", 
        marginTop: "5%", 
        marginStart: "0%", 
        width: "100%" 
    },

    containerPost: { 
        justifyContent: "center", 
        alignItems:"center", 
        height: "100%" 
    },

    headerViewCard: {
        justifyContent: "center",
        alignItems: "center"
    },

    profileImage: { 
        width: 40,
        height: 40, 
        marginTop: "0%", 
        marginStart: "-95%" 
    },

    profileName: { 
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: "-10%",
        marginStart: "-60%" 
    },

    btnLike:{ 
        height: 35, 
        width: 35, 
        borderRadius: 35,  
        marginStart: "-95%", 
        marginTop: "10%", 
        justifyContent: "center", 
        alignItems: "center" 
    },

    textDateTimePost: {
        color: colors.white,
        fontWeight: "bold",
        marginTop: "-8%",
        marginStart: "60%" 
    }

});

export default styles;