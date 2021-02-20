import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";

import styles from './styles'
const image = require("../../../assets/images/Saly-17.png");

const portfolioCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    symbol: "USD",
    valueChange24H: 69.42,
    valueUSD: 6942,
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    symbol: "BTC",
    valueChange24H: -1.12,
    valueUSD: 59420,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    valueChange24H: 30,
    valueUSD: 30120,
  }
];
const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;
