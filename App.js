import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from "./components/GoalItem"

export default function App() {
  
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // console.log("re-rendering");
  // console.log(goals);

  const addGoalHandler = (goalTitle) => {

    if (goalTitle.length === 0) {
      return;
    }
    setGoals(currentGoal => [...goals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    // console.log("the goal id to be deleted is: ", goalId);
    // console.log(goals);
    setGoals(currentGoal => {return goals.filter((goalunit) => goalunit.id !== goalId);
    });
  }

  const cancelGoalHandler= () => {
    setIsAddMode(false);
  };


  return (
    <View  style={styles.screen}>
      <View style={styles.firstButton} ><Button title="ADD NEW TASK" onPress={() => setIsAddMode(true)} /></View>
      <GoalInput visible = {isAddMode} onAddGoal= {addGoalHandler} onCancel = {cancelGoalHandler} />
      <View>
        <FlatList
        keyExtractor={(theText, index) => theText.id}  
        data={goals} 
        renderItem={(goal,key) => <GoalItem id={goal.item.id} onDelete={removeGoalHandler} title={goal.item.value} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  firstButton: {
    marginBottom:20
  }
});
