import colors from "@/constants/colors";
import { viewModelCountPosts, viewModelFetchConstUserName, viewModelFetchPostCurrentUser, viewModelLikePost, viewModelRemoveLikePost, viewModelValidLikePost } from "@/src/viewModels/viewModelPost";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Heart } from 'react-native-feather';
import styles from "./styles";

function backToHome() { router.replace("/(home)/home") }

function formatDateTime(isoString: any) {
  const data = new Date(isoString);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
}

export default function Profile() {

    const [ postsQuantity, setPostsQuantity ] = useState(0)
    const [ reloadPage ] = useState(false)

    const { countAllPost } = viewModelCountPosts();
    const { likePost } = viewModelLikePost();
    const { removeLikePost } = viewModelRemoveLikePost();
    const { validLike, errorValidLike} = viewModelValidLikePost();
    const { fetchPostsCurrentUser, posts } = viewModelFetchPostCurrentUser();
    const { fetchNameUser,  userNameCurrent } = viewModelFetchConstUserName()

    async function getCountPostFromCurrentuserePost() {
        const posts = await countAllPost();
        if (posts) {
            setPostsQuantity(posts);
        } else {
            setPostsQuantity(0);
        }
    }

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
    };

    const startProfilePage = () => { 
        fetchNameUser();
        fetchPostsCurrentUser();
        getCountPostFromCurrentuserePost();
    };

    useFocusEffect(
        useCallback(() => {
            startProfilePage();
        }, [])
    );

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
    
                <Text style={styles.titlePage}>Perfil</Text>
    
                <View style={styles.headerSpacer} />
            </View>
    
            <View style={styles.separatorLine} />
    
            <View style={styles.cardUserProfile}>
                <Image
                    style={styles.profileImage}
                    source={require("../../assets/images/usuario.png")}
                />
    
                <View style={styles.profileInfo}>
                    <Text style={styles.userText}>{userNameCurrent}</Text>
                    <Text style={styles.textPost}>Posts: {postsQuantity}</Text>
                    <TouchableOpacity style={styles.btnProfileEdit}>
                        <Text style={styles.btnProfileEditText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
            <Text style={styles.sectionTitle}>Meus Posts</Text>

            <View style={styles.separatorLine} />
    
            <View style={styles.containerPost}>
                {posts ? (

                    <FlatList
                        refreshing={reloadPage}
                        onRefresh={() => fetchPostsCurrentUser()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                        data={posts}
                        keyExtractor={(item) => item.id_post.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
    
                                <View style={styles.headerTopPost}>
                                    <View style={styles.profileImageWrapper}>
                                        <Image
                                            style={styles.profileImagePost}
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
                                        {/*<Text style={styles.likeCount}></Text>*/}
                                    </TouchableOpacity>
    
                                    <Text style={styles.textDateTimePost}>
                                        {formatDateTime(item.datetime_update)}
                                    </Text>
                                </View>
    
                            </View>
                        )}
                    />  
                ):(
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