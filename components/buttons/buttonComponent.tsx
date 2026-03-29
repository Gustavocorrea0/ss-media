//import colors from "@/constants/colors";
import { DimensionValue, StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress: () => void,
    height: DimensionValue,
    width: DimensionValue,
    marginTop: DimensionValue,
    loading: boolean,
    loadingTextTrue: string,
    loadingTextFalse: string,
}

const CustomButton = ({
    onPress,
    width,
    height,
    marginTop,
    loading,
    loadingTextTrue,
    loadingTextFalse
}: ButtonProps) => {
    return (
        <TouchableOpacity 
            style={[styles.btnLogin, { height: height, width: width, marginTop: marginTop }]}
            onPress={onPress}
            testID="custom-button-test"
        >
            <Text style={styles.titleButton}>{loading ? loadingTextTrue : loadingTextFalse}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    titleButton: { 
        fontWeight: "bold",
        fontSize: 22 
    },

    btnLogin: { 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "#ffffff"
    },

});

export default CustomButton;