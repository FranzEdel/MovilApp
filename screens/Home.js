import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { Card, FAB } from 'react-native-paper';

/* function Home()
{
    return (
        <Text>Hola desde Home</Text>
    )
} */

const Home=({navigation})=>{
    const data = [
        {id:1, nombre:'Franz', cargo:'Programador'},
        {id:2, nombre:'Ana', cargo:'Contadora'},
        {id:3, nombre:'Juan', cargo:'Abogado'},
        {id:4, nombre:'Maria', cargo:'Secretaria'},
    ]
    const renderList = ((item)=>{
        return (
            <Card 
            style={ styles.mycard }
            onPress={() => navigation.navigate('Profile')}
            >
                <View style={ styles.cardView }>
                    <Image 
                        style={{ width:60, height:60, borderRadius:30 }}
                        source={{ uri:'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }}

                    />
                    <View style={{ marginLeft:10 }}>
                        <Text style={ styles.text }>{ item.nombre }</Text>
                        <Text style={ styles.text }>{ item.cargo }</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return(
        <View style={{ flex:1 }}>
            <FlatList 
                data = { data }
                renderItem = {({item}) => {
                    return renderList(item)
                }}
                keyExtractor = { item => `${item.id}` }
            />

            <FAB
                onPress={() => navigation.navigate('CreateEmployee')}
                style={styles.fab}
                small={ false }
                icon="plus"
                theme={{ colors:{accent:"#006aff"} }}
            />

            {/* { renderList } */}
        </View>
        
        
   
    )
}

const styles = StyleSheet.create({
    mycard:{
       margin:5,
       padding:5 
    },
    cardView:{
        flexDirection:'row',
        padding:6
    },
    text:{
        fontSize:20,
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home