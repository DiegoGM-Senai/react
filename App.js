 import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View, Text, Image ,Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'slider1',
    text: 'O React Native combina as melhores partes do desenvolvimento nativo com o React, a melhor biblioteca JavaScript da categoria para construir interfaces de usuário. ',
    image: require('./src/img/1.jpg')

  },
  {
    key: '2',
    title: 'slider2',
    text: 'Use um pouco — ou muito . Você pode usar o React Native hoje em seus projetos Android e iOS existentes ou pode criar um aplicativo totalmente novo do zero.',
    image:   require('./src/img/1.jpg')

  },
  {
    key: '3',
    title: 'slider3',
    text: 'As primitivas do React são renderizadas para a interface do usuário da plataforma nativa, o que significa que seu aplicativo usa as mesmas APIs de plataforma nativa que outros aplicativos usam. ',
    image:  require('./src/img/1.jpg')

  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});

  
export default function App() {

  const [ShowHome, setShowHome] = useState(false)

  function renderSlides({ item }) {
    return (

      <View style={{ flex: 1,height:'100%',width:'100%' }}>
        <StatusBar backgroundColor={'blue'} barStyle={'dark-content'}></StatusBar>

        <View style={{height:'8%',flexDirection:'row'}}>
      <Text style={{alignItems:'flex-end'}}>hello</Text>
      <Text>hello</Text>
        </View>
        <View style={{backgroundColor:"#3D73BD",borderColor:'blue', borderWidth:1 ,height:'50%'}}>
          <Image
          source={item.image}
          style={{

            resizeMode: 'cover',
            height: '100%',
            width: '100%',
            alignItems:'flex-end'
           
          }} />
        </View>
        <View style={{ flex: 1 ,borderColor:'blue',height:30, borderWidth:1,}}>

          <Text style={{
             paddingTop:25,
             paddingBottom:10,
             fontSize:20,
             fontWeight:'bold',
             alignSelf:'center'
          }}>
          {item.title}
        </Text>

        <Text style={{
          alignSelf:'center',
          paddingHorizontal:25,
          fontSize:15
        }}>
          {item.text}
        </Text>
        
        </View>
       
      </View>
    )
  }

  if (ShowHome) {
    return <Text> entro </Text>
  } else {
    return(<AppIntroSlider
    
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30
        
      }}
    />
    )
    
  }

 
};