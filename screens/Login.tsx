import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [rePass, setRepass] = useState('');
    const [isRegister, setisRegister] = useState(false );


    const handleLogin = () => {
        console.log(email, password);
    }

    return (
        <ImageBackground source={require("../assets/images/bg-3.png")}
            resizeMode='cover' style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.loginformcontainer}>
                    <View style={styles.inputcontainer}>
                        <Text style={styles.inputlabel}>Email</Text>
                        <TextInput
                            placeholder='email'
                            maxLength={100}
                            value={email}
                            onChangeText={val => setEmail(val)}
                            style={styles.input} />
                    </View>

                    <View style={styles.inputcontainer}>
                        <Text style={styles.inputlabel}>Password</Text>
                        <TextInput
                            placeholder='Password'
                            maxLength={100}
                            value={password}
                            onChangeText={val => setPassword(val)}
                            secureTextEntry
                            style={styles.input} />
                    </View>
                    {isRegister && (<View style={styles.inputcontainer}>
                        <Text style={styles.inputlabel}>Confirm Password</Text>
                        <TextInput
                            placeholder='Confirm Password'
                            maxLength={100}
                            value={rePass}
                            onChangeText={val => setRepass(val)}
                            secureTextEntry
                            style={styles.input} />
                    </View>)}
                </View>
            </View>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => setisRegister(true)}
            style={styles.buttonRegister}>
                <Text> Register</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    loginformcontainer: {
        width: Dimensions.get('window').width - 40
    },
    inputcontainer: {
        marginTop: 8,
        marginBottom: 16,
    },
    inputlabel: {
        fontWeight: '500',
        color: '#212121',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#fafafa',
        marginTop: 8,
        padding: 10,
        borderRadius: 100,
        minHeight: 40,
    },
    buttonLogin: {
        height: 40,
        backgroundColor: 'coral',
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#fafafa'
    },
    buttonRegister: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})