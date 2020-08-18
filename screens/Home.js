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
        {id:'1', nombre:'Franz',email:'franz@mail.com',salario:'3000',telefono:'123', cargo:'Programador',foto:'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'},
        {id:'2', nombre:'Ana',email:'ana@mail.com',salario:'2500',telefono:'456', cargo:'Contadora',foto:'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id:'3', nombre:'Juan',email:'juan@mail.com',salario:'2000',telefono:'789', cargo:'Abogado',foto:'https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id:'4', nombre:'Maria',email:'maria@mail.com',salario:'1500',telefono:'987', cargo:'Secretaria',foto:'https://images.unsplash.com/photo-1585925130019-eeafcd31b7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    ]
    const renderList = ((item)=>{
        return (
            <Card 
            style={ styles.mycard }
            onPress={() => navigation.navigate('Profile',{ item })}
            >
                <View style={ styles.cardView }>
                    <Image 
                        style={{ width:60, height:60, borderRadius:30 }}
                        source={{ uri: item.foto  }}

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