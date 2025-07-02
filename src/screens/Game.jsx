import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import Rocket from '../components/Game/Rocket';
import Meteor from '../components/Game/Meteor';
import Footer from '../components/Footer/Footer';
import createEntities from '../components/Game/entities';
import Physics from '../components/Game/systems';
import fondo1 from '../assets/imgs/fondo1.jpg';

const { height } = Dimensions.get('window');
const FOOTER_HEIGHT = 80;

const Game = () => {
    const [running, setRunning] = useState(false);
    const [score, setScore] = useState(0);
    const [gameEngine, setGameEngine] = useState(null);

    const startGame = () => {
        setRunning(true);
        setScore(0);
    };

    const stopGame = () => {
        setRunning(false);
    };

    const onEvent = (e) => {
        if (e.type === 'game-over') {
            setRunning(false);
            Alert.alert(
                '¡Game Over!',
                `Tu puntuación final: ${score}`,
                [
                    { text: 'Jugar de nuevo', onPress: () => startGame() },
                    { text: 'Salir', style: 'cancel' }
                ]
            );
        }
        if (e.type === 'score') {
            setScore((prev) => prev + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.gameWrapper}>
                <ImageBackground source={fondo1} style={styles.background} resizeMode="cover">
                    {running ? (
                        <GameEngine
                            ref={(ref) => setGameEngine(ref)}
                            systems={[Physics]}
                            entities={createEntities()}
                            running={running}
                            onEvent={onEvent}
                            style={styles.gameEngine}
                        >
                            <Text style={styles.score}>Puntuación: {score}</Text>
                            <Text style={styles.instructions}>Toca y arrastra para mover el cohete</Text>
                        </GameEngine>
                    ) : (
                        <View style={styles.centered}>
                            <Text style={styles.title}>🚀 Juego de Meteoritos</Text>
                            <Text style={styles.subtitle}>Esquiva los meteoritos y sobrevive el mayor tiempo posible</Text>
                            <TouchableOpacity onPress={startGame} style={styles.startButton}>
                                <Text style={styles.startButtonText}>Iniciar Juego</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ImageBackground>
            </View>
            <Footer active="Game" />
        </View>
    );
};

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    gameWrapper: {
        flex: 1,
        marginBottom: FOOTER_HEIGHT,
        overflow: 'hidden',
    },
    background: {
        flex: 1,
        width: '100%',
        height: height - FOOTER_HEIGHT,
        justifyContent: 'flex-start',
    },
    gameEngine: {
        flex: 1,
        backgroundColor: 'transparent',
        height: height - FOOTER_HEIGHT,
    },
    score: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        zIndex: 1,
    },
    instructions: {
        position: 'absolute',
        top: 70,
        left: 20,
        color: '#ccc',
        fontSize: 14,
        zIndex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        lineHeight: 22,
    },
    startButton: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#FFD700',
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
