import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'


function ScreenTwo(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "tomato", justifyContent: "center", alignItems: "center" }}>

            <Text> Screen Two</Text>
        </View>
    )
}

ScreenTwo.propTypes = {

}

export default ScreenTwo

