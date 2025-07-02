import { ScrollView, Text, View, ImageBackground, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/head-foot';

const Header = () => {
    return (
        <View style={styles.header}>
            <Icon2 name='menu' style={styles.icoHeader} />
            <View style={styles.searchBox}>
                <Icon2 name='search' style={styles.icoSearch} />
                <TextInput style={styles.inputSearch} placeholder='Search...' placeholderTextColor="#aaa" />
            </View>
            <Icon name='user' style={styles.icoHeader} />
        </View>
    )
}

export default Header