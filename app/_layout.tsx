// configuracao de rotas do projeto

import { Stack } from 'expo-router'

export default function MainLayout() {
  return (
    <Stack screenOptions={{ 
      headerShown: false,
      animation: "flip"
    }} />
  )
}