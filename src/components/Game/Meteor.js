import React from 'react';
import { Image, View } from 'react-native';
import meteor from '../../assets/imgs/meteor.png';

const Meteor = ({ meteors }) => {
    return (
        <>
            {meteors.map((m) => (
                <View
                    key={m.id}
                    style={{
                        position: 'absolute',
                        left: m.body.position.x - 20,
                        top: m.body.position.y - 20,
                        width: 40,
                        height: 40,
                        zIndex: 5,
                    }}
                >
                    <Image 
                        source={meteor} 
                        style={{ 
                            width: 40, 
                            height: 40,
                            resizeMode: 'contain'
                        }} 
                    />
                </View>
            ))}
        </>
    );
};

export default Meteor;
