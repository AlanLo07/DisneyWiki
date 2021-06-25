import React from 'react';
import { Pressable,Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import FavoriteEmptyState from './FavoriteEmptyState';
import Colors from './../../res/colors';
import Http from './../../libs/http';
import CharacterSearch from './CharacteSearch';
import CharacterItem from './CharacterItem';

class FavoritesScreen extends React.Component {

    state={ 
        data:[],
        loading:false,
        allData: [],
    }

    handlePress = (character) => {
        console.log('Ir a details',character);
        this.props.navigation.navigate('CharacterDetail',{character});
    }

    getAllCharacters = async () => {
        for (let i = 0; i < 150; i++) {
            this.setState({
                loading:true,
            })
            try{
                const res = await Http.instance.get(`https://api.disneyapi.dev/characters?page=${i}`);
                this.setState({
                    loading: false,
                    data: [].concat(this.state.data,res.data),
                    allData: [].concat(this.state.allData,res.data)
                });
            } catch(e){
                console.log(e);
            }
        }
    }

    handleSearch = (query) => {
        const allData = this.state.allData;
        const charactersFiltered = allData.filter((data) => {
            return data.name.toLowerCase().includes(query.toLowerCase())
        });
        this.setState({data:charactersFiltered});
        console.log(charactersFiltered);
    }

    render() {
        const {allData,loading} = this.state;
        if (allData.length==0){
            return (
                <View style={styles.container}>
                    <FavoriteEmptyState />
                    <Pressable
                        style={styles.btn} 
                        onPress={() => this.getAllCharacters()}
                        >
                            <Text style={styles.btnText}>More</Text>    
                    </Pressable>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <CharacterSearch 
                        onChange={this.handleSearch}
                    />
                    { loading ?
                        <ActivityIndicator
                        style={styles.loader} 
                        color="#fff" 
                        size="large"/>
                        : null
                    }
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item,index) => index}
                        renderItem= {({item}) => 
                            <CharacterItem
                            item={item} 
                            onPress={() => this.handlePress(item)}
                            />
                        }
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blackPearl,
        flex: 1
    },
    titles: {
        color: "#fff",
        margin: 10,
        fontSize: 30,
    },  
    btn: {
        padding: 8,
        backgroundColor: "#179926",
        borderRadius: 8,
        margin: 16,
        alignItems: "center"
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20
    },
    loader: {
        marginTop: 60
    }
});

export default FavoritesScreen;