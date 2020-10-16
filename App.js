
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigation from './Navigation'
import reducers from "./redux/reducer/index.reducer";
var middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);
export default function App() {
  return (
    <Provider store={store}>
         <Navigation/>
    </Provider>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
