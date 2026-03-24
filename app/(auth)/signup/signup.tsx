import colors from "@/constants/colors";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {

    async function newUser() {

        const { error } = await supabase.auth.signUp({
            email: "gusacorrea89@gmail.com",
            password: "12345678",
            options: {
                data: {
                    name: "Pedrin",
                    gender: 1,
                    date_birth: "2006-02-22",
                }
            }
        });

        if (error) {
            Alert.alert("Erro", "Verificar: " + error);
            router.replace("/(auth)/signin/signin")
        } else {
            Alert.alert("Sucesso", "Usuario Criado");
            router.replace("/(auth)/signin/signin")
        }

    }

    return(
        <View style={{ alignItems:"center", justifyContent:"center" }}>
            <TouchableOpacity 
                style={{ height: 300, width: 300, marginTop: "60%", backgroundColor: colors.red }}
                onPress={() => {newUser()}}
            >
                <Text>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    );
}