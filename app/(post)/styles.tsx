import colors from "@/constants/colors";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 54,
        paddingBottom: 14,
        backgroundColor: colors.backgroundColor,
    },

    titlePage: {
        color: colors.white,
        fontSize: 26,
        fontWeight: "800",
        letterSpacing: 0.5,
        flex: 1,
        textAlign: "center",
    },

    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.07)",
        justifyContent: "center",
        alignItems: "center",
    },

    // Espaço fantasma para equilibrar o título no centro
    headerSpacer: {
        width: 40,
    },

    separatorLine: {
        height: 1,
        backgroundColor: "rgba(255,255,255,0.08)",
        marginHorizontal: 20,
        marginBottom: 8,
    },

    labelText: {
        color: "rgba(255,255,255,0.6)",
        fontWeight: "600",
        fontSize: 13,
        marginHorizontal: 20,
        marginTop: 24,
        marginBottom: 8,
        letterSpacing: 0.3,
    },

    textFieldInput: {
        height: 180,
        width: width - 40,
        alignSelf: "center",
        padding: 12,
        borderColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 16,
        textAlignVertical: "top",
        backgroundColor: colors.white,
        color: colors.black,
        fontSize: 14,
        lineHeight: 22,
    },

    charCount: {
        color: "rgba(255,255,255,0.35)",
        fontSize: 12,
        fontWeight: "500",
        textAlign: "right",
        marginHorizontal: 20,
        marginTop: 8,
    },

    btnPost: {
        alignItems: "center",
        justifyContent: "center",
        width: width - 40,
        height: 50,
        alignSelf: "center",
        marginTop: 32,
        borderRadius: 16,
        backgroundColor: colors.white,
    },

    btnPostText: {
        fontWeight: "800",
        fontSize: 16,
        color: colors.backgroundColor,
        letterSpacing: 0.5,
    },

});

export default styles;