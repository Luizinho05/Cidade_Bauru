import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native'

const App = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.header}>
        <Text style={styles.headerText}>Cidade de Bauru - SP</Text>
      </View>
      <View style={styles.espaço}>
        <Text style={styles.conteudo}>
        Bauru é um munícipio brasileiro do interior de São Paulo, sendo
          o mais populoso do Centro-Oeste paulista. é uma das 19 cidades que
          integram a Região Imediata de Bauru que, por sua vez, é uma das quatro
          regiões imediatas que integram a Região Intermediária de Bauru, que é
          formada por 48 cidades.
        </Text>
        <Image source={require('./image/bauru.jpeg')}
        style={styles.image} />
      </View>
      <View style={styles.espaço}>
      <Text style={styles.conteudoVerde}>
         Bauru é conhecida por um sanduíche que leva o
         mesmo nome, criado pelo advogado bauruense
         Casimiro Pinto Neto no bar Ponto Chic, localizado
         no Largo do Paiçandu, na cidade de São Paulo, em
         1934, quando era aluno da Faculdade de Direito da
         Universidade de São Paulo. Mais tarde, o sanduíche
         ganhou fama devido ao bar "Zé do Esquinão",
         durante décadas instalado no centro urbano de
         Bauru.
        </Text>
        <Image source={require('./image/bauru2.jpg')}
        style={styles.image} />
      </View>
      <View style={styles.secaoesquerda}>
        <Image source={require('./image/bauru3.jpg')}
        style={styles.imagemEsquerda} />
        <Text style={styles.textoGeografico}>
          A área do munícipio, segundo o Instituto Brasileiro de Geografia e Estatística, é de 667,684 km².
          Situa-se a 22°18'54" de latitude sul e 49°03'39" de longitude oeste e está a uma distância de 326 quilômetros a noroeste da capital paulista.
          Limita-se com: Reginópolis (a norte); Arealva (a nordeste); Pederneiras (a leste); Piratininga(a sul); Agudos(sudeste); e Avaí (oeste.)
        </Text>
      </View>
      <View style={styles.secaodireita}>
      <Text style={styles.textoBlueMarinho}>
        Bauru abriga a sede do instituto de Pesquisas Meteorológicas, unidade complementar
        da Universidade Estadual Paulista (UNESP) criada em 1969 com o intuito de realizar Pesquisas
        Meteorológicas voltadas à utilização em previsão do tempo para todo o estado de São Paulo,
        além de quantificar e monitorar tempestades e a pluviosidade nessa região, através do uso de
        um radar metereológico.
      </Text>
      <Image source={require('./image/bauru4.jpg')}
        style={styles.imagemDireita} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  espaço: {
    padding: 10,
    marginTop: 5,
  },
  conteudo: {
    backgroundColor: 'beige',
    fontSize: 16,
    textAlign: 'justify',
    padding: 10
  },
  conteudoVerde: {
    backgroundColor: '#90ee90',
    fontSize: 16,
    textAlign: 'justify',
    padding: 10
  },
  secaoesquerda: {
    flexDirection: 'row',
    padding: 1,
  },
  imagemEsquerda: {
    marginTop: 5,
   width: 150,
   height: 240,
   resizeMode:'cover',
  },
  textoGeografico: {
    backgroundColor: 'whitesmoke',
    fontSize: 15,
    textAlign: 'justify',
    paddingRight: 15,
    width: 250,
    marginTop: 5,
    marginLeft: 5
  },
  secaodireita: {
    flexDirection: 'row',
    padding: 1,
  },
  imagemDireita: {
    marginTop: 5,
   width: 150,
   height: 240,
   resizeMode: 'cover',
  },
  textoBlueMarinho: {
    backgroundColor: '#add8e6',
    fontSize: 15,
    textAlign: 'justify',
    paddingRight: 15,
    width: 250,
    marginTop: 5,
    marginLeft: 5
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  }
});

export default App;