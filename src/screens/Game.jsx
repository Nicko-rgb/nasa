import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
// import Footer from '../components/Footer/Footer';
import createEntities from '../components/Game/entities';
import Physics from '../components/Game/systems';
import fondo1 from '../assets/imgs/fondo1.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');
const FOOTER_HEIGHT = 80;

const Game = () => {
    const gameEngineRef = useRef(null);
    const [running, setRunning] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [paused, setPaused] = useState(false);
    const [showPauseModal, setShowPauseModal] = useState(false);

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
            setTimeout(() => setGameOver(true), 1000); // Show game over after 1 second delay
        }
        if (e.type === 'score') {
            setScore((prev) => prev + 1);
        }
        if (e.type === 'collision') {
            // Update explosion position
            const entities = createEntities();
            entities.explosion.active = true;
            entities.explosion.x = e.meteor?.body?.position?.x || 0;
            entities.explosion.y = e.meteor?.body?.position?.y || 0;
            entities.explosion.timer = 0;
        }
    };

    const togglePause = () => {
        if (!paused) {
            setPaused(true);
            setShowPauseModal(true);
            setRunning(false);
        } else {
            setPaused(false);
            setShowPauseModal(false);
            setRunning(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.gameWrapper}>
                <ImageBackground source={fondo1} style={styles.background} resizeMode="cover">
                    <SafeAreaView style={{ flex: 1 }}>
                        {running ? (
                            <GameEngine
                                systems={[Physics]}
                                entities={createEntities()}
                                running={running && !paused}
                                onEvent={onEvent}
                                style={styles.gameEngine}
                                ref={gameEngineRef}
                            >
                                <Text style={styles.score}>Puntuación: {score}</Text>
                                <Text style={styles.instructions}>Toca y arrastra para mover el cohete</Text>
                                <TouchableOpacity onPress={togglePause} style={styles.pauseButton}>
                                    <Text style={styles.pauseButtonText}>{paused ? '▶' : '⏸'}</Text>
                                </TouchableOpacity>
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
                    </SafeAreaView>
                </ImageBackground>
            </View>

            <Modal
                visible={gameOver}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>¡Game Over!</Text>
                        <Text style={styles.modalText}>Tu puntuación final: {score}</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    setGameOver(false);
                                    startGame();
                                }}
                                style={styles.modalButton}
                            >
                                <Text style={styles.modalButtonText}>Jugar de nuevo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setGameOver(false)}
                                style={styles.modalButton}
                            >
                                <Text style={styles.modalButtonText}>Salir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={showPauseModal}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Juego Pausado</Text>
                        <TouchableOpacity
                            onPress={togglePause}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* <Footer active="Game" /> */}
        </View>
    );
};

export default Game;

const styles = StyleSheet.create({
    explosion: {
        position: 'absolute',
        width: 100,
        height: 100,
        zIndex: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    pauseButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 20,
    },
    pauseButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        color: '#FFD700',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        minWidth: 100,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    gameWrapper: {
        flex: 1,
        marginBottom: 0,
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
