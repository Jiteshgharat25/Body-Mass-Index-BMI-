import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height1: '',
      height2: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height1: text })
      this.setState({ height2: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height1, height2, weight) => {
      //calculation
      var result = (parseFloat(weight)*703)/((parseFloat(height1)*12+parseFloat(height2))*((parseFloat(height1)*12+parseFloat(height2));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }

   NavigateActivityFunction = () =>
 {
    this.props.navigation.navigate('BMI1');
    
 }
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>BMI Calculator</Text>
<Button onPress = { this.NavigateActivityFunction } title = 'Click to calculate BMI Height in cm and weight in Kg'/>
            <Text  style = {styles.label}>Height in feet and inch</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height in feet"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height in inch"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
<Text  style = {styles.label}>Weight in kg</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight in pounds"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height1, this.state.height2, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: '#ff6666',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     // fontWeight:"bold",
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
   }
})