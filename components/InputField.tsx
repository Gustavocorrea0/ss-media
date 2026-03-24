import colors from "@/constants/colors";
import { StyleSheet, Text, TextInput, View } from "react-native";

const INPUT_MAX_LENGTH = {
    email: 100,
    password: 200,
} as const;

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: string;
}

export function InputField({
    label,
    value,
    onChangeText,
    secureTextEntry = false,
    ...rest
}: InputFieldProps ) {

    const maxLength = secureTextEntry ? INPUT_MAX_LENGTH.password : INPUT_MAX_LENGTH.email;
    return (
        <View style={{}}>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                style={{}}
                accessibilityLabel={label}
                //{...rest}
            />
        </View>
    );

}

export default StyleSheet.create({

    fieldWrapper:{
        width: "100%",
        alignItems: "center",
    },

    fieldLabel:{
        fontSize: 20,
        marginRight: "70%",
        marginTop: "8%",
    },

    textInputField:{
        width: "88%",  
        height: "9%",
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        margin: 12,
        borderRadius: 15
    }
    
})