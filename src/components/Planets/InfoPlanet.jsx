import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { styles } from '../../styles/infoPlanet';

const InfoPlanet = ({ planet, visible, onClose }) => {
    const [scaleValue] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    if (!planet) return null;

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            animationType="none" // Desactivamos la animación por defecto
        >
            <View style={styles.modalOverlay}>
                <Animated.View style={[
                    styles.modalContainer,
                    { transform: [{ scale: scaleValue }] }
                ]}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <View style={styles.header}>
                            <Text style={styles.planetTitle}>{planet.name}</Text>
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>×</Text>
                            </TouchableOpacity>
                        </View>

                        <Image source={planet.image} style={styles.planetImage} />

                        <Text style={styles.description}>{planet.description}</Text>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Características</Text>
                            <View style={styles.characteristics}>
                                <View style={styles.characteristicRow}>
                                    <Text style={styles.characteristicKey}>Tamaño:</Text>
                                    <Text style={styles.characteristicValue}>{planet.characteristics.tamaño} </Text>
                                </View>
                                <View style={styles.characteristicRow}>
                                    <Text style={styles.characteristicKey}>Temperatura:</Text>
                                    <Text style={styles.characteristicValue}>{planet.characteristics.temperatura} </Text>
                                </View>
                                <View style={styles.characteristicRow}>
                                    <Text style={styles.characteristicKey}>Duración del día:</Text>
                                    <Text style={styles.characteristicValue}>{planet.characteristics.duraciónDelDía} </Text>
                                </View>
                                <View style={styles.characteristicRow}>
                                    <Text style={styles.characteristicKey}>Masa:</Text>
                                    <Text style={styles.characteristicValue}>{planet.characteristics.masa} </Text>
                                </View>
                                <View style={styles.characteristicRow}>
                                    <Text style={styles.characteristicKey}>Gravedad:</Text>
                                    <Text style={styles.characteristicValue}>{planet.characteristics.gravedad} </Text>
                                </View>
                            </View>
                        </View>

                        {/* Espacio para información adicional si usas una API */}
                    </ScrollView>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default InfoPlanet;