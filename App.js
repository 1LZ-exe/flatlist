import React from 'react';
import { Text, StyleSheet, View,ImageBackground, Image, FlatList } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Cardselecoes from './components/Cardselecoes';
import ROTINAS from './data';
import camisasselecoes from './dataselecoes';
import camisasselecoes2 from './dataselecoes2';



export default function App() {
  return (
  <ImageBackground source={{ uri: 'https://marketplace.canva.com/EAFJkDYXxQg/1/0/900w/canva-dragon-illustration-black-white-phone-wallpaper-TembgGxUe-E.jpg' }} style={estilo.fundo} >
    <View style={estilo.container}>
    
    
      <Header></Header>
      <View style={{ width: '100%'}}>
        <FlatList
          data={ROTINAS}
          horizontal ={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              descricao={item.Descricao}
              porcentagem={item.porcentagem}
              imagem={item.imagem}
              
              tamanho={item.tamanho}
            />
          )}
        />
        <FlatList
          data={camisasselecoes}
          horizontal ={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Cardselecoes
              titulo={item.titulo}
              descricao={item.Descricao}
              porcentagem={item.porcentagem}
              imagem={item.imagem}
              tamanho={item.tamanho}
            />
          )}
        />
        <FlatList
          data={camisasselecoes2}
          horizontal ={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Cardselecoes
              titulo={item.titulo}
              descricao={item.Descricao}
              porcentagem={item.porcentagem}
              imagem={item.imagem}
              tamanho={item.tamanho}

            />
          )}
        />
      </View>
    </View>
    
  </ImageBackground> 
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  fundo: {

    flex: 1,
    width:'100%',
    height:'100%',

  },
  
});
