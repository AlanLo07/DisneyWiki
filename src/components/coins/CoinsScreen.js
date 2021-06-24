import React, {Component} from 'react';
import { Pressable,Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Http from './../../libs/http';
import CharacterItem from './CharacterItem';
import Colors from './../../res/colors';
import CharacterSearch from './CharacteSearch';
class CoinsScreen extends Component {

    state={ 
        data:[],
        loading:false,
        allData: [],
        nextPage: 1,
    }

    handlePress = (character) => {
        console.log('Ir a details',character);
        this.props.navigation.navigate('CharacterDetail',{character});
    }

    getCharacters = async () => {
        this.setState({
            loading:true,
        })
        const res = await Http.instance.get(`https://api.disneyapi.dev/characters?page=${this.state.nextPage}`);
        
        console.log(res);
        this.setState({
            loading: false,
            data: [].concat(this.state.data,res.data),
            nextPage: this.state.nextPage + 1,
            allData: [].concat(this.state.data,res.data)
        });
    }   

    componentDidMount = async () => {
        this.getCharacters()
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

        const { data, nextPage, loading} = this.state;
        return (
            <View style={style.container}>
                <CharacterSearch 
                    onChange={this.handleSearch}
                />
                { loading ?
                    <ActivityIndicator
                    style={style.loader} 
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
                {
                    this.state.nextPage < 150 ?
                    <Pressable
                    style={style.btn} 
                    onPress={() => this.getCharacters()}
                    >
                        <Text style={style.btnText}>More</Text>    
                    </Pressable>
                    : null  
                }
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackPearl
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
})

export default CoinsScreen;