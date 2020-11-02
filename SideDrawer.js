import * as React from 'react';
import { Button, View, Image, Pressable, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 50, backgroundColor: "green", justifyContent: "center" }}>
                <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Image source={{ uri: "https://i.stack.imgur.com/Fw96Z.png" }} style={{ width: 30, height: 30, tintColor: "white", marginLeft: 10 }}></Image>
                </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }}>

                <Text>HOME</Text>
            </View>
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 50, backgroundColor: "green", justifyContent: "center" }}>

                <Pressable onPress={() => navigation.toggleDrawer()
                }>

                    <Image source={{ uri: "https://i.stack.imgur.com/Fw96Z.png" }} style={{ width: 30, height: 30, tintColor: "white", marginLeft: 10 }}></Image>
                </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "cyan" }}>

                <Text>Notification</Text>
            </View>


        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
}