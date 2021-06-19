import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput, } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Search from "./Screens/searchscreen";
import Booktransaction from "./Screens/booktransactionscreen";

export default class App extends React.Component {
  render(){
    return(

 <AppContainer/>

    )
  }
}
const Tabnavigator=createBottomTabNavigator({
  Transaction:{screen:Booktransaction},
  Search:{screen:Search},
  
},
{
  defaultNavigationOptions :({navigation})=>(
    {
      tabBarIcon:({})=>{
        const routename=navigation.state.routeName
        if (routename==="Transaction"){
          return(
            <Image
            source={require("./book.png")}
            style={{width:40,height:35}}
            />
          )
        }
        else if (routename==="Search"){
          return(
            <Image
            source={require("./searchingbook.png")}
            style={{width:40,height:35}}
            />

          )
        }
      }
    }
  )
})

const AppContainer=createAppContainer(Tabnavigator)