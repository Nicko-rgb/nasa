import { ScrollView, Text, View, ImageBackground, TouchableOpacity, Animated, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/home';
import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';
import fondo from '../assets/imgs/fondo1.jpg';
import vide1 from '../assets/videos/solar.mp4';
import NasaImageOfDay from '../components/Home/NasaImage';
import VisitorCounter from '../components/Home/VisitorCounter';
import AlienMessage from '../components/Home/AlienMessage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const scrollViewRef = useRef(null);
    const animationRef = useRef(null);

    const handleStartExplore = () => {
        // Reinicia la animación del cohete
        animationRef.current?.reset();
        animationRef.current?.play();
        
        // Hace scroll suave hacia abajo después de un pequeño delay
        setTimeout(() => {
            scrollViewRef.current?.scrollTo({
                y: 600, // Ajusta este valor según necesites
                animated: true,
            });
        }, 500);
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/imgs/fondo1.jpg')}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
            />
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <ScrollView 
                    ref={scrollViewRef}
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    alwaysBounceVertical={false}
                >
                    <View style={styles.vista1}>
                        <Text style={styles.title}>Explore & Discover</Text>
                        <View style={styles.videoContainer}>
                            <Video
                                source={vide1}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode="cover"
                                shouldPlay
                                isLooping
                                style={{ 
                                    width: Dimensions.get('window').width - 20, 
                                    height: 250, 
                                    borderRadius: 10, 
                                }}
                                useNativeControls={false}
                            />
                        </View>
                        <Text style={styles.title2}>Descubre el Universo</Text>
                        <Text style={styles.description}>
                            El sistema solar es el conjunto de planetas, asteroides, cometas y satélites que orbita la estrella central, el Sol.
                        </Text>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity
                                style={styles.btnExplore}
                                activeOpacity={0.7}
                                onPress={handleStartExplore}
                            >
                                <Text style={styles.txtExplore}>Start Explore</Text>
                                <LottieView
                                    ref={animationRef}
                                    source={require('../assets/Anim/Rocket.json')}
                                    style={styles.lottieAnimation}
                                    autoPlay
                                    loop
                                    speed={1.5}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <NasaImageOfDay />
                    <VisitorCounter />
                </ScrollView>
                <AlienMessage />
                {/* <Footer active="Home" /> */}
            </SafeAreaView>
        </View>
    );
};

export default Home;