import colors from '@/constants/colors';
import { supabase } from '@/lib/supabase';
import Feather from '@react-native-vector-icons/feather';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
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
    
    const [ isLike, setIsLike ] = useState(false);
    const [ postFound, setPostFound ] = useState(false);
    const [ reloadPage, setReloadPage ] = useState(false)
    
    type Post = {
        id_post: string;
        id_user_post: { 
            name: string 
        };
        text_post: string;
        datetime_create: string;
        datetime_update: string;
    };

    const [posts, setPosts] = useState<Post[]>([]);

    async function featchPosts() {
        try {

            const { data, error } = await supabase.from('posts')
                                                  .select(`
                                                    id_post,
                                                    id_user_post(name),
                                                    text_post,
                                                    datetime_create,
                                                    datetime_update
                                                  `)
                                                  .order('datetime_create', { ascending: false });

            if ( error ) {
                Alert.alert("Falha", "Posts não Encontrados, Tente Novamente!");
                return;
            } else if (data.length == 0) {
                return;
            } else {

                const formatted = data.map(post => ({
                    ...post,
                    id_user_post: Array.isArray(post.id_user_post)
                    ? post.id_user_post[0]
                    : post.id_user_post
                }));

                setPosts(formatted);
                setPostFound(true);
            }

        } catch (error) {
            Alert.alert("Falha", "Tivemos Um Problema, Tente Novamente!");
            return;
        }
    }

    useEffect(() => {
        featchPosts();
    }, []);

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
            
                <Text style={styles.titlePage}>SS Media</Text>

                <TouchableOpacity 
                    style={[styles.btnUser, { marginStart: "65%", marginTop: "-9%"}]}
                    onPress={() => { router.replace("/(post)/post") }}
                >
                    <Image 
                        style={{ width: 35, height: 35 }}
                        source={require("../../assets/icons/add.png")}
                    />
                </TouchableOpacity>

                <Text style={styles.textSeparator}>|</Text>

                <TouchableOpacity 
                    style={[styles.btnUser, { marginStart: "85%", marginTop: "-11%"}]}
                    onPress={() => {
                        router.replace("/(profile)/profile")
                    }}
                >
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require("../../assets/icons/account.png")}
                    />
                </TouchableOpacity>
            
            </View>

            <View style={ styles.separatorLine }/>

            <View style={ styles.containerPost }>
                
                { postFound ? 
                    (
                        <FlatList 
                            refreshing={reloadPage}
                            onRefresh={featchPosts}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={<View style={{ height: 300 }} />}
                            data={posts}
                            keyExtractor={(item) => item.id_post.toString()}
                            renderItem={({ item }) => (

                                <View style={[ styles.card, { width: "100%" }]}>
                                    
                                    <View style={ styles.headerViewCard }>
                                        <Image
                                            style={ styles.profileImage }
                                            source={require("../../assets/icons/account.png")}
                                        />
                                        <Text style={ styles.profileName }>{ item.id_user_post?.name }</Text>
                                    </View>
                                    
                                    <View style={ styles.cardPostText }>
                                        <Text style={{ color: colors.white, textAlign: "justify" }}>
                                            {item.text_post}
                                        </Text>
                                    </View>

                                    <View style={ styles.headerViewCard }>
                                        
                                        <TouchableOpacity 
                                            style={ styles.btnLike }
                                            onPress={() => {
                                                if (isLike) { setIsLike(false);
                                                } else { setIsLike(true); }
                                            }}
                                        >
                                            <Feather
                                                name="heart"
                                                color={isLike ? colors.red : colors.white }
                                                size={20}
                                            />
                                        </TouchableOpacity>

                                        <Text style={ styles.textDateTimePost } >
                                            { formatDateTime( item.datetime_update ) }
                                        </Text>

                                    </View>

                                </View>
                            )}
                        />
                    ) : (
                        <Text style={{ fontSize: 35, color: colors.white, fontWeight: "black", marginTop: "-40%", textAlign: "center"  }}>
                            Aguarde Enquanto Buscamos Novas Postagens!
                        </Text>
                    )
                }
                
            </View>

        </View>
    );

}