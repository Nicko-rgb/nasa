import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
    React.useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#333');
        NavigationBar.setButtonStyleAsync('light');
    }, []);

    return (
        <>
            <StatusBar style="light" backgroundColor="transparent" translucent />
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </>
    );
}