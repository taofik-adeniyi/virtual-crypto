import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserRankingItem from "../../components/UserRankingItem";

import styles from './styles'
const image = require("../../../assets/images/Saly-20.png");

const portfolioCoins = [
  {
    id: 1,
    name: "Virtual Dollars",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    networth: 6942,
  },
  {
    id: 2,
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    networth: 59420,
  },
  {
    id: 3,
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    networth: 30120,
  }
];
const RankingScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item, index }) => <UserRankingItem user={item} place={index+1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Rankings</Text>
          </>
        )}
      />
    </View>
  );
};

export default RankingScreen;
