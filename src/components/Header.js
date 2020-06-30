import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Cryptocurrency App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        backgroundColor: "hsl(210, 32%, 93%)",
        marginTop: 2,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "hsl(210, 32%, 93%)",
        marginTop: 40,
    }
})

const { headerContainer, header } = styles;

export default Header;