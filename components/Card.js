import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar ,Icon} from 'react-native-elements'


export default function Card(props) {
    const [count, setCount] = useState(0);
    const [liked, setliked] = useState(false);

    let lastTap = null;
    const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && (now -lastTap) < DOUBLE_PRESS_DELAY) {
      setliked(!liked)
      if(liked){
          setCount(count-1)
      }
      else{
          setCount(count+1)
      }
    } else {
      lastTap = now;
    }
  }
    
  

    return (
        <View style={{ backgroundColor:'white', }}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderRight}>

               


                    <Avatar 
                    overlayContainerStyle={{backgroundColor: 'blue'}}
                    rounded title="A" 
                    containerStyle={{ borderWidth:1,padding:1,borderColor:'green'}}
                    />
                    <Text style={{marginLeft:10}}>{props.name}</Text>
                </View>
                <Icon 
                name='ellipsis-v'
                type='font-awesome-5'
                style={{marginRight:5}}
                />
            </View>
            <Image 
            onClick = {() => handleDoubleTap()}
            style={styles.img}
            source={props.purl}
            
            />

            <View style={styles.cardReact}>
                <View style={styles.cardReactLeft}>
                  { liked ?
                    <Icon 
                    solid
                    color='red'
                    name='heart'
                    type='font-awesome-5'
                    style={{marginRight:10}}
                    onClick={ () => {setliked(!liked);
                        setCount(count-1)
                    }}
                    
                    />:
                    <Icon 
                    
                    name='heart'
                    type='font-awesome-5'
                    style={{marginRight:10}}
                    onClick={ () => {setliked(!liked);
                        setCount(count+1)}}
                    />

                  }


                    <Icon 
                    name='comment'
                    type='font-awesome-5'
                    style={{marginRight:10}}
                    />
                    <Icon 
                    name='paper-plane'
                    type='font-awesome-5'
                    style={{marginRight:10}}
                    />
                </View>
                
                <Icon 
                name='bookmark'
                type='font-awesome-5'
                style={{marginLeft:260}}
                />

            </View>
            <Text style={{marginLeft:15,fontWeight:'bold'}}>{count} Likes</Text>

            <View style={styles.cardFooter}>
                <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                <Text style={{marginLeft:5}}>{props.caption} </Text>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    cardHeader:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:5,
    },
    cardHeaderRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:10,    
    },
    img :{
        height:250,
        resizeMode: 'cover',
    },
    cardFooter:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:5,
        padding:10,
    },
    cardReact:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:5,
        padding:10,
    },
    cardReactLeft:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        // marginHorizontal:5,
        // padding:5,
    },
})
