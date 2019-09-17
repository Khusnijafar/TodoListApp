import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { Header, Left, Body, Right, Title, Button, Center, Content, Item, Input, Form, Picker, InputGroup, Textarea, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { getCategory } from '../redux/actions/categories'
import { updatenote } from '../redux/actions/notes'

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key",
            note: this.props.navigation.state.params.note,
            id_note: '',
            id_category: 0,
            title: '',
            content: '',
            selectcategory: []
        }
    }

    onValueChange(value) {
        this.setState({
            id_category: value
        });
    }

    componentDidMount = () => {
        this.setState({
            id_note: this.props.navigation.state.params.note.id_note,
            id_category: this.props.navigation.state.params.note.id_category,
            title: this.props.navigation.state.params.note.title,
            content: this.props.navigation.state.params.note.content
        })
    }

    handleupdate = () => {
        this.props.dispatch(updatenote(this.state.id_note, {
            title: this.state.title,
            content: this.state.content,
            id_category: this.state.id_category
        }))
            .then(() => {
                // alert.alert('helo')
                this.props.navigation.navigate('Home')
            })
    }

    componentWillMount = () => {
        this.props.dispatch(getCategory())
            .then(() => {
                this.setState({
                    selectcategory: this.props.category
                })
            })
    }
    render() {
        return(
            <Container>
                <Header style={{ marginBottom: 55, backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent >
                            <Text onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-left' style={{ color: '#000' }} size={25} />

                            </Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ textAlign: 'center', marginLeft: 35, color: '#000' }}> Edit To Do List</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.handleupdate()}>
                            <Icon name='check-circle-o' style={{ color: '#000' }} size={25} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ flex: 1, flexDirection: "column", paddingHorizontal: 20 }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.inputTitle}
                            underlineColorAndroid="transparent"
                            placeholder={"ADD TITLE"}
                            placeholderTextColor={"#9E9E9E"}
                            onChangeText={(title) => this.setState({ title })}
                            value={this.state.title}
                        />
                    </View>
                    <View style={{ flex: 4, }}>
                        <TextInput
                            style={styles.inputStyles}
                            underlineColorAndroid="transparent"
                            placeholder={"ADD DECRIPTION."}
                            placeholderTextColor={"#9E9E9E"}
                            // Kode ajaib kita
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(content) => this.setState({ content })}
                            value={this.state.content}
                        />
                    </View>
                    <View style={{ backgroundColor: "white", flex: 1, marginTop: 120 }}>
                        <Text style={{ fontSize: 20 }}>CATEGORI</Text>
                            <Picker
                                mode="dropdown"
                                iosHeader="Select your SIM"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: 200 }}
                                selectedValue={this.state.id_category}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                    <Picker.Item label="ADD CATEGORY" value="key0" />
                        {this.state.selectcategory.map((item) =>
                        <Picker.Item label={item.name_category} value={item.id_category} />
                        )}
                    </Picker>
                    </View>
                </ScrollView>          
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.notes.note,
        category: state.categories.category
    }
}

export default connect(mapStateToProps)(EditNote)

const styles = StyleSheet.create({
    inputStyles: {
        fontSize: 20,
        height: 40,
        backgroundColor: "#FFFFFF",
        height: 150
    },
    inputTitle: {
        fontSize: 20,
        height: 10,
        backgroundColor: "#FFFFFF",
        height: 60,
        marginTop: 10
    }
});