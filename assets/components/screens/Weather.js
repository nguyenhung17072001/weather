import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, ActivityIndicator} from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const BACKGROUND_1 = require('../../../assets/image/blue-sky.jpg');
const API_KEY = '289734bb17b11a3d48ae4fe8fea91337';
// sang 20 C= '#98bbcf';
// toi = '#1e2a36';
// sang nang = '#6eb2df';
const BackDrop =()=> {
    return(
        <View style={[styles.backdropContainer], StyleSheet.absoluteFillObject}>
            <Image 
              style={{width: WIDTH , position: 'absolute', top: -100, opacity: 0.65 }}
              resizeMode='contain'
              source={require('../../image/cloud.png')}/>
        </View>
    )
}

const Weather =()=> {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=289734bb17b11a3d48ae4fe8fea91337';
        const fetchAPI = async()=> {
            fetch(apiURL)
            .then((response)=> response.json())
            .then((json)=> 
                setData(json)
            )
            .catch((erorr)=> {
                console.log('Erorr: ', erorr)
            }).finally(()=>setLoading(false))
        }
        fetchAPI();
        
        
        
    }, [])
    
    
    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(()=>{
        let hour = new Date().getHours();
        
        if(hour >=18 || hour<=5) {
            setBackgroundColor('#1e2a36')
        }
        else {
            
                setBackgroundColor('#98bbcf')
            
                                  
        }
        console.log(backgroundColor)
    })
    
   
    return(
     
    loading ? <ActivityIndicator /> : (
        
        <ScrollView style={[styles.container, {backgroundColor}]} >
            
                <BackDrop />
                
                <View style={{ alignItems: 'center', marginTop: 40, width: WIDTH}}>
                    <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}>{data.name}</Text>
                    <Text style={{color: 'white'}}>{data.weather[0].description}</Text>
                    
                </View>
                <View style={styles.deg}>
                    <Image 
                      style={{height: 76, width: 76, paddingRight: 10,}}
                      source={{uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}}
                      />
                    <Text style={{fontSize: 64, color: 'white', paddingLeft: 10,}}>{Math.round(data.main.temp-273.15)}°C</Text>
                </View>
                <View style={styles.sub}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.para}>{Math.round(data.wind.speed*3.6*100)/100} Km/h</Text>
                        <Text style={styles.title}>WIND SPEED</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.para}>{data.main.humidity} %</Text>
                        <Text style={styles.title}>HUMIDITY</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.para}>{data.main.pressure} hPa</Text>
                        <Text style={styles.title}>PRESSURE</Text>
                    </View>
                    
                    
                </View>
                

            </ScrollView>  
      
    )
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    backdropContainer: {
        height: HEIGHT,
        width: WIDTH,
        
    },
    
    fontText: {
        color: 'white',
        fontSize: 16,
    },
    deg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 40,
        width: WIDTH,
    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 20,
    },
    para: {
        color: 'white',
        fontSize: 18,

    },
    title: {
        color: '#F8F8FF',
        fontSize: 12,
    }
    
})

export default Weather;
