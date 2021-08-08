import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Card } from 'react-native-paper';
import  Icon  from "react-native-vector-icons/MaterialIcons";
import styles from "./AccountSettingsScreen.styles";



export function AccountSettingsScreen() {
    const user = useSelector(state => state.user)
    const subjects = useSelector(state => state.subjects)
   
    var isMale, undef;
    if( user.gender )
        isMale = user.gender.trim() === "Masculino";
    else
        undef = true;

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.profile}>
                {undef ? <Avatar.Image size={100} source={require("../../assets/avatar.jpg")}/> :
                    isMale ?
                    <Avatar.Image size={100} source={require("../../assets/avatarM.png")} /> :
                    <Avatar.Image size={100} source={require("../../assets/avatarF.png")} />
                }
                <View>
                    <Text style={styles.textName}>{user.name}</Text>
                    <Text style={styles.text}>Student</Text>
                </View>        
            </View>
            <View style={styles.board}>
                <View style={styles.dailyTask}>
                    <Text style={styles.numberDaily}>7</Text>
                    <Text  style={styles.dailyText}>Week Tasks</Text>
                </View>
                <View style={styles.dailyTask}>
                    <Text style={styles.numberDaily}>7</Text>
                    <Text  style={styles.dailyText}>Week Tests</Text>
                </View>
            </View>
            <View style={styles.mySubjects}>
                {subjects.map((subject) => (
                    <Card.Title 
                    key={subject.id}
                    title={subject.name}
                    left={(props) => <Icon {...props} name="menu-book" />}
                />
                ))}
            </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
