import React from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const StarParticles = () => {
    const particles = Array(20).fill(0); // Reducido de 50 a 20 para mejor rendimiento

    return (
        <View style={styles.starContainer}>
            {particles.map((_, i) => (
                <Animated.View
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                        opacity: Math.random() * 0.6 + 0.4,
                    }}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        marginVertical: 20,
    },
});

export default StarParticles