/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

export default function Home() {

  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [alturaInput, setAlturaInput] = useState();
  const [imc, setImc] = useState(0);
  const [imcClassificado, setImcClassificado] = useState();
  const [pesoIdeal, setPesoIdeal] = useState();

  const calcularImc = () => {
    Keyboard.dismiss();
    //console.log(altura);
    if (peso == undefined || peso == '' || altura == undefined || altura == ''){
      return Alert.alert('Antenção', 'Preencha Todos Os Campos');
    }
    const imcCalculado = (parseFloat(peso) / (parseFloat(altura).toFixed(2) * parseFloat(altura)).toFixed(2));
    setImc(imcCalculado);
    //console.log(imcCalculado.toFixed(2));
   if (imcCalculado.toFixed(2) < 17 ){
    setImcClassificado('Muito Abaixo do Peso');
   }
   if (imcCalculado.toFixed(2) >= 17 && imcCalculado.toFixed(2) < 18.5 ){
    setImcClassificado('Abaixo do Peso');
   }
   if (imcCalculado.toFixed(2) >= 18.5 && imcCalculado.toFixed(2) < 25 ){
    setImcClassificado('com Peso Normal');
   }
   if (imcCalculado.toFixed(2) >= 25 && imcCalculado.toFixed(2) < 30 ){
    setImcClassificado('Acima do Peso');
   }
   if (imcCalculado.toFixed(2) >= 30 && imcCalculado.toFixed(2) < 35 ){
    setImcClassificado('com Obesidade Grau I');
   }
   if (imcCalculado.toFixed(2) >= 35 && imcCalculado.toFixed(2) < 40 ){
    setImcClassificado('com Obesidade Grau II');
   }
   if (imcCalculado.toFixed(2) >= 40){
    setImcClassificado('com Obesidade Grau III');
   }


  };

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize:18}}>Meu IMC</Text>
        </View>
      <View style={styles.form}>
        <Text style={{fontSize: 20}}>Altura</Text>
      <TextInputMask
          placeholder="ex. 1,75"
          style={styles.input}
          type="custom"
          keyboardType="numeric"
          options={{
            mask: '9,99',
          }}
          //value={valorInput}
          placeholderTextColor={'#000'}
          onChangeText={value => {
            setAlturaInput(value);
           // value = value.replace('R$', '');
            value = value.replace(',', '.');
            setAltura(value);
            //console.log(value);
          }}
        />
        <Text style={{marginTop:20, fontSize: 20}}>Peso</Text>
        <TextInputMask
          placeholder="ex. 75.5"
          style={styles.input}
          type="custom"
          keyboardType="numeric"
          options={{
            mask: '99,99',
          }}
          //value={valorInput}
          placeholderTextColor={'#000'}
          onChangeText={value => {
            setPeso(value);
           // value = value.replace('R$', '');
            value = value.replace(',', '.');
            setPeso(value);
            //console.log(value);
          }}
        />
        <TouchableOpacity style={styles.btnCalcular} onPress={ () => calcularImc()}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Calcular</Text>
        </TouchableOpacity>
      </View>

  { imc != 0 &&
      <View style={styles.resultado}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>Seu Imc é: {imc.toFixed(2)}</Text>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Você está {imcClassificado}</Text>
      </View>
}
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  topo:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '90%',
    height: 60,
    marginTop: 20,
    borderRadius: 20,
  },
  form:{
    marginTop: 20,
    width: '90%',
    height: 300,
    backgroundColor: '#9c9c9c',
    borderRadius: 5,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 40,
    alignItems: 'center',
    padding: 10,
  },
  input:{
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#fff',
    width: 120,
    height: 60,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#6d6d6d',
    borderRadius:10,
    fontSize: 28,
  },
  btnCalcular:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '70%',
    height: 40,
    backgroundColor: '#0d3a07',
    borderRadius: 20,
  },
  resultado:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#698169',
    borderTopLeftRadius: 20,
    borderTopRightRadius:10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius:20,
  },
});
