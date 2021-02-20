import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";

import styles from "./styles";
const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 6942,
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    symbol: "BTC",
    amount: 1.12,
    valueUSD: 59420,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
];
const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}> Potfolio Balance</Text>
              <Text style={styles.balance}> $69.420</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
