
//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, Dimensions, TouchableOpacity,TextInput,StyleSheet,KeyboardAvoidingView,Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Camera } from 'expo-camera';
import { SearchBar } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import t from 'tcomb-form-native';
import '@expo/vector-icons';
import logo from './assets/logo.png';
//import MadeWithLove from 'react-native-made-with-love';

function SettingsScreen({ navigation }) {
  
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color:"black" }}>
 <SearchBar 
          //showLoading
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
        />       
      <Image source={{ uri: "https://img.lovepik.com/element/40064/4239.png_1200.png" }} style={{ width: 350, height: 420,   }} />
      

      <Button 
        title="Welcome to BUPP"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
      
  );
  }

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <Image source={{ uri: "https://cdn.iconscout.com/icon/free/png-512/noise-1659489-1410011.png" }} style={{ width: 350, height: 420,   }} />
      <Button
        title="We are Here to Help!"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <MapView style={{ width: Dimensions.get('window').width,  height: Dimensions.get('window').height}} />
     
    </View>
  );
}

function DetailsScreen({ navigation }) {

    
     return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:50 }}>
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
        <SearchBar 
          //showLoading
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
        />
        
        <Form ref={c => (this.loginform = c)} type={User} />
        <Button title="Login" />
      </KeyboardAvoidingView>
      <View style={styles.MainContainer}>
 
      <Text style={styles.textStyle}> {'\u00A9'} Tarun Chandra </Text>     
 </View>
          </View>
  );
    
}

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Form = t.form.Form;

  // Form model
  const User = t.struct({
    email: t.String,
    password: t.String,
    rememberPassword: t.Boolean,
  });
  
export default function App() {
  
  return (
    
    <NavigationContainer>
      
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'App') {
            iconName = focused ? 'ios-apps' : 'ios-apps';
          } else if (route.name === 'Locate') {
            iconName = focused ? 'ios-locate' : 'ios-locate';
          }
          if (route.name === 'Camera') {
            iconName = focused ? 'ios-camera' : 'ios-camera';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >


        <Tab.Screen name="App">
          {() => (
            
             <SettingsStack.Navigator>
                <SettingsStack.Screen 

                  name="BUPP"
              
                
                color="red"
                component={SettingsScreen}
              />
            
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Locate">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Location" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Camera">
        
        
          {() => (
            <HomeStack.Navigator>
           
              <HomeStack.Screen name="Camera" component={DetailsScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Profile" component={DetailsScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
          
}

const styles= StyleSheet.create({
  
  container: {
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 30,
    backgroundColor: 'white',
    paddingTop:50
    },
    MainContainer :{
 
      flex:1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
        
      },
     
      textStyle:{
        
        color: '#000',
        fontSize: 20
      }     
});               

