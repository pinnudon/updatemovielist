import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput,ScrollView,Image,Modal,TouchableHighlight, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




function screen2({ navigation }) {
    const result= navigation.getParam('result')
    <TouchableHighlight 
    key={result.imdbID}
     onPress={()=> Nextpage( navigation.getparam('result.imdbID'))}>
   <View style={styles.result} >
     
     <Text style={styles.heading}>{result.Title}</Text>
   </View>
   </TouchableHighlight>
      const Nextpage= id =>{
        axios(apiurl + "&i=" + id).then(({data})=>{
          let result=data;
          
          setState(prevState=>{
            return{...prevState,selected:result}
          });
        });
      }
      <Modal 
        
        visible={(typeof state.selected.Title !="undefined")}>
          <View style={styles.page}>
            <Text style={styles.pagetitle}>{state.selected.Title}</Text>
            <Text style={{marginBottom:20}}>Rating:{state.selected.imdbRating}</Text>
            <Text style={styles.plot}>{state.selected.Plot}</Text>
        
      </View>
      <TouchableHighlight 
      onPress={()=>setState(prevState=>{ 
        return{...prevState,selected:{}}
      })}>
        <Text style={styles.BackBtn}>Back</Text>
  
      </TouchableHighlight>
      </Modal>
    
  }
  
 
  
  
  
  export default screen2;
  
  const styles = StyleSheet.create(
    {
      container:{
        flex:1,
        backgroundColor: 'black',
      },
    title:{
      color:'white',
      fontSize:32,
    },
  searchbox:{
    color:'black',
    backgroundColor:'white',
    fontSize:20,
    fontWeight:'300',
   padding:20,
   width:'100%',
   marginBottom:40
  },
  results:{
    flex:1,
  },
  result:{
    flex:1,
    width:'100%',
    marginBottom:20
  },
  heading:{
    color:'white',
    fontSize:18,
    fontWeight:'700',
    padding:20,
    backgroundColor:'red'
  },
  page:{
  padding:30
  },
  pagetitle:{
    fontSize:24,
    fontWeight:'700',
    marginBottom:5
  },
  plot:{
    color:'black',
    fontSize:22,
    fontWeight:'800'
  },
  BackBtn:{
    padding:20,
    fontSize:20,
    fontWeight:'700',
    color:'white',
    backgroundColor:'red'
  }
  });
  
  
  
