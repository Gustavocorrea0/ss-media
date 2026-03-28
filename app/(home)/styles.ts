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
    },

    headerActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    btnUser: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: colors.gray2,
        justifyContent: "center",
        alignItems: "center",
    },

    textSeparator: {
        color: colors.gray3,
        fontSize: 20,
        marginHorizontal: 4,
    },

    separatorLine: {
        height: 1,
        backgroundColor: colors.gray4,
        marginHorizontal: 20,
        marginBottom: 8,
    },

    containerPost: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 120,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 32,
        marginTop: 80,
    },

    emptyText: {
        fontSize: 18,
        color: colors.gray5,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 28,
    },

    card: {
        backgroundColor: colors.gray6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.gray4,
        padding: 16,
        marginBottom: 12,
        width: width - 32,
    },

    headerTopPost: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 10,
    },

    profileImageWrapper: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.gray7,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },

    profileImage: {
        width: 28,
        height: 28,
    },

    textProfileName: {
        color: colors.white,
        fontSize: 15,
        fontWeight: "700",
        flex: 1,
    },

    cardPostText: {
        marginBottom: 14,
    },

    postText: {
        color: colors.gray8,
        fontSize: 14,
        lineHeight: 22,
        textAlign: "left",
    },

    headerEndPost: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray2,
        paddingTop: 12,
    },

    btnLike: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: colors.gray9,
    },

    likeCount: {
        color: colors.gray10,
        fontSize: 13,
        fontWeight: "600",
    },

    textDateTimePost: {
        color: colors.gray11,
        fontSize: 12,
        fontWeight: "500",
    },
});

export default styles;