import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import useAuth, { AuthContext } from '../hooks/useAuth'

const LoginScreen = () => {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>Login to the app</Text>
    </View>
  )
}

export default LoginScreen