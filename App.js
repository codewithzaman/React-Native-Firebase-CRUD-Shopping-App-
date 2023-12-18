import { StyleSheet, Text, View,SafeAreaView,Pressable, TextInput, FlatList } from 'react-native';
import ShoppingItems from './components/ShoppingItems';
import { MaterialIcons } from '@expo/vector-icons';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from './firebase/FirebaseConfig';
import { useState,useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [title,setTitle] = useState('');
  const [shoppingList,setShoppingList] = useState([])

  const addShoppingItem = async()=>{
    try {
      const docRef = await addDoc(collection(db, "shopping"), {
        title: title,
        isChecked: false
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const getShoppingList = async()=>{
    const querySnapshot = await getDocs(collection(db, "shopping"));
querySnapshot.forEach((doc) => {
  console.log(doc.id,doc.data());
  setShoppingList({
    ...doc.data(),
    id: doc.id,
  })
});
  }
  useEffect (()=>{
    getShoppingList();
  },[]);
  return (
    <SafeAreaView style={styles.container}>
       <View style = {styles.header}>
        {/* Heading */}

      <Text style = {styles.heading}>Shopping List</Text>

      {/* no of shopping items */}
        <Text style = {styles.noOfItems}>
            (3)
        </Text>
      {/* delete all */}
      <Pressable>
     <MaterialIcons name="delete" size={30} color="black" />
     </Pressable>
    </View>
    {/* flatlist */}
    {shoppingList.length > 0 ?( 
    <FlatList 
    data={shoppingList}
    renderItem={({item})=><ShoppingItems title={item.title}/>}
    keyExtractor={(item)=>item.id}

    />
    ):(
      <ActivityIndicator/>
    )}
   
      
    {/* text input  */}
      <TextInput
      placeholder='Enter Shopping item'
      style = {styles.input}
      value={title}
      onChangeText={(text)=>setTitle(text)}
      onSubmitEditing={addShoppingItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    padding:10,
    paddingTop:20,
    marginTop:30,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10

},
heading:{
fontSize:30,
fontWeight:'500',
flex:1,

},
noOfItems:{
fontSize:30,
fontWeight:'500',
marginRight:20
},
input:{
  backgroundColor:'lightgray',
  padding:10,
  fontSize:15,
  width:'90%',
  alignSelf:'center',
  borderRadius:10,
  marginTop:'auto',
  marginBottom:10

}
});
