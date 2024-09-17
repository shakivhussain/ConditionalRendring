import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ValidPassword = () => <Text>Valid Password</Text>
const InValidPassword = () => <Text>InValid Password</Text>
const CheckPassword = ({ isValid }) => {

    if (isValid) {

        return <ValidPassword />

    }
    return <InValidPassword />
}

const ConditionalComponent = () => {
    return (
        <View>
            <CheckPassword isValid={false} />
        </View>
    )
}

export default ConditionalComponent

const styles = StyleSheet.create({})