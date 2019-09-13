import React, { Component } from 'react'
import { FlatList, StyleSheet, Image } from 'react-native'
import { View, Container, Button, Item, Input, Content, Header, Fab } from 'native-base'
import NoteListBox from '../components/NoteListBox';
import HeaderMain from '../header/HeaderMain'
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            flatListProps: [
                {
                    id: '1',
                    name: 'JavaScript',
                    category: 'learn',
                    date: '2000-09-09 00:00',
                    content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '2',
                      name: 'Macbook Pro 2019',
                      category: 'wishlist',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '3',
                      name: 'Today',
                      category: 'personal',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '4',
                      name: 'Daily Standup',
                      category: 'work',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '5',
                      name: 'Hello World',
                      category: 'important',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '6',
                      name: 'Hello World',
                      category: 'important',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
            ]
        }
    }

    _KeyExtractor = (item) => item.id 

    render() {
        let random = () => {
            {
                let color = ['2FC2DF', '2FC2DF', 'C0EB6A', 'FAD06C', 'C0EB6A', 'FF92A9']
                let randomizer = Math.floor(Math.random() * (5 - 0 + 1)) + 0
                return '#' + color[randomizer]
            }
        }
        return (
            <Container>
                <View style={styles.container}>
                    <HeaderMain fun={() => this.props.navigation.openDrawer()} />
                    <Item rounded style={{ marginTop: 80, width: 300, marginLeft: 32, position: 'absolute', backgroundColor: '#fff', zIndex: 1 }}>
                        <Input placeholder='Search...'  />
                    </Item>
                    <Content>
                        <FlatList 
                            style={{ marginTop: 80}}
                            data={this.state.flatListProps}
                            numColumns={2}
                            keyExtractor={this._KeyExtractor}
                            renderItem=
                            {({ item }) =>
                            <NoteListBox 
                                time={item.date} 
                                color={random()}
                                title={item.name} 
                                category={item.category} 
                                notes={item.content} 
                                events={() => this.props.navigation.navigate('EditNote')} 
                            />
                            }
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


export default Home

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
});
