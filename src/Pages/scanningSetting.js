import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class ScanningSetting extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Scanning Setting</Text>
                <Button title='Go to Detail' onPress={()=>this.props.navigation.navigate('Detail')}/>
            </View>
        )
    }

}