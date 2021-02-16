import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function header() {
    return (
        <View style={styles.header}>
      <Image style={styles.img} source=
      { 
        require('../assets/instalogo.png')
        }
      />
     
     <View style={styles.headerRight}>
     <Icon
        name='search'
        type='font-awesome-5'
        />
        <Icon
        name='facebook-messenger'
        type='font-awesome-5'
        />
      
     </View>
      </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomWidth:0.1,
        borderBottomColor:'grey',
        position:'sticky',
        top:0,
        left:0,
        zIndex:50,
        
        
      },
      headerRight:{
         flexDirection:'row',
         justifyContent:'space-evenly',
         width:80
      },
     
      img:{
        margin:10,
        width:150,
        height: 40,
        resizeMode: 'contain',
        
      }
})

