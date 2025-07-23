import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../styles/planetas';
// import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import fondo from '../assets/imgs/fondo1.jpg';
import { planets } from '../data/planets';
import InfoPlanet from '../components/Planets/InfoPlanet';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlienMessage from '../components/Home/AlienMessage';

const Planetas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlanets, setFilteredPlanets] = useState(planets);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const term = searchTerm.toLowerCase();
        const filtered = planets.filter(planet =>
            planet.name.toLowerCase().includes(term)
        );
        setFilteredPlanets(filtered);
    }, [searchTerm]);

    const handlePlanetPress = (planet) => {
        setSelectedPlanet(planet);
        setModalVisible(true);
    };

    return (
        <ImageBackground style={styles.fondo} source={fondo} resizeMode='cover'>
            <SafeAreaView style={{ flex: 1 }}>

                <Header onSearch={setSearchTerm} live={true} />

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>System Solar</Text>

                    <View style={styles.planetsGrid}>
                        {filteredPlanets.map((planet, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.planetCard}
                                onPress={() => handlePlanetPress(planet)}
                            >
                                <Image source={planet.image} style={styles.planetImage} />
                                <Text style={styles.planetName}>{planet.name}</Text>
                                <Text style={styles.planetDesc} numberOfLines={2}>{planet.description}</Text>
                            </TouchableOpacity>
                        ))}
                        {filteredPlanets.length === 0 && (
                            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>No results found</Text>
                        )}
                    </View>
                </ScrollView>

                <InfoPlanet
                    planet={selectedPlanet}
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
                <AlienMessage />
            </SafeAreaView>
            {/* <Footer active='Planets' /> */}
        </ImageBackground>
    )
}
export default Planetas;
