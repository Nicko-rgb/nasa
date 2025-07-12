import React, {useState, useEffect} from 'react'
import { ScrollView, Text, View, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/home';

const NasaImageOfDay = () => {
    const [apod, setApod] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => res.json())
            .then(data => {
                console.log('NASA API response:', data);
                setApod(data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching NASA data:', error);
                setLoading(false);
            });
    }, []);

    // Datos por defecto si la API falla
    const defaultData = {
        title: "NASA Image of the Day",
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        explanation: "Explore the wonders of space with NASA's daily images. From distant galaxies to our own solar system, discover the beauty and mystery of the cosmos."
    };

    // Usar datos por defecto si no hay datos de la API o si hay error
    const displayData = apod && apod.url ? apod : defaultData;

    if (loading) {
        return (
            <View style={styles.apodContainer}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.apodTitle}>Loading NASA Image...</Text>
            </View>
        );
    }

    return (
        <View style={styles.apodContainer}>
            <Text style={styles.apodTitle}>
                {displayData.title || "NASA Image of the Day"}
            </Text>
            <View style={styles.imageContainer}>
                {imageLoading && (
                    <View style={styles.imageLoader}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )}
                <Image
                    source={{ uri: displayData.url }}
                    style={styles.apodImage}
                    resizeMode="cover"
                    onLoadStart={() => setImageLoading(true)}
                    onLoadEnd={() => setImageLoading(false)}
                    onError={(error) => {
                        console.log('Image loading error:', error);
                        setImageLoading(false);
                    }}
                />
            </View>
            <Text style={styles.apodExplanation}>
                {displayData.explanation ? 
                    displayData.explanation.substring(0, 150) + '...' : 
                    'Explore the wonders of space with NASA\'s daily images.'
                }
            </Text>
        </View>
    );
};

export default NasaImageOfDay