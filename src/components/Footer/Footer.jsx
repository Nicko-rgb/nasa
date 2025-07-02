import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // <- import necesario
import { styles } from '../../styles/head-foot';
import ico1 from '../../assets/icons/img.png';
import ico2 from '../../assets/icons/game.png';
import ico3 from '../../assets/icons/home.png';
import ico4 from '../../assets/icons/planet.png';
import ico5 from '../../assets/icons/star.png';

const Footer = ({ active = '' }) => {
    const navigation = useNavigation(); // <- hook de navegación

    const menuItems = [
        { name: 'Gallery', icon: ico1 },
        { name: 'Game', icon: ico2 },
        { name: 'Home', icon: ico3 },
        { name: 'Planets', icon: ico4 },
        { name: 'Stars', icon: ico5 },
    ];

    return (
        <View style={styles.footerContainer}>
            {menuItems.map((item, index) => {
                const isActive = item.name === active;

                const handlePress = () => {
                    if (!isActive) {
                        navigation.navigate(item.name);
                    }
                };

                if (isActive) {
                    return (
                        <View key={index} style={styles.centerWrapper}>
                            <TouchableOpacity style={styles.centerButton} onPress={handlePress}>
                                <Image source={item.icon} style={[styles.iconCenter, styles.activeIconCenter]} />
                            </TouchableOpacity>
                            <Text style={[styles.labelCenter, styles.activeLabel]}>{item.name}</Text>
                        </View>
                    );
                } else {
                    return (
                        <TouchableOpacity key={index} style={styles.item} onPress={handlePress}>
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.label}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
    );
};

export default Footer;
