import React from 'react';
import 'react-native-gesture-handler';
import { View,StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import {purple,white} from './utils/stylecolors'
import AddDeckItem from './components/AddDeckItem'
import DeckInfoView from './components/DeckInfoView'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import decks from './reducers'
import AddCard from './components/AddCard'
import { Constants } from 'react-native-unimodules';
import TryQuiz from './components/TryQuiz'

const MyStatusBar=({backgroundColor,...props})=>{
  return(
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
const CreateTabs = createBottomTabNavigator() 

const Tabcontrol= ()=>(
    <CreateTabs.Navigator>
      <CreateTabs.Screen name='DeckList' component={DeckList}/>
      <CreateTabs.Screen name='AddDeck' component={AddDeckItem}/>
    </CreateTabs.Navigator>
)

const InStack = createStackNavigator();
const store = createStore(decks)
export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
        <NavigationContainer>
          <InStack.Navigator>
            <InStack.Screen name="Tabcontrol" component={Tabcontrol} options={{title:'Deck List'}}/>
            <InStack.Screen name="DeckInfoView" component={DeckInfoView}
            options={
              {
                title:"Deck View"
              }
            }
            />
            <InStack.Screen name="AddCard" component={AddCard}
            options={
              {
                title:'Add Card'
              }
            }
            />
            <InStack.Screen name="TryQuiz" component={TryQuiz}
            options={
              {
                title:'Quiz'
              }
            }
            />
          </InStack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
