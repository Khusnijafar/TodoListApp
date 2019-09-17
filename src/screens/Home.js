import React, { Component } from 'react'
import { FlatList, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { View, Container, Button, Item, Input, Content, Header, Fab, Card,  } from 'native-base'
// import NoteListBox from '../components/NoteListBox';
import HeaderMain from '../header/HeaderMain'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchNote, getNote, sortNote } from '../redux/actions/notes';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            active: false,
            selected: 'key1'
        }
    }

    handleSearch = (value) => {
        this.props.dispatch(searchNote(value))
    }

    getNote = () => {
        this.props.dispatch(getNote())
        .then((res) => {
            console.warn(res)
        })
    }
    componentDidMount = () => {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getNote()
        });
    }

    onValueChange(value) {
        this.props.dispatch(sortNote(value))
            .then(() => {

            })
        this.setState({
            selected: value
        })
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <HeaderMain fun={() => this.props.navigation.openDrawer()} />
                    <Item rounded style={{ marginTop: 80, width: 300, marginLeft: 32, position: 'absolute', backgroundColor: '#fff', zIndex: 1 }}>
                        <Input placeholder='Search...'  onChangeText={(content) => this.handleSearch(content)} />
                    </Item>
                    <Content style={{ paddingTop: 100}}>
                        <FlatList 
                             numColumns={2}
                             data={this.props.note}
                             contentContainerStyle={styles.list}
                             renderItem={({ item }) => (
                                 <Card style={{
                                     width: 150, marginLeft: 10, marginRight: 15, marginBottom: 20, shadowColor: "#000", backgroundColor: `${item.color}`, padding: 8, paddingTop: 20, paddingBottom: 20,
                                     shadowOffset: {
                                         width: 0,
                                         height: 3,
                                     },
                                     shadowOpacity: 0.29,
                                     shadowRadius: 4.65,  
                                     elevation: 7, borderRadius: 10
                                 }} key={item.id_note}>
                                     <TouchableOpacity onPress={() => this.props.navigation.navigate('EditNote', { note: item })}>
                                         <View>
                                             <Text style={styles.date}>{moment(item.updated_at).format('ll')}</Text>
                                         </View>
                                         <View>
                                             <Text style={styles.title}>{item.title}</Text>
                                         </View>
                                         <View>
                                             <Text style={styles.category}>{item.name_category}</Text>
                                         </View>
                                         <View>         
                                             <Text style={{ color: "black" }}>{item.content}</Text>
                                         </View>
                                     </TouchableOpacity>
                                 </Card>         
                             )}
                             onEndReached={this.handleLoadMore}
                             onEndThreshold={50}
                             ListHeaderComponent={this.renderHeader}
                             ListFooterComponent={this.renderFooter}
                             refreshing={this.state.refreshing}
                             onRefresh={this.handleReflesh}
                        />
                    </Content>
                        <Fab 
                            active={this.state.active}
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#fff' }}
                            position="bottomRight"
                            onPress={() => this.props.navigation.navigate('AddNote')}
                        >
                           <Image style={{ color: '#000' }} source={require('../images/plusHome.png')}
                           style={{ width: 50, height: 50, resizeMode: "cover", borderRadius: 70 }}/>  
                        </Fab>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.notes.note,
        sortNote: state.notes.sortNote
    }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },
    navbar : {
      position: 'absolute',
      width: 411,
      height: 52,
      left: 0,
      top: 0,
    },
    date: {
        color: "black", 
        marginLeft: "auto"
    },
    title: {
        color: "black", 
        fontSize: 20, 
        fontWeight: "bold"
    },
    category: {
        color: "black", 
        fontSize: 15, 
        fontStyle: "italic"
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        paddingBottom: 100,
        // flexWrap: 'wrap',
    },
});
