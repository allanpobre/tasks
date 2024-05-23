import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import today_image from '../../assets/imgs/today.jpg'

export default class task_list extends Componet{
    render(){
        <View style={styles.container} source={styles.background}>
            <ImageBackground source={today_image}>

            </ImageBackground>
            <View style={styles.taskList}>
                <Text>Lista de Tarefas:</Text>
            </View>
        </View>
    } 
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex: 7
    }
})