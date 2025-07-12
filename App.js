import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import Estrellas from './src/screens/Estrellas';
import Planetas from './src/screens/Planetas';
import Game from './src/screens/Game';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Planets" component={Planetas} options={{ headerShown: false }} />
                    <Stack.Screen name="Star" component={Estrellas} options={{ headerShown: false }} />
                    <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
                    <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}