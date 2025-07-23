import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Modal,
    Pressable,
    ActivityIndicator,
    Dimensions,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import fondo from '../assets/imgs/fondo1.jpg';
import { styles } from '../styles/gallery';
// import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import AlienMessage from '../components/Home/AlienMessage';

const screenWidth = Dimensions.get('window').width;
const CARD_WIDTH = screenWidth * 0.48;

const Gallery = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchMedia = async (query = "earth") => {
        setLoading(true);
        try {
            const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
            const data = await response.json();

            // Obtener dimensiones de imagen
            const items = await Promise.all(
                data.collection.items.map(async (item) => {
                    const imageUrl = item.links?.[0]?.href;
                    const { title, description } = item.data?.[0] || {};
                    let imageHeight = 200;

                    if (imageUrl) {
                        try {
                            const size = await new Promise((resolve, reject) => {
                                Image.getSize(imageUrl, (w, h) => resolve({ w, h }), reject);
                            });
                            imageHeight = (CARD_WIDTH * size.h) / size.w;
                        } catch (error) {
                            console.warn("Error getting image size:", error);
                        }
                    }

                    return { title, description, imageUrl, imageHeight };
                })
            );

            setResults(items);
        } catch (error) {
            console.error("Error fetching NASA data", error);
        } finally {
            setLoading(false);
        }
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/imgs/fondo1.jpg')}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
            />
            <SafeAreaView style={{ flex: 1 }}>
                <Header onSearch={fetchMedia} />
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.titlee}>Gallery</Text>
                    <View style={styles.grid}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#fff" style={styles.loader} />
                        ) : results.length === 0 ? (
                            <Text style={styles.noResults}>No results found</Text>
                        ) : (
                            results.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.card, { height: item.imageHeight + 50 }]} // 60 para el texto
                                    onPress={() => openModal(item)}
                                >
                                    <Image
                                        source={{ uri: item.imageUrl }}
                                        style={[styles.image, { height: item.imageHeight }]}
                                    />
                                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                </TouchableOpacity>
                            ))
                        )}
                    </View>
                </ScrollView>
                <AlienMessage />

                {/* <Footer active='Gallery' /> */}

                {/* Modal */}
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                                <Text style={styles.detailTitle}>{selectedItem?.title}</Text>
                                <Image source={{ uri: selectedItem?.imageUrl }} style={styles.detailImage} />
                                {selectedItem?.description && (
                                    <Text style={styles.description}>{selectedItem.description}</Text>
                                )}
                            </ScrollView>
                            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    );
};

export default Gallery;
