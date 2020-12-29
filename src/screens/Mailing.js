import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import {View,Text,Image,ImageBackground,TextInput,StyleSheet} from 'react-native';

export default class Mailing extends React.Component {
    state = {
        image: null,
      };
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    };
  
    render(){
      return(
        <ImageBackground
          source={require('../images/back.png')}
          style={{width:"100%",height:"100%"}}>
            <View style={style.header}>
                <Text style={{width:'90%'}}></Text>
                <Icon name="arrow-left" size={33} color="#ffffec" style={{width: '10%'}} onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        <View style={style.container}>
            <TextInput style={style.input} placeholder="Здравствуйте, %name%!"/>
            <TextInput 
                style={style.bodytext} 
                placeholder="- жирным: *текст* 
                - курсивом: _текст_
                - зачеркнутым: ~текст~"
                multiline={true}
                numberOfLines={7}/>
            <View style={style.buttons}>
                <TouchableOpacity 
                  onPress={() => this._pickDocument()}
                  style={style.buttonclip}>
                    <Image source={require('../images/clip.png')} style={style.image}/>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => this._pickDocument()}
                  style={style.buttonclip}>
                    <Image source={require('../images/image.png')} style={style.image}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Начать рассылку</Text>
                </TouchableOpacity>
            </View>
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
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    input: {
        width: '90%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        fontSize:18,
        margin:5,
    },
    bodytext: {
        width: '90%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        fontSize:18,
        margin:5,
        justifyContent: 'flex-start',
    },
    buttons: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    button: {
        width: '90%',
        padding: 15,
        backgroundColor: '#9FEE00',
        borderRadius: 8,
        fontSize:18,
        margin:5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
    },
    buttonclip: {
        width: '90%',
        padding: 15,
        backgroundColor: '#9FEE00',
        borderRadius: 8,
        fontSize:18,
        margin:5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60
    },
    image: {
        width: 45,
        height: 40,
    },
    title: {
        fontSize: 22,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    errorMsg: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ED002F',
    }
})