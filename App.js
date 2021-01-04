import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0.0,
      botao: 'VAI',
      ultimo: null
    }

    this.relogio = null;
    this.startStop = this.startStop.bind(this)
    this.limpar = this.limpar.bind(this)
  }


  startStop() {
    if (this.relogio != null) {
      clearInterval(this.relogio)
      this.relogio = null
      this.setState({
        botao: 'VAI',
        ultimo: 'Última marcação: '+ this.state.time.toFixed(1)
      })
    } else {
      this.setState({
        botao: 'PARAR'
      })
      this.relogio = setInterval(() => {
        this.setState({
          time: this.state.time + 0.1
        })
      }, 100)
    }

  }

  limpar() {
    this.setState({
      time: 0.0,
      botao: 'VAI'
    })
    clearInterval(this.relogio)
    this.relogio = null
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro} />
        <Text style={styles.relogio}>{this.state.time.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.startStop}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ultimo}>{this.state.ultimo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  relogio: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 60,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  ultimo: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;