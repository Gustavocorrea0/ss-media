
import CustomButton from "@/components/buttons/ButtonComponent";
import { viewModelSignIn } from "@/src/viewModels/viewModelAuth";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";


export default function SignIn() {

    const { signIn, loading, error } = viewModelSignIn();
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const signInApp = () => { 

        if ( !email || !password) {
            Alert.alert("Atenção", "Dados Inválidos");
            return;
        }

        signIn(email, password);
    
    }

    //async function signUp() { router.replace("/(auth)/signup/signup") }

    useEffect(() => {
        if (error) {
            Alert.alert("Atenção", "Dados Inválidos");
        }
    }, [error]);

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
                    onChangeText={setEmail}
                    value={email}
                    style={styles.textInputField}
                />
                
                <Text style={[ styles.textIdentity, { fontSize: 20, marginTop: "3%", marginRight: "68%" }]}>Senha</Text>
                <TextInput
                    editable={true}
                    multiline={false}
                    maxLength={200}
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    style={styles.textInputField}
                />
                
                <CustomButton
                    onPress={() => {signInApp()}}
                    width={"80%"}
                    height={"9.5%"}
                    marginTop={"10%"}
                    loading={loading}
                    loadingTextTrue={"Carregando..."}
                    loadingTextFalse={"Entrar"}
                />

                <View style={[ styles.separatorLine, { marginTop: "10%" } ]}/>

                <TouchableOpacity 
                    style={styles.btnSignup} 
                    //onPress={() => { signUp() }}
                >
                    <Text style={styles.textBtnSignup}>Criar Conta</Text>
                </TouchableOpacity>

            </View>
            
            <View style={[ styles.header, { marginTop: "-5%",borderTopRightRadius: 150 } ]}/>

        </View>
    );
    
}