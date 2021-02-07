import React, {useState} from 'react';
import { StyleSheet, Text,TextInput, View,Image ,Button } from 'react-native';


 function Welcome(props) {
   
  const [Name,SetName]= useState("")
  const [Age ,SetAge] = useState("")
  const [Gender,SetGender ] =useState("")
  const [Blood,SetBlood] =useState("")

  let users ={
    Name,
    Age,
    Gender,
    Blood
  }
  
  
  const Add=()=>{
    
    alert(users)
 
  }



  
 
  
  return (
    <View >
      
      <Image style={{width:350,height:180}}  source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j7zDos3QtXctdF8Xlfs8L3ljO1dpVpnhvw&usqp=CAU"}}/>
      <View style={styles.container}>

<TextInput style={{backgroundColor:'orange', borderRadius:5, marginTop:15}} onChangeText={(d)=>SetName(d)} placeholder="Enter Your Name ">Name</TextInput>

<TextInput style={{marginTop:15 ,backgroundColor:'brown',  borderRadius:5, color:'white'}} onChangeText={(d)=>SetAge(d)} placeholder="Enter Your Age ">Age</TextInput>


<TextInput style={{backgroundColor:'gray', borderRadius:5, marginTop:15}} onChangeText={(d)=>SetGender(d)} placeholder="Enter Your Gender ">Gender</TextInput>


<TextInput style={{backgroundColor:'yellow', borderRadius:5, marginTop:15,marginBottom:15}} onChangeText={(d)=>SetBlood(d)} placeholder="Enter Your Blood Group ">Blood Group</TextInput>
    
 
  
    
<Button  onPress= {() =>props.navigation.navigate ("Contact")}

title="Add+"></Button>
        
                </View>
    </View>
  );
  }
const styles=StyleSheet.create({
    container :{
    
        borderRadius:5,
        marginTop:5,
       
        backgroundColor:' rgba(255 ,255,255,255)',
       marginLeft:60,
        width:250,
        height:300
    }
})
export default Welcome;