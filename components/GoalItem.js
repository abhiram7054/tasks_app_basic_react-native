import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style = {styles.taskList}>
                <Text> {props.title} </Text>
            </View>  
        </TouchableOpacity>  
    );

};

const styles = StyleSheet.create({
    taskList: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#e0e6d1",
        borderColor: "#e0e6d1",
        borderWidth:1,
        borderRadius: 100,
      }
});

export default GoalItem;