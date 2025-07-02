import React from 'react';
import { Image, View } from 'react-native';
import cohete from '../../assets/imgs/cohete.png';

const Rocket = ({ body, size }) => {
    const x = body.position.x - size[0] / 2;
    const y = body.position.y - size[1] / 2;

    return (
        <View style={{
            position: 'absolute',
            left: x,
            top: y,
            width: size[0],
            height: size[1],
            zIndex: 10,
        }}>
            <Image 
                source={cohete} 
                style={{ 
                    width: size[0], 
                    height: size[1],
                    resizeMode: 'contain'
                }} 
            />
        </View>
    );
};

export default Rocket;
