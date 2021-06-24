import React from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';
import Colors from './../../res/colors';

class CharacterSearch extends React.Component {

    state = {
        query: ""
    }

    handleText = (query) => {
        this.setState({query});
        if (this.props.onChange) {
            this.props.onChange(query);
        }
    }

    render() {
        const {query} = this.state;
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search Character"
                    placeholderTextColor="#fff"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon
    }
})

export default CharacterSearch;