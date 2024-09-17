import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ValidPassword = () => <Text>Valid Password</Text>
const InValidPassword = () => <Text>InValid Password</Text>
const CheckPassword = ({ isValid }) => {

    if (isValid) {

        return <ValidPassword />

    }
    // return <InValidPassword />

    return isValid ? < ValidPassword /> : <InValidPassword />
}

const TernaryComponent = () => {
    return (
        <View>
            <CheckPassword isValid={false} />
        </View>
    )
}

export default TernaryComponent

const styles = StyleSheet.create({})