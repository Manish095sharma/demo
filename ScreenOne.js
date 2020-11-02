import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

function ScreenOne(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "cyan", justifyContent: "center", alignItems: "center" }}>

            <Text> Screen One</Text>
        </View>
    )
}

ScreenOne.propTypes = {

}

export default ScreenOne

