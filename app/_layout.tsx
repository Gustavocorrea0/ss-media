// configuracao de rotas do projeto

import colors from '@/constants/colors'
import { Stack } from 'expo-router'

export default function MainLayout() {
  return (
    <Stack screenOptions={{ 
      animation: "default",
      contentStyle: { backgroundColor: colors.black },
    }}>
      <Stack.Screen name='index' options={{ headerShown: false }}/>
      <Stack.Screen name='(auth)/signin/signin' options={{ headerShown: false }}/>
      <Stack.Screen name='(auth)/signup/signup' options={{ headerShown: false }}/>
      <Stack.Screen name='(home)/home' options={{ headerShown: false }}/>
      <Stack.Screen name='(post)/post' options={{ headerShown: false }}/>
      <Stack.Screen name='(profile)/profile' options={{ headerShown: false }}/>
    </Stack> 
  )
}