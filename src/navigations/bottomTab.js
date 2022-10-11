import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Account from '../screens/account';
import { images } from '../res/images';
import { hp, wp } from '../res/constants';
import { colors } from '../res/colors';

const Tab = createBottomTabNavigator();

const options = {
    headerShown: false, animation: 'fade',
    tabBarStyle: {
        height: hp(8),
        backgroundColor: colors.white,
        elevation: 1,
        borderTopWidth: 0,
        position: 'absolute',
    },
}

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <Image source={images.home} style={[styles.icon, focused && { opacity: 1 }]} resizeMode="contain" />
                ),
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <Image source={images.user} style={[styles.icon, focused && { opacity: 1 }]} resizeMode="contain" />
                ),
            }} name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    icon: {
        width: wp(6.5),
        height: wp(6.5),
        opacity: 0.3,
    }
})