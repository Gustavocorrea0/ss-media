import colors from "@/constants/colors";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useEffect, useState } from "react";
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
    type Post = {
        id_post: string;
        id_user_post: { 
            name: string 
        };
        text_post: string;
        datetime_create: string;
        datetime_update: string;
        liked_by_user: boolean; // opcional
    };

    const [ posts, setPosts ] = useState<Post[]>([]);
    const [ userName, setUserName ] = useState("");
    const [ postsQuantity, setPostsQuantity ] = useState(0)
    const [ idCurrentUser, setIdCurrentUser ] = useState("");
    const [ postFound, setPostFound ] = useState(false);
    const [ reloadPage ] = useState(false)
    
    async function getCurrentUser() {
        try {

            const { data: dataAuthUser, error: errorAuthUser } = await supabase.auth.getUser();
            
            if (errorAuthUser) {
                Alert.alert("Falha", "Sessão Expirada!")
                router.replace("/(auth)/signin/signin")
                return null;
            }

            var idAuthUser = dataAuthUser.user?.id;

            const { data: dataUsers, error: errorUsers } = await supabase.from('users')
                                                                         .select('name')
                                                                         .eq('id_user', idAuthUser)
                                                                         .single();
            
            if (errorUsers) {
                Alert.alert("Falha", "Sessão Expirada")
                router.replace("/(auth)/signin/signin")
                return null;
            } else if (dataUsers.name == "") {
                Alert.alert("Falha", "Sessão Expirada")
                router.replace("/(auth)/signin/signin")
                return null;
            }

            setIdCurrentUser(idAuthUser);
            setUserName(dataUsers.name)
            featchPosts(idAuthUser);

        } catch (error) {
            Alert.alert("Falha", "Não foi Possível Buscar Posts");
            router.replace("/(home)/home");
            return;
        }
    }

    async function getCountPostFromCurrentuser(idCurrentUserAuth: string) {
        const { count, error } = await supabase.from('posts')
                                               .select('*', { count: 'exact', head: true })
                                               .eq('id_user_post', idCurrentUserAuth);

        if (error) {
            Alert.alert("Atenção", "Seus Post Não Foram Encontrados, Tente Novamente!");
            router.replace('/(home)/home')
            return;
        } 

        setPostsQuantity(count || 0);
    
    }

    async function addLikeToPost( idPost: string, idUserLike: string ) {
        try {

            const { error } = await supabase.from('likes').insert({
                id_post: idPost,
                id_user_like: idUserLike
            });

            if (error) {
                Alert.alert("Atenção", "Não foi Possível Curtir esse Post, Tente Novamente!");
                return;
            }

        } catch (error) {
            Alert.alert("Falha", "Não foi Possível Curtir esse Post, Tente Novamente!");
            return;
        } finally {

        }
    }    

    async function removeLikeToPost( idPost: string, idUserLike: string ) {
        try {
            const { error } = await supabase.from('likes')
                                                  .delete()
                                                  .eq('id_post', idPost)
                                                  .eq('id_user_like', idUserLike);
            
            if (error) {
                Alert.alert("Atenção", "Não foi Possível Descurtir esse Post, Tente Novamente!");
                return;
            }

        } catch (error) {
            Alert.alert("Falha", "Não foi Possível Descurtir esse Post, Tente Novamente!");
            return;
        } finally {

        }
    }

    async function addLikeOrRemoveLike(idPost: string, idUserLike: string) {
        const { error } = await supabase.from('likes')
                                              .select('id_post, id_user_like')
                                              .eq('id_post', idPost)
                                              .eq('id_user_like', idUserLike)
                                              .single();

        if (error) { addLikeToPost(idPost, idUserLike);
        } else { removeLikeToPost(idPost, idUserLike); }
    }

    async function featchPosts(idCurrentUserAuth: string) {
        try {

            const [{ data: postsData, error: postsError }, { data: userLikes, error: likesError }] = await Promise.all([
                supabase.from('posts')
                        .select(`
                            id_post,
                            id_user_post(name),
                            text_post,
                            datetime_create,
                            datetime_update
                        `)
                        .eq("id_user_post", idCurrentUserAuth)
                        .order('datetime_create', { ascending: false }),

                supabase.from('likes')
                        .select('id_post')
                        .eq('id_user_like', idCurrentUserAuth),
            ]);

            if ( postsError ) {
                Alert.alert("Falha", "Posts não Encontrados, Tente Novamente!");
                router.replace("/(home)/home")
                return;
            } else if (postsData.length == 0) {
                return;
            } else {
                const likedPostIds = new Set(userLikes?.map(l => l.id_post));
                const result: Post[] = postsData?.map(post => ({
                    ...post,
                    id_user_post: Array.isArray(post.id_user_post) 
                        ? post.id_user_post[0] 
                        : post.id_user_post,
                    liked_by_user: likedPostIds.has(post.id_post),
                })) ?? [];

                setPosts(result);
                setPostFound(true);
                getCountPostFromCurrentuser(idCurrentUserAuth);
            }

        } catch (error) {
            Alert.alert("Falha", "Tivemos Um Problema, Tente Novamente!");
            return;
        }
    }    

    useEffect(() => {
        getCurrentUser();
    }, []);

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
                    <Text style={styles.userText}>{userName}</Text>
                    <Text style={styles.textPost}>Posts: {postsQuantity}</Text>
                    <TouchableOpacity style={styles.btnProfileEdit}>
                        <Text style={styles.btnProfileEditText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
            <Text style={styles.sectionTitle}>Meus Posts</Text>

            <View style={styles.separatorLine} />
    
            <View style={styles.containerPost}>
                {postFound ? (

                    <FlatList
                        refreshing={reloadPage}
                        onRefresh={() => featchPosts(idCurrentUser)}
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
                                        onPress={() => addLikeOrRemoveLike(item.id_post, idCurrentUser)}
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