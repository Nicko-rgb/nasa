import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    Alert,
    Animated,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/head-foot';

const UserProfileModal = ({ visible, onClose }) => {
    const [userData, setUserData] = useState({
        name: 'Astronaut Explorer',
        email: 'explorer@nasa.com',
        age: '25',
        country: 'Earth',
        favoritePlanet: 'Mars',
        missionsCompleted: 0,
        rank: 'Rookie Explorer',
        avatar: '👨‍🚀'
    });
    const [isEditing, setIsEditing] = useState(false);
    const [tempData, setTempData] = useState({});
    const fadeAnim = useState(new Animated.Value(0))[0];

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    const ranks = ['Rookie Explorer', 'Space Cadet', 'Galaxy Navigator', 'Cosmic Pioneer', 'Stellar Commander'];

    useEffect(() => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const handleEdit = () => {
        setTempData({ ...userData });
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserData(tempData);
        setIsEditing(false);
        Alert.alert('Success', 'Profile updated successfully! 🚀');
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempData({});
    };

    const completeMission = () => {
        const newMissions = userData.missionsCompleted + 1;
        const newRank = ranks[Math.min(Math.floor(newMissions / 5), ranks.length - 1)];
        
        setUserData({
            ...userData,
            missionsCompleted: newMissions,
            rank: newRank
        });
        
        Alert.alert('Mission Complete! 🎉', `Congratulations! You've completed ${newMissions} missions!`);
    };

    const renderProfileSection = () => (
        <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{userData.avatar}</Text>
                <View style={styles.rankBadge}>
                    <Text style={styles.rankText}>{userData.rank}</Text>
                </View>
            </View>
            
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Icon name="rocket" size={20} color="#fff" />
                    <Text style={styles.statNumber}>{userData.missionsCompleted}</Text>
                    <Text style={styles.statLabel}>Missions</Text>
                </View>
                <View style={styles.statItem}>
                    <Icon name="star" size={20} color="#fff" />
                    <Text style={styles.statNumber}>{userData.missionsCompleted * 10}</Text>
                    <Text style={styles.statLabel}>Points</Text>
                </View>
            </View>
        </View>
    );

    const renderFormSection = () => (
        <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            
            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={isEditing ? tempData.name : userData.name}
                    onChangeText={(text) => setTempData({...tempData, name: text})}
                    editable={isEditing}
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={isEditing ? tempData.email : userData.email}
                    onChangeText={(text) => setTempData({...tempData, email: text})}
                    editable={isEditing}
                    keyboardType="email-address"
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Age</Text>
                <TextInput
                    style={styles.input}
                    value={isEditing ? tempData.age : userData.age}
                    onChangeText={(text) => setTempData({...tempData, age: text})}
                    editable={isEditing}
                    keyboardType="numeric"
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Country</Text>
                <TextInput
                    style={styles.input}
                    value={isEditing ? tempData.country : userData.country}
                    onChangeText={(text) => setTempData({...tempData, country: text})}
                    editable={isEditing}
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Favorite Planet</Text>
                <View style={styles.pickerContainer}>
                    {planets.map((planet) => (
                        <TouchableOpacity
                            key={planet}
                            style={[
                                styles.planetOption,
                                (isEditing ? tempData.favoritePlanet : userData.favoritePlanet) === planet && styles.selectedPlanet
                            ]}
                            onPress={() => isEditing && setTempData({...tempData, favoritePlanet: planet})}
                            disabled={!isEditing}
                        >
                            <Text style={styles.planetText}>{planet}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );

    const renderActions = () => (
        <View style={styles.actionsSection}>
            {!isEditing ? (
                <>
                    <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
                        <Icon name="edit" size={16} color="#fff" />
                        <Text style={styles.actionText}>Edit Profile</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.missionButton} onPress={completeMission}>
                        <Icon name="rocket" size={16} color="#fff" />
                        <Text style={styles.actionText}>Complete Mission</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Icon name="check" size={16} color="#fff" />
                        <Text style={styles.actionText}>Save Changes</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Icon name="times" size={16} color="#fff" />
                        <Text style={styles.actionText}>Cancel</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Space Explorer Profile</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Icon name="times" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
                        {renderProfileSection()}
                        {renderFormSection()}
                        <View style={styles.actions}>
                            {renderActions()}
                        </View>
                    </ScrollView>
                </View>
            </Animated.View>
        </Modal>
    );
};

export default UserProfileModal; 