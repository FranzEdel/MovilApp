import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

const Profile=()=>{
    return(
        <View style={ styles.root }>
            <LinearGradient
            colors={['#47a659','#e3ffe8']}
            style={{ height:'20%' }}
            />
            <View style={{ alignItems:'center' }}>
                <Image 
                style={{ width:150,height:150,borderRadius:150/2,marginTop:-75 }}
                source={{ uri:'https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }}
                />
            </View>
            <View style={{ alignItems:'center',margin:15 }}>
                <Title>Franz Edel</Title>
                <Text style={{ fontSize:17 }}>Web Developer</Text>
            </View>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={35} color="#47a659" />
                    <Text style={styles.myText}>franz@mail.com</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={35} color="#47a659" />
                    <Text style={styles.myText}>70329171</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={35} color="#47a659" />
                    <Text style={styles.myText}>3000 bs</Text>
                </View>
            </Card>
            <View style={{ flexDirection:'row',justifyContent:'space-around',padding:10 }}>
                <Button 
                style={ styles.inputStyle }
                icon='account-edit'
                mode='contained'
                theme={ theme }
                onPress={ () => setModal(true) }
                >
                    Editar
                </Button>
                <Button 
                style={ styles.inputStyle }
                icon='delete'
                mode='contained'
                theme={ theme }
                onPress={ () => setModal(true) }
                >
                    Eliminar Empleado
                </Button>
            </View>
        </View>
        
    )
}

const theme = {
    colors:{
        primary:'#006aff'
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:5
    },
    cardContent:{
        flexDirection:'row',
        padding:7
    },
    myText:{
        fontSize:17,
        margin:4,
        marginLeft:8
    }
})

export default Profile