import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


export default class App extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   inHeight = (text) => {
      this.setState({ height: text })
   }
   inWeight = (text) => {
      this.setState({ weight: text })
   }
   Result = (height, weight) => {
   
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
     
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight, Dude You gotta Gain some weight ASAP!!'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'YEAH!!! You are healthy and normal'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight, Please try to reduce your Weight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese,Please take care of Your health,its high time'})
      }
      else{
         alert('Please Enter Correct Data');
         this.setState({BmiResult:'Please type again'})
      }
   }
   render() {
      return (
   <View style = {styles.container}>
         <Text style={styles.title}>
            BMI Calculator
         </Text>
         <Text  style = {styles.label}>
            Height:
         </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (Cm)"
               keyboardType="number-pad"
               onChangeText = {this.inHeight}
            />
         <Text  style = {styles.label}>
            Weight:
         </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (Kg)"
               keyboardType="number-pad"
               onChangeText = {this.inWeight}
               />
            
         <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.Result(this.state.height, this.state.weight)
               }>
            <Text style = {styles.submitButtonText}> 
            Calculate 
            </Text>
         </TouchableOpacity>
      <View style = {styles.final} >
         <Text style = {styles.output}>
            {this.state.bmi}
         </Text>
         <Text style = {styles.resultText}>
               {this.state.BmiResult}
         </Text>
      </View>
   </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex:1,
      paddingTop: 23,
      backgroundColor: '#708DD1',
      
   },
   input: {
      margin: 15,
      fontSize: 25,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius:20
   },
   submitButton: {
      backgroundColor: '#20E3BC',
      padding: 10,
      margin: 15,
      borderRadius:20
   },
   submitButtonText:{
      textAlign: "center",
      color: 'black',
      fontSize: 18,
      
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      
      paddingBottom:60,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
      color: '#3A108B'
      
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'white'
   },
   label:{
      marginLeft: 15,  
      fontSize: 25,
   },
   final:{
      margin:10,
      backgroundColor: '#646EEA',
      borderRadius:20
      
      
   }
});