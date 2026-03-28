import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";


export default function SignIn() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    async function signInApp() {
        try {

            setLoading(true);

            if ( !email || !password) {
                Alert.alert("Atenção", "Dados Inválidos");
                return;
            }

            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (error) {
                Alert.alert("Atenção", "Dados Inválidos!");
                return;
            } else {
                setEmail("");
                setPassword("");
                router.replace("/(home)/home")
            }

        } catch (error) {
            Alert.alert("Falha", "Não Possível Realizar o Acesso, Tente Novamente!");
            return;
        } finally {
            setLoading(false);
        }
    }

    async function signUp() { router.replace("/(auth)/signup/signup") }

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
                
                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={() => { signInApp() }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>{loading ? "Carregando..." : "Entrar"}</Text>
                </TouchableOpacity>

                <View style={[ styles.separatorLine, { marginTop: "10%" } ]}/>

                <TouchableOpacity 
                    style={styles.btnSignup} 
                    onPress={() => { signUp() }}
                >
                    <Text style={styles.textBtnSignup}>Criar Conta</Text>
                </TouchableOpacity>

            </View>
            
            <View style={[ styles.header, { marginTop: "-5%",borderTopRightRadius: 150 } ]}/>

        </View>
    );
    
}