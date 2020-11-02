import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native';
import ScreenOne from "./ScreenOne"
import ScreenTwo from "./SideDrawer"


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function BottomTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="One" component={ScreenOne} />
            <Tab.Screen name="Two" component={ScreenTwo} />
        </Tab.Navigator>
    )
}

BottomTabs.propTypes = {

}

export default BottomTabs

