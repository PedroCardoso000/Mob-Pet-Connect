import React from 'react'
import { Text, View, Image } from 'react-native';
import { userScreenStyles } from './UserScreen';

const UserScreen = () => {
    return (
        <>
        <View style={userScreenStyles.container}>
            <View style={userScreenStyles.headerStyle}>
                <Image source={require('../../../assets/favicon.png')}  />
                <Text>Header</Text>
                
            </View>
            <View style={userScreenStyles.mediumStyles}></View>
            <View style={userScreenStyles.footerStyles}></View>
        </View>
        </>
    )
};

export default UserScreen;


