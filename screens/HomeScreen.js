import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';

DUMMY_DATA = [
    {
        firstName: "Sergei",
        lastName: "Mavrodi",
        occupation: "Enterpreneur",
        photoURL: "https://icdn.lenta.ru/images/2018/03/26/20/20180326201908457/pic_ed673f0aef5c25b1075c85f21dcce9fe.jpg",
        age: 62,
        id: 1
    },
    {
        firstName: "NeSergei",
        lastName: "NeMavrodi",
        occupation: "Coder",
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/S_Mavrodi_2012.jpg/274px-S_Mavrodi_2012.jpg",
        age: 26
    },
]

const HomeScreen = () => {
    const navigation = useNavigation();
    const swipeRef =  useRef(null);

    return (
        <SafeAreaView className="flex-1">
            {/* Header here */}
            <View className="flex-row items-center justify-between px-5">
                <TouchableOpacity>
                    <Image source={{
                        uri: "https://upload.wikimedia.org/wikipedia/en/c/c5/Donald_Trump_mug_shot.jpg"}}
                        className="h-10 w-10 rounded-full"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
                    <Image className="h-14 w-14" source={require('../images/homescreen_logo.png')}/>
                </TouchableOpacity>

                {/* Кнопка перехода в экран чатов */}
                <TouchableOpacity onPress={()=> navigation.navigate("Chat")}>
                    <Ionicons 
                        name="chatbubbles-sharp" 
                        size={30}
                        color="#FF5864"/>
                </TouchableOpacity>
            </View>

            {/* Cards */}
            <View className="flex-1 -mt-6">
                <Swiper 
                    ref = {swipeRef}
                    containerStyle={{backgroundColor: "transparent"}}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    onSwipedLeft={() => {
                        console.log('Swipe pass')
                    }}
                    onSwipedRight={() => {
                        console.log('Swipe Match')
                    }}
                    backgroundColor='#4FD0E9'
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right: {
                            title: "MATCH",
                            style: {
                                label: {
                                    // textAlign: "right",
                                    color: "#4DED30",
                                },
                            },
                        }
                    }}
                    renderCard={(card) => (
                        <View key={card.id} className="relative bg-white h-3/4 rounded-xl">
                            <Image 
                                className="absolute top-0 h-full w-full rounded-xl" 
                                source={{uri: card.photoURL}}

                            />
                            <View className="absolute bottom-0 bg-white w-full flex-row 
                                justify-between items-center h-20 px-6 py-2 rounded-b-xl shadow-xl">
                                <View> 
                                    <Text className="text-xl font-bold"> {card.firstName} {card.lastName}</Text>
                                    <Text> {card.occupation} </Text>
                                </View>
                                <Text className="text-2xl font-bold"> {card.age} </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View className='flex flex-row justify-evenly'>
                <TouchableOpacity 
                    onPress = {() => swipeRef.current.swipeRight()}
                className='items-center justify-center rounded-full w-16 h-16 bg-red-200'>
                    <Entypo name='cross' size={24} color='red'/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress = {() => swipeRef.current.swipeLeft()}
                    className='items-center justify-center rounded-full w-16 h-16 bg-green-200'>
                    <AntDesign name='heart' size={24} color='green'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen