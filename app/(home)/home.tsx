import colors from '@/constants/colors';
import { Feather } from '@react-native-vector-icons/feather';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Home() {
    
    const [ isLike, setIsLike ] = useState(false);

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
                            <Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold", marginTop: "-10%", marginStart: "-45%" }}>{"gustavo"}</Text>
                        </View>
                        
                        <View style={ styles.cardPostText }>
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