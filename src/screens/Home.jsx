import { ScrollView, Text, View, ImageBackground, Image } from 'react-native';
import { Video } from 'expo-av';
import { styles } from '../styles/home';
import { planets } from '../data/planets';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import StarField from '../components/Anim/StarField';
import fondo from '../assets/imgs/fondo1.jpg';
import slider1 from '../assets/imgs/system_solar.jpg';
import vide1 from '../assets/videos/solar.mp4'

const Home = () => {
    return (
        <ImageBackground style={styles.fondo} source={fondo} resizeMode='cover'>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* <StarField /> */}
                <Text style={styles.title}>Explore & Discover</Text>

                <View style={{ marginTop: 20 }}>
                    <Video
                        source={vide1}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: '100%', height: 250 }}
                        useNativeControls={false}
                    />
                </View>

                <Text style={styles.title2}>Card Planets</Text>

                <View style={styles.planetsGrid}>
                    {planets.map((planet, index) => (
                        <View key={index} style={styles.planetCard}>
                            <Image source={{ uri: planet.image }} style={styles.planetImage} />
                            <Text style={styles.planetName}>{planet.name}</Text>
                            <Text style={styles.planetDesc} numberOfLines={2}>{planet.description}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Footer active="Home" />
        </ImageBackground>
    );
};

export default Home;