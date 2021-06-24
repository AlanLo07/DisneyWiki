import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import FavoriteEmptyState from './FavoriteEmptyState';
import Colors from './../../res/colors';

class FavoritesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FavoriteEmptyState />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blackPearl,
        flex: 1
    }
});

export default FavoritesScreen;