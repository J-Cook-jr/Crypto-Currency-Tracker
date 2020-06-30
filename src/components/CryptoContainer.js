import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto)
        return crypto.data.map((coin) => 
            <CoinCard
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.current_price}
                percent_change_percentage_24h={coin.price_change_percentage_24h_in_currency}
                percent_change_percentage_7d={coin.price_change_percentage_7d_in_currency}
            />
        )
    }



    render() {
        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{ color: '#253145' }}
                        animation="fade"
                    />

                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
        backgroundColor: "hsl(210, 32%, 93%)"
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);