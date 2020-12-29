import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    Linking
} from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            errorVisible: false
        }

        this.signin = this.signin.bind(this)
    }

    signin() 
    {
        if (this.state.password == "3993" && this.state.login == "Apache") {
            this.setState({errorVisible: false})
            this.props.navigation.navigate('Home')
        } else {
            this.setState({errorVisible: true})
        }
    }

    componentDidMount()
    {
        const url = `whatsapp://send?text=hello`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert(
                    'Alert',
                    'WhatsApp is not installed',
                )
            }
        });
    }

    render() {
        return (
            <ImageBackground
                source={require('../images/back.png')}
                style={style.container}>
                <Text style={style.title}>АВТОРИЗАЦИЯ</Text>
                {this.state.errorVisible ? <Text style={style.errorMsg}>Пароль или логин неправильные</Text>:null}
                <TextInput 
                    style={style.input} 
                    placeholder="Ваш логин"
                    onChangeText={login => this.setState({login})}
                    value={this.state.login}/>
                <TextInput 
                    style={style.input} 
                    placeholder="Пароль" 
                    secureTextEntry={true} 
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}/>
                <TouchableOpacity style={style.button} onPress={this.signin}>
                    <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Нет аккаунта?</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        fontSize:18,
        margin:5,
    },
    button: {
        width: '90%',
        padding: 15,
        backgroundColor: '#9FEE00',
        borderRadius: 8,
        fontSize:18,
        margin:5,
        alignItems: 'center',
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