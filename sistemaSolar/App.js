import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';

import {planets} from './planets.js'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.appTitle}>Explorador de planetas</Text>
      
      <View style={styles.planetContainer}>
        <ScrollView>{
        planets.map((planet) => (
          <View key={planet.nome} style={styles.planetWrapper}>
          <Text style={styles.planetTitle}>{planet.nome.toLocaleUpperCase()} </Text>
          <Image style={styles.planetImage} source={{uri: planet.img}} />
          <Text style={styles.planetDescription}>{planet.descricao} </Text>
        </View>
        ))
      }</ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1F2B45',
    alignItems: 'center',
  },
  appTitle: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: '30',
    padding: 20,
  },
  planetContainer: {
    backgroundColor:'#000',
    color:'#FFF',
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planetWrapper: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
  planetTitle: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: '20',
    paddingTop: 20,
    textAlign: 'center'
  },
  planetImage: {
    width: 200,
    height: 200,
  },
  planetDescription:{
    color: '#FCFCFC',
    textAlign:'justify',
    padding: 20,
  }
});
