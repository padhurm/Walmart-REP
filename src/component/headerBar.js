import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Header, Body, Title, Left, Icon, Right, View } from 'native-base';
import TitleHeader from './title';
import { withNavigation } from 'react-navigation';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={{
                backgroundColor: '#004C91',
                // alignSelf: 'stretch',
            }}>
                <Left style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center'  }}>
                    
                        <Image source={require("../../assets/images/Spark.png")}
                            style={{ width: 33, height: 35, paddingTop: 5 }}
                        />
                    
                    <TitleHeader />
                </Left>
                {/* <Body style={{ flex: 2, justifyContent: 'space-around', alignItems: "flex-start" }}>

                </Body> */}
                <Right style={{ flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'center'  }}>
                    <Text style={{
                        fontSize: 14,
                        color: '#FFF', 
                        margin: 5                       
                        // padding: 10,
                        // textAlign: 'right'
                    }}>Hello, Phill</Text>
                    <Icon
                        name='ios-menu'
                        style={{ color: '#FFFFFF' }}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    />
                </Right>
            </Header>
        )
    }
}
export default withNavigation(HeaderBar);