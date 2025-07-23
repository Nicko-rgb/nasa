import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import fondo from '../assets/imgs/fondo1.jpg';
import { styles as customStyles } from '../styles/curiosidades.js';
import Header from '../components/Header/Header.jsx';
import { curiosities } from '../data/curiosities';
import AlienMessage from '../components/Home/AlienMessage';

const categoryColors = {
  'estrellas': '#FFD700',
  'planetas': '#4FC3F7',
  'agujeros negros': '#222',
  'pulsares': '#BA68C8',
  'materiales': '#FF7043',
  'universo': '#00E676',
};

const categoryIcons = {
  'estrellas': '★',
  'planetas': '🪐',
  'agujeros negros': '🕳️',
  'pulsares': '🌀',
  'materiales': '🔬',
  'universo': '🌌',
};

export default function Curiosidades() {
  const [search, setSearch] = useState('');

  const filteredCuriosities = search.trim() === ''
    ? curiosities
    : curiosities.filter(item =>
        item.title.toLowerCase().includes(search.trim().toLowerCase())
      );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/imgs/fondo1.jpg')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header onSearch={setSearch} live={true}/>
        <ScrollView contentContainerStyle={[customStyles.container, { padding: 16 }]}> 
          <Text style={customStyles.title}>Curiosidades del Universo</Text>
          {filteredCuriosities.length === 0 && (
            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 24, fontSize: 16 }}>
              No se encontraron curiosidades.
            </Text>
          )}
          {filteredCuriosities.map((item, idx) => (
            <View
              key={idx}
              style={[
                local.card,
                { borderLeftColor: categoryColors[item.category] || '#fff' },
              ]}
            >
              <Text style={[local.icon, { color: categoryColors[item.category] || '#fff' }]}>
                {categoryIcons[item.category] || '✨'}
              </Text>
              <View style={{ flex: 1 }}>
                <Text style={local.cardTitle}>{item.title}</Text>
                <Text style={local.cardDesc}>{item.description}</Text>
                <Text style={[local.category, { color: categoryColors[item.category] || '#fff' }]}>#{item.category}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <AlienMessage />
      </SafeAreaView>
    </View>
  );
}

const local = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(30,30,40,0.92)',
    borderRadius: 16,
    marginBottom: 18,
    padding: 16,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    fontSize: 32,
    marginRight: 16,
    marginTop: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: '#eee',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.8,
    marginTop: 2,
    textTransform: 'capitalize',
  },
});