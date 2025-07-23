import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/head-foot';
import ico1 from '../../assets/icons/img.png';
import ico2 from '../../assets/icons/game.png';
import ico3 from '../../assets/icons/home.png';
import ico4 from '../../assets/icons/planet.png';
import ico5 from '../../assets/icons/star.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
    { name: 'Gallery', icon: ico1 },
    { name: 'Game', icon: ico2 },
    { name: 'Home', icon: ico3 },
    { name: 'Planets', icon: ico4 },
    { name: 'Curiosities', icon: ico5 },
];

const Footer = ({ state, descriptors, navigation }) => {
    return (
        <SafeAreaView edges={['bottom']} style={[styles.footerContainer, { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }]}> 
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;
                const isFocused = state.index === index;
                const icon = menuItems[index].icon;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                if (isFocused) {
                    return (
                        <View key={index} style={[styles.centerWrapper, { flex: 1 }]}>
                            <TouchableOpacity style={styles.centerButton} onPress={onPress}>
                                <Image source={icon} style={[styles.iconCenter, styles.activeIconCenter]} />
                            </TouchableOpacity>
                            <Text style={[styles.labelCenter, styles.activeLabel]}>{label}</Text>
                        </View>
                    );
                } else {
                    return (
                        <TouchableOpacity key={index} style={[styles.item, { flex: 1 }]} onPress={onPress}>
                            <Image source={icon} style={styles.icon} />
                            <Text style={styles.label}>{label}</Text>
                        </TouchableOpacity>
                    );
                }
            })}
        </SafeAreaView>
    );
};

export default Footer;
