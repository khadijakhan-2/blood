import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text,TextInput, View ,Button,Image} from 'react-native';
import Welcome from './Welcome';

function Home(props) {
  
  
    const [name,setName] =useState("")
    const [pass,setPass] =useState("")
  
    const submit =()=>{
    let user ={
      name,
      pass
    }
    
    console.log("User-----",user)
  }
  
    return (
  
      
      <View style={styles.container}>
      
        <StatusBar style="auto" />
  
       <View  style={styles.main}>
  
  <Image style ={{height :200, width :250   ,borderRadius :8,}} source ={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUWEE2oN4t8_4btDnGhXJOsCmIFF5ZspDwg&usqp=CAU"}}/>
     <TextInput placeholder =" Enter Your Name " style ={{backgroundColor : 'red',color: 'white', marginTop :12, width :250 , height : 50 ,borderRadius :4}} onChangeText = {(e) => setName(e)}></TextInput>
  
  
     <TextInput placeholder =" Enter Your Password " style ={{backgroundColor : 'red',marginBottom:10, color: 'white', width :250 , marginTop:8, height : 50 ,borderRadius :4}}  onChangeText = {(d) =>setPass (d)}></TextInput>
  
  
  
  
  
  
        
        <Button  onPress= {() =>props.navigation.navigate ( Welcome )}title="Login"></Button>
          
      </View>
    
  
  </View>
  
  
  
  
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:' rgba(45,90,2,3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    
      main: {
        flex: 2,
      backgroundColor:' rgba(255 ,255,255,255)',
        alignItems: 'center',
        marginTop :30,
        justifyContent: 'center',
        height :20 ,
        width :300,
        
        padding:10,
        margin:100,
      },
  
  });
  
  
export default Home;