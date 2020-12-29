import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import {View,Text,Image,ImageBackground,StyleSheet} from 'react-native';

export default class Home extends React.Component{
  render(){
    return(
      <ImageBackground
        source={require('../images/back.png')}
        style={{width:"100%",height:"100%"}}>
        <View style={style.header}>
            <Icon name="menu" size={30} color="#84E900" style={{width:'10%'}}/>
            <Text style={{width:'80%'}}></Text>
            <Icon name="account-circle" size={33} color="#ffffec" style={{width: '10%'}} onPress={()=>this.props.navigation.navigate('Profile')}/>
        </View>
        <View style={style.container}>
          <View style={style.mailingBlock}>
            <Text style={style.greeting}>
              Здравствуйте,
            </Text>
            <TouchableOpacity style={style.btn}>
            <Text style={style.textBtn} onPress={()=>this.props.navigation.navigate('Mailing')}>
              Начнем рассылку?
            </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: '45%'}}></View>
          <View style={style.offerContainer}>
            <Text style={style.chooseTariff}>
              Хотите выбрать новый тариф или пополнить сообщения?
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={style.horizontalScrollStyle}
            >
              <View style={style.scrollContainer}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Detail')}>
                <View style={style.boxScroll}>
                  <View style={style.pdScroll}>
                    <Image source={require('../images/msg3000.png')}
                      style={{width:170,height:140}}
                    />
                    <Text style={style.textInScroll}>
                        Пакет на 3000 сообщений {"\n"}за 400 рублей
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
              <View style={style.scrollContainer}>
                <TouchableOpacity>
                <View style={style.boxScroll}>
                  <View style={style.pdScroll}>
                    <Image source={require('../images/msg4000.png')}
                      style={{width:170,height:140}}
                    />
                    <Text style={style.textInScroll}>
                        Пакет на 4000 сообщений {"\n"}за 550 рублей
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
              <View style={style.scrollContainer}>
                <TouchableOpacity>
                <View style={style.boxScroll}>
                  <View style={style.pdScroll}>
                    <Image source={require('../images/msg5000.png')}
                      style={{width:170,height:140}}
                    />
                    <Text style={style.textInScroll}>
                        Пакет на 5000 сообщений {"\n"}за 690 рублей
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
              
            </ScrollView>
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
    paddingHorizontal:40,
    marginTop:25, 
    flex:1, 
    flexDirection:'column',
    alignItems:'center'
  },
  mailingBlock: {
    width:'100%',
    alignItems: 'center',
    height: '15%',
    justifyContent:'center'
  },
  greeting: {
    fontSize: 35,
    color: "#34D800",
    fontFamily:"RobotoBold"
  },
  btn: {
    backgroundColor:"#34D800",
    padding:15,
    alignItems:'center',
    borderRadius:50,
    marginTop: 10,
    width: 260
  },
  textBtn: {
    fontSize:25,
    lineHeight: 25,
    fontFamily:"RobotoRegular",
    color:"#ffffff",
  },
  offerContainer: {
    width:'100%',
    alignItems: 'center',
    height: '75%'
  },
  chooseTariff: {
    fontSize:25,
    lineHeight: 25,
    fontFamily:"RobotoRegular",
    color:"#ffffff",
  },
  horizontalScrollStyle: {
    marginHorizontal:-40,
    marginTop:30
  },
  scrollContainer: {
    backgroundColor:"#ffffff",
    height:200,
    width:190,
    borderRadius:15,
    padding:5,
    marginHorizontal:5
  },
  boxScroll: {
    flexDirection:"row",
    width:150,
    alignItems:"center"
  },
  pdScroll:{
    paddingHorizontal:5,
    paddingVertical:5
  },
  textInScroll:{
    fontFamily:"RobotoRegular",
    fontSize:14,
    paddingTop:5,
    alignSelf: "center",
    color:"#ccccef"
  }
})