import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import {View,Text,Image,ImageBackground,TextInput,StyleSheet} from 'react-native';

export default class Profile extends React.Component{
  render(){
    return(
        <ImageBackground
        source={require('../images/back2.png')}
        style={{width:"100%",height:"100%"}}>
            <View style={style.header}>
                <Icon name="exit-run" size={33} color="#ffffec" style={{width: '10%'}} onPress={()=>this.props.navigation.navigate('Login')}/>
                <Text style={{width:'80%'}}></Text>
                <Icon name="arrow-left" size={33} color="#ffffec" style={{width: '10%'}} onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
            <View style={style.container}>
                <Icon name="account-circle" size={99} color="#ffffec" onPress={()=>this.props.navigation.navigate('Profile')}/>
                <Text style={style.username}>
                    Apache
                </Text>
            </View>
        </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
    header: {
        flexDirection:"row",
        marginTop:40,
        alignItems:"center",
        paddingHorizontal:40
    },
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 10
    }
})