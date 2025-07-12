import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/home';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const target = Math.floor(Math.random() * 10000) + 1000;
        const interval = setInterval(() => {
            setCount(prev => (prev < target ? prev + 17 : target));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>
                {count.toLocaleString()} explorers today
            </Text>
        </View>
    );
};

export default VisitorCounter