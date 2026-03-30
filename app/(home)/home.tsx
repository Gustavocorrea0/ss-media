import colors from '@/constants/colors';
import { viewModelFetchPost, viewModelLikePost, viewModelRemoveLikePost, viewModelValidLikePost } from '@/src/viewModels/viewModelPost';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Heart } from 'react-native-feather';
import styles from "./styles";

function formatDateTime(isoString: any) {
  const data = new Date(isoString);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
}

export default function Home() {
    
    const [ reloadPage ] = useState(false)

    const { fetchPosts, posts } = viewModelFetchPost();
    const { likePost } = viewModelLikePost();
    const { removeLikePost } = viewModelRemoveLikePost();
    const { validLike, errorValidLike} = viewModelValidLikePost();

    async function addLikeOrRemoveLike(idPost: string) {
        try {
            const likeIsTrue = await validLike(idPost);
            if (errorValidLike) { 
                Alert.alert("Falha", "Não Foi Possível Validar este Post!");
                return;
            } else {
                if (likeIsTrue) {
                    removeLikePost(idPost);
                } else {
                    likePost(idPost);
                }
            }
        } catch (error) {
            Alert.alert("Falha", "Não Post Inválido")
            return;
        }
    }
    
    useFocusEffect(
        useCallback(() => {
            fetchPosts();
        }, [])
    );

    return (
        <View style={styles.container}>
    
            <View style={styles.header}>
                <Text style={styles.titlePage}>SS Media</Text>
    
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.btnUser}
                        onPress={() => router.replace("/(post)/post")}
                    >
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={require("../../assets/icons/add.png")}
                        />
                    </TouchableOpacity>
    
                    <Text style={styles.textSeparator}>|</Text>
    
                    <TouchableOpacity
                        style={styles.btnUser}
                        onPress={() => router.replace("/(profile)/profile")}
                    >
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require("../../assets/icons/account.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
    
            <View style={styles.separatorLine} />
    
            <View style={styles.containerPost}>
                {posts ? (
                    <FlatList
                        refreshing={reloadPage}
                        onRefresh={() => fetchPosts()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                        data={posts}
                        keyExtractor={(item) => item.id_post.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
    
                                <View style={styles.headerTopPost}>
                                    <View style={styles.profileImageWrapper}>
                                        <Image
                                            style={styles.profileImage}
                                            source={require("../../assets/icons/account.png")}
                                        />
                                    </View>
                                    <Text style={styles.textProfileName}>
                                        {item.id_user_post?.name}
                                    </Text>
                                </View>
    
                                <View style={styles.cardPostText}>
                                    <Text style={styles.postText}>{item.text_post}</Text>
                                </View>
    
                                <View style={styles.headerEndPost}>
                                    <TouchableOpacity
                                        style={styles.btnLike}
                                        onPress={() => addLikeOrRemoveLike(item.id_post)}
                                    >
                                        {
                                            item.liked_by_user ? (
                                                <Heart fill="red" color={colors.red} width={20} height={20} />
                                            ) : (
                                                <Heart color={colors.white} width={20} height={20} />    
                                            )
                                        }
                                        {/*<Text style={styles.likeCount}>10</Text>*/}
                                    </TouchableOpacity>
    
                                    <Text style={styles.textDateTimePost}>
                                        {formatDateTime(item.datetime_update)}
                                    </Text>
                                </View>
    
                            </View>
                        )}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            Aguarde enquanto buscamos novas postagens…
                        </Text>
                    </View>
                )}
            </View>
    
        </View>
    );

}