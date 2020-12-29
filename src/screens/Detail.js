import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Clipboard,
  Alert,
  Button
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import ModalCard from './ModalCard';
import ListCard from './ListCard';

export default class Detail extends React.Component{
  async writeToClipboard(text) {
    await Clipboard.setString(text);
    Alert.alert('Скопировано.', 'После оплаты обязательно сохраните чек и нажмите кнопку "Загрузить чек""', [
      {text: 'Ok'}
    ])
  }
  render(){
    return(
      <ImageBackground
        source={require('../images/back2.png')}
        style={{width:"100%",height:"100%"}}>
        <View style={style.header}>
          <Text style={{width:'90%'}}></Text>
          <Icon name="arrow-left" size={33} color="#ffffec" style={{width: '10%'}} onPress={()=>this.props.navigation.navigate('Home')}/>
        </View>
        <View style={style.container}>
          <View style={style.tariff}>
            <Image source={require('../images/msg3000.png')} style={style.image}></Image>
          </View>
          <Text style={style.titleTariff}>Тариф 3000 за 400 рублей</Text>
        </View>
        <View style={style.tariffBox}>
          <Text style={style.title}>Реквизиты для оплаты будут скопированны при нажатии в буфер обмена</Text>
          <TouchableOpacity style={style.yamoney} onPress={() => this.writeToClipboard('410012930313327')}>
            <View>
              <Text style={{fontSize: 20}}>Яндекс Деньги</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.qiwi} onPress={() => this.writeToClipboard('79103514141')}>
            <View>
              <Text style={{fontSize: 20}}>Qiwi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tinkoff} onPress={() => this.writeToClipboard('5536 9137 9992 7500')}>
            <View>
              <Text style={{fontSize: 20}}>Tinkoff</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.sberbank} onPress={() => this.writeToClipboard('4274 3200 2817 5670')}>
            <View>
              <Text style={{fontSize: 20}}>Sberbank</Text>
            </View>
          </TouchableOpacity>
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
    paddingHorizontal:40,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  tariff: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center'
  },
  image: {
    width:56,
    height:46,
    alignSelf:'center',
    marginTop: 22
  },
  titleTariff: {
    color: '#fff',
    fontSize: 22,
    padding: 14
  },
  tariffBox: {
    width: '80%',
    height: '50%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 30,
    padding:25
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  headers: {
    fontSize: 18
  },
  paragraph: {
    fontSize: 18,
    padding:10,
  },
  yamoney: {
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#FFF700',
    marginTop: 10
  },
  qiwi: {
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#83F03C',
    marginTop: 10
  },
  tinkoff: {
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#FFBB00',
    marginTop: 10
  },
  sberbank: {
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#36BBCE',
    marginTop: 10
  }
})