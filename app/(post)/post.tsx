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
    
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => backToHome()}
                >
                    <Image
                        style={{ height: 22, width: 22 }}
                        source={require("../../assets/icons/arrow-circle-left.png")}
                    />
                </TouchableOpacity>
    
                <Text style={styles.titlePage}>Postagem</Text>
    
                <View style={styles.headerSpacer} />
            </View>
    
            <View style={styles.separatorLine} />
    
            <Text style={styles.labelText}>Escreva Sua Publicação:</Text>
    
            <TextInput
                editable
                multiline={true}
                numberOfLines={4}
                maxLength={244}
                placeholder="Em que você está pensando..."
                placeholderTextColor={colors.black}
                autoCorrect={true}
                value={textPost}
                onChangeText={setTextPost}
                style={styles.textFieldInput}
            />
    
            <Text style={styles.charCount}>
                {textPost.length}/244
            </Text>
    
            <TouchableOpacity
                style={styles.btnPost}
                onPress={() => { sendPost() }}
            >
                <Text style={styles.btnPostText}>
                    {loading ? "Postando..." : "Postar"}
                </Text>
            </TouchableOpacity>
    
        </View>
    );
}