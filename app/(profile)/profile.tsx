import colors from "@/constants/colors";
import Feather from "@react-native-vector-icons/feather";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

function backToHome() { router.replace("/(home)/home") }

export default function Profile() {
    
    const [ userName, setUserName ] = useState("gustavo");
    const [ postsQuantity, setPostsQuantity ] = useState(0)

    const [ isLike, setIsLike ] = useState(false);
    

    return (
        <View style={styles.container}>
                
            <View>
                <View style={{ marginTop: "18%" }}>
                    <Text style={styles.titlePage}>Perfil</Text>
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
            
            <View style={[styles.separatorLine, { marginTop: "2%" }]}/>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: "-20%" }}>
                <View style={ styles.cardUserProfile }>
                    <Image
                        style={{ height: 75, width: 75, borderRadius: 50, marginStart: "5%", marginTop: "7%" }}
                        source={require("../../assets/images/usuario.png")}
                    />
                    <Text style={styles.userText}>{userName}</Text> 
                    <Text style={styles.textPost}>Posts: {postsQuantity}</Text> 
                    <TouchableOpacity style={styles.btnProfileEdit}>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginStart: "6%", marginTop: "-20%" }}>Meus Posts</Text>
            <View style={[styles.separatorLine, { marginTop: "4%" }]}/>

            <View style={{ justifyContent: "center", alignItems:"center", height: "100%" }}>
                
                <ScrollView 
                    style={{ width: "90%", height: "100%", marginTop: "10%" }}  
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[ styles.card, { height: 200 }]}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 40, height: 40, marginTop: "5%", marginStart: "-85%" }}
                                source={require("../../assets/icons/account.png")}
                            />
                            <Text style={{ fontSize: 20, color: colors.white, fontWeight: "bold", marginTop: "-10%", marginStart: "-45%" }}>{"gustavo"}</Text>
                        </View>
                        
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "10%", marginStart: "2%", width: "100%" }}>
                            <Text style={{ color: colors.white }}>
                                {"Salve o corinthians o campeao dos campeoes, eternamente dentro dos nossos coracoes"}
                            </Text>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity 
                                style={{ height: 35, width: 35, borderRadius: 35,  marginStart: "-85%", marginTop: "10%", justifyContent: "center", alignItems: "center" }}
                                onPress={() => {
                                    if (isLike) { setIsLike(false);
                                    } else { setIsLike(true); }
                                }}
                            >
                               <Feather
                                    name="heart"
                                    color={isLike ? "#fc0000" : "#ffffff"}
                                    size={20}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{ color: colors.white, fontWeight: "bold", marginTop: "-8%", marginStart: "60%" }}
                            >
                                {"07/03/2026 - 22:27"}
                            </Text>
                        </View>

                    </View>
                </ScrollView>

            </View>

        </View>
    );
}