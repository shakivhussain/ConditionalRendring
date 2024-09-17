import { FlatList, StyleSheet, Text, View } from 'react-native'
import ConditionalComponent from '../components/ConditionalComponent'
import AndOperator from '../components/AndOperator'
import TernaryComponent from '../components/TernaryComponent'


const Index = () => {

    const groceries = ['milk', 'eggs', 'cheese']

    return (
        <View>


            {/* {groceries.length > 0 && (<Text>You Have {groceries.length} items in ypur cart</Text>)}

            <FlatList
                data={groceries}
                renderItem={({ item }) => <ConditionalComponent />}
            /> */}

            {/* <ConditionalComponent />


            <AndOperator /> */}
            <TernaryComponent />

        </View>
    )
}

export default Index

const styles = StyleSheet.create({})