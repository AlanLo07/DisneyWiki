import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

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
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search Character"
                    placeholderTextColor="#fff"
                    />
            </View>
        );
    }
}

export default CharacterSearch;