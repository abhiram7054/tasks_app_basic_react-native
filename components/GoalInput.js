import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const afterInputHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return(
      <Modal visible={props.visible} animationType="slide" > 
        <View style={styles.insideScreen}>
          <TextInput 
          placeholder="Enter your task here" 
          style={styles.inputText} 
          onChangeText={goalInputHandler}
          value={enteredGoal} 
          />
          <View style={styles.buttonContainer} >
            <View style={styles.button} ><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
            <View style={styles.button}><Button title="ADD" onPress={afterInputHandler} /></View>
          </View> 
        </View>
      </Modal>
      );
};

const styles = StyleSheet.create({
    insideScreen: {
        flex:1,
        flexDirection:"column", //default
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
      },
      inputText:{
        width:300, 
        borderColor:"black", 
        borderWidth:1 , 
        padding:5, 
        marginBottom:10,
        borderRadius: 100,
      },
      buttonContainer: {
        flexDirection: "row-reverse",
        justifyContent: 'space-around',
        width: 230
      },
      button: {
        width: 80,
        // borderColor: "black",
        // borderRadius: 100,
        // borderWidth:1,
      
      }
});

export default GoalInput;