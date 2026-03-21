import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function SignIn() {
    return (
        <View style={styles.container}>

            <View style={[ styles.header, { borderBottomLeftRadius: 150 } ]}>
                <Text style={ styles.titlePage }>SS Media</Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                
                <Text style={[ styles.textIdentity, {  fontSize: 30, marginTop: "-8%", marginStart: "-65%" }]}>Login</Text>
                
                <View style={[ styles.separatorLine, { marginTop: "3%" } ]}/>
                
                <Text style={[ styles.textIdentity, {  fontSize: 20, marginTop: "8%", marginRight: "70%" }]}>Email</Text>
                <TextInput
                    editable={true}
                    multiline={false}
                    maxLength={100}
                    style={styles.textInputField}
                />
                
                <Text style={[ styles.textIdentity, { fontSize: 20, marginTop: "3%", marginRight: "68%" }]}>Senha</Text>
                <TextInput
                    editable={true}
                    multiline={false}
                    maxLength={200}
                    secureTextEntry
                    style={styles.textInputField}
                />
                
                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={() => router.replace("/(home)/home")}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>Entrar</Text>
                </TouchableOpacity>

                <View style={[ styles.separatorLine, { marginTop: "10%" } ]}/>

                <TouchableOpacity style={styles.btnSignup}>
                    <Text style={styles.textBtnSignup}>Criar Conta</Text>
                </TouchableOpacity>

            </View>
            
            <View style={[ styles.header, { marginTop: "-5%",borderTopRightRadius: 150 } ]}/>

        </View>
    );
}