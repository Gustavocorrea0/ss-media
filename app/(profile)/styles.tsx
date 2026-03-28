import colors from "@/constants/colors";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    // ── HEADER ──────────────────────────────────────────────────────────────
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

    headerSpacer: {
        width: 40,
    },

    separatorLine: {
        height: 1,
        backgroundColor: "rgba(255,255,255,0.08)",
        marginHorizontal: 20,
        marginBottom: 8,
    },

    // ── CARD PERFIL ──────────────────────────────────────────────────────────
    cardUserProfile: {
        width: width - 40,
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 24,
        gap: 14,
    },

    profileImage: {
        height: 72,
        width: 72,
        borderRadius: 36,
    },

    profileImagePost: {
        height: 22,
        width: 22,
    },

    profileInfo: {
        flex: 1,
        gap: 4,
    },

    userText: {
        color: colors.white,
        fontWeight: "800",
        fontSize: 20,
        letterSpacing: 0.3,
    },

    textPost: {
        color: "rgba(255,255,255,0.45)",
        fontWeight: "600",
        fontSize: 13,
    },

    btnProfileEdit: {
        height: 36,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: colors.white,
        marginTop: 8,
        alignSelf: "flex-start",
    },

    btnProfileEditText: {
        fontWeight: "700",
        fontSize: 13,
        color: colors.backgroundColor,
    },

    // ── SEÇÃO MEUS POSTS ─────────────────────────────────────────────────────
    sectionTitle: {
        fontWeight: "800",
        fontSize: 16,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: 0.3,
        marginHorizontal: 20,
        marginBottom: 8,
    },

    containerPost: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 120,
    },

    // ── CARD POST ────────────────────────────────────────────────────────────
    card: {
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        padding: 16,
        marginBottom: 12,
        width: width - 40,
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
        backgroundColor: "rgba(255,255,255,0.1)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },

    profileImageSmall: {
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
        color: "rgba(255,255,255,0.85)",
        fontSize: 14,
        lineHeight: 22,
        textAlign: "left",
    },

    headerEndPost: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.07)",
        paddingTop: 12,
    },

    btnLike: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.06)",
    },

    likeCount: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 13,
        fontWeight: "600",
    },

    textDateTimePost: {
        color: "rgba(255,255,255,0.35)",
        fontSize: 12,
        fontWeight: "500",
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

});

export default styles;