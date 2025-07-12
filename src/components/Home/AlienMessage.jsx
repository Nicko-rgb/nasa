import React, {useState, useEffect} from 'react'
import { ScrollView, Text, View, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../../styles/home';

const AlienMessage = () => {
    const [message, setMessage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const messages = [
        "Greetings from Alpha Centauri! 👽",
        "We come in peace ✌️",
        "Your planet is beautiful seen from here 🌍",
        "3..2..1.. Contact! 📡",
        "Welcome to the cosmic neighborhood! 🌌",
        "May the stars guide your journey ⭐"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessage(messages[currentIndex]);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
            
            // Ocultar el mensaje después de 2.5 segundos
            setTimeout(() => {
                setMessage('');
            }, 2500);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, messages]);

    const showRandomMessage = () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMessage);
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <View style={styles.alienContainer}>
            <TouchableOpacity
                onLongPress={showRandomMessage}
                style={styles.ufoButton}
            >
                <Text style={styles.ufoIcon}>🛸</Text>
            </TouchableOpacity>

            {message && (
                <Animated.View style={styles.messageBubble}>
                    <Text style={styles.messageText}>{message}</Text>
                </Animated.View>
            )}
        </View>
    );
};

export default AlienMessage