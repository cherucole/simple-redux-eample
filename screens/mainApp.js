import React ,{useState}from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MainApp = props =>{
    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }
    return(
        <View style={styles.container}>
            <Button title='Increase' onPress={increment}/>
            <Text>{counter}</Text>
            <Button title='Decrease' onPress={decrement}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})

export default MainApp;

