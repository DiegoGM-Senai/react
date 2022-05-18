 import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View, Text, Image ,Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider from './src/component/slider'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});

  
export default function App() {
return( <View style={{ flex: 1,height:'100%',width:'100%' }}>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}></StatusBar>
        <View style={{height:'10%', width:'100%',flexDirection:'row'}}>
          <View style={{justifyContent:'flex-end'}}>
               <Text style={{}}>d</Text>
          </View>
     <View style={{justifyContent:'flex-start' ,}}>
        <Text style={{}}>f</Text>
     </View>
       
        </View>
        <Slider/>
        <View>
<Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={{}}
      />
</View>

    </View>
    
    )
  
  

     
};