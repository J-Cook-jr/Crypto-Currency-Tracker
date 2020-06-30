import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/CoinIcons';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        backgroundColor: "hsl(210, 38%, 97%)",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        borderBottomWidth: 1,
        borderBottomColor: "hsl(0, 0%, 88%)",
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "transparent",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    image,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;


const CoinCard = ({ symbol, coin_name, price_usd, percent_change_percentage_24h, percent_change_percentage_7d }) => {


    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>${price_usd}</Text>

            </View>

            <View style={statisticsContainer}>

                <Text>24h:
                     <Text style={percent_change_percentage_24h.toFixed(2) < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_percentage_24h.toFixed(2)} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_percentage_7d.toFixed(2) < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_percentage_7d.toFixed(2)} % </Text>
                </Text>

            </View>

        </View>
    );
}



export default CoinCard;