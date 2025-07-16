import React from 'react';
import { View, Animated, Easing } from 'react-native';
import explosionImg from '../../assets/imgs/explosion.png';

const Explosion = ({ position = {x: 0, y: 0}, size = 100 }) => {
    const scaleValue = new Animated.Value(0.1);
    const opacityValue = new Animated.Value(1);

    Animated.sequence([
        Animated.parallel([
            Animated.timing(scaleValue, {
                toValue: 1.5,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(opacityValue, {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            })
        ])
    ]).start();

    return (
        <View style={{
            position: 'absolute',
            left: (position?.x || 0) - size / 2,
            top: (position?.y || 0) - size / 2,
            width: size,
            height: size,
            zIndex: 20,
        }}>
            <Animated.Image 
                source={explosionImg} 
                style={{
                    width: '100%',
                    height: '100%',
                    transform: [{ scale: scaleValue }],
                    opacity: opacityValue,
                }} 
            />
        </View>
    );
};

export default Explosion;