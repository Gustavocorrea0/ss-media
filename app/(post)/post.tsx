import colors from "@/constants/colors";
import { viewModelCreatePost } from "@/src/viewModels/viewModelPost";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Post() {

    const { createNewPost, loading, error } = viewModelCreatePost();
    const [ textPost, setTextPost ] = useState("");

    async function backToHome() { router.replace("/(home)/home") };
    
    const createPost = () => {
        
        if (!textPost || textPost.trim().length === 0) {
            Alert.alert("Atenção", "Insira o Texto");
            return;
        }

        createNewPost(textPost);
        setTextPost("")
        Alert.alert("Sucesso", "Post Criado!")

    }

    useEffect(() => {
        if (error) {
            Alert.alert("Falha", "Não Foi Possivel Criar o Post, Tente Novamente");
        } 
    }, [error]);

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
                onPress={() => { createPost() }}
            >
                <Text style={styles.btnPostText}>
                    {loading ? "Postando..." : "Postar"}
                </Text>
            </TouchableOpacity>
    
        </View>
    );
}