import React, { useContext } from 'react'
import { Text } from 'react-native'
import { AuthContext } from '../store/authContext'

function Profile() {
  const authContext = useContext(AuthContext)
  console.log(authContext.userId)
  return (
    <Text>Profile</Text>
  )
}

export default Profile