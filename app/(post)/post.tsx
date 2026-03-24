import colors from "@/constants/colors";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Post() {

    const [ textPost, setTextPost ] = useState("");
    const [ loading, setLoading ] = useState(false);

    async function backToHome() { router.replace("/(home)/home") };
    
    async function sendPost() {
        try {

            setLoading(true);

            //const { data: authData, error: authError } = await supabase.auth.getUser();

            if (!textPost || textPost.trim().length === 0) {
                Alert.alert("Atenção", "Insira o Texto");
                return;
            }

            const { data: authData, error: authError } = await supabase.auth.getUser();

            if (authError || !authData.user) {
                backToHome();
                return;
            };

            const { error } = await supabase.from('posts')
                                            .insert({
                                                id_user_post: authData.user.id,
                                                text_post: textPost
                                            });

            if (error) {
                Alert.alert("Falha", "Não Foi Possível Realizar a Postagem, Tente Novamente!");
                return;
            } else {
                Alert.alert("Sucesso", "Post Realizado!!!");
                backToHome();
            }

        } catch (error) {
            Alert.alert("Erro", "Tivemos um Problema Interno, Tente Realizar a Postagem Novamente!");
            return;
        } finally {
            setLoading(false)
        }

    }

    return (
        <View style={styles.container}>

            <View style={{ marginTop: "0%" }}>
                <View style={{ marginTop: "18%" }}>
                    <Text style={styles.titlePage}>Postagem</Text>
                    <TouchableOpacity 
                        style={styles.btnBack}
                        onPress={() => backToHome()}
                    >
                        <Image
                            style={{ height: 35, width: 35}}
                            source={require("../../assets/icons/arrow-circle-left.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separatorLine}/>

            <View style={{ marginTop: "5%", alignItems: 'center', alignSelf: "flex-start", marginLeft: "8%", width: "85%" }}>
                <Text style={{ color: colors.white, fontWeight: "bold", fontSize: 16, marginStart: "-55%" }}>
                    {"Escreva Sua Publicação:"}
                </Text>
                <TextInput
                    editable
                    multiline={true}
                    numberOfLines={4}
                    maxLength={244}
                    placeholder="Em que você está pensando..."
                    autoCorrect={true}
                    value={textPost}
                    onChangeText={setTextPost}
                    style={ styles.textFieldInput }
                />
            </View>
            
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
                <Text style={{ color: colors.white, fontSize: 16 }}>
                    {textPost.length}/244 Caracteres
                </Text>
            </View>
            
            <TouchableOpacity style={styles.btnPost} onPress={() => { sendPost() }}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>{ loading ? "Postando..." : "Postar" }</Text>
            </TouchableOpacity>

        </View>
    );
}