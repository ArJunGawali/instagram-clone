import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Icon
            name='home'
            type='font-awesome-5'
            />
            <Icon
            name='play'
            type='font-awesome-5'
            />
            <Icon
            name='plus-square'
            solid 
            type='font-awesome-5'
            />
            <Icon
            solid 
            name='heart'
            type='font-awesome-5'
            />
            <Icon
            name='circle'
            type='font-awesome-5'
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        bottom:0,
        left:0,
        position:'fixed',
        zIndex:50,
        backgroundColor:'white',
        width:'100%',
        height:50,
        padding:10,
    }

})
