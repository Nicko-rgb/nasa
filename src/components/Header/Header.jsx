import { ScrollView, Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/head-foot';
import nasaLogo from '../../assets/icons/nasa_logo.png';
import UserProfileModal from './UserProfileModal';
import React, { useState } from 'react';

const Header = ({ onSearch, live = false }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSearch = (text) => {
        if (live) {
            onSearch(text);
        }
    };

    const openProfileModal = () => {
        setModalVisible(true);
    };

    const closeProfileModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.header}>
                <Image source={nasaLogo} style={styles.nasaLogo} />
                <View style={styles.searchBox}>
                    <Icon2 name='search' style={styles.icoSearch} />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder='Search...'
                        placeholderTextColor="#aaa"
                        onChangeText={live ? handleSearch : undefined}
                        onSubmitEditing={!live ? (e) => onSearch(e.nativeEvent.text) : undefined}
                    />
                </View>
                <TouchableOpacity onPress={openProfileModal}>
                    <Icon name='user' style={styles.icoHeader} />
                </TouchableOpacity>
            </View>
            
            <UserProfileModal 
                visible={modalVisible} 
                onClose={closeProfileModal} 
            />
        </>
    );
};

export default Header