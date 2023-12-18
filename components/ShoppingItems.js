import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Shopping Object
/*
1.id
2.title
3.isChecked
*/

const ShoppingItems = ({title}) => {
  return (
    <View style={styles.container}>
     {/* checked icon */}
     <Pressable>
        <AntDesign name="checkcircleo" size={24} color="black" />
    </Pressable>
     
     {/* shopping text */}
    <Text style = {styles.text}>{title}</Text>
     {/* delete button */}
     <Pressable>
     <MaterialIcons name="delete" size={24} color="black" />
     </Pressable>
     
    </View>
  )
}

export default ShoppingItems

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        backgroundColor: 'lightgray',
        justifyContent:'space-between',
        padding:10,
        width:'90%',
        alignSelf:'center',
        marginTop:30,
        borderRadius:10,
        marginVertical:10,

    },
    text:{
        flex:1,
        marginLeft:10,
        alignItems:'center',
        fontSize:20,
        fontWeight:'bold'

    }
})