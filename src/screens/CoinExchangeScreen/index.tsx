import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

// const image = require("../../../assets/images/Saly-31.png")
const image = require("../../../assets/images/Saly-16.png");

const CoinExchangeScreen = () => {
  // const [coinAmount, setCoinAmount] = useState( initialState: '' )
  // const [coinUSDValue, setCoinUSDValue] = useState( initialState: '' )

  const [coinAmount, setCoinAmount] = useState("");
  const [coinUSDValue, setCoinUSDValue] = useState("");
  const maxUSD = 100000;

  const route = useRoute();

  const isBuy = route?.params.isBuy;

  const coinData = route?.params.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinUSDValue((amount * coinData?.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDValue);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinAmount((amount / coinData?.currentPrice).toString());
  }, [coinUSDValue]);

  const onPlaceOrder = () => {
    // Alert.alert('INT Big')
    if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
      Alert.alert("Error", `Not Enough USD coins. Max: ${maxUSD}`);
    }

    if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
      Alert.alert(
        "Error",
        `Not Enough ${coinData.symbol} coins. Max: ${coinData.amount}`
      );
    }
  };
  // console.warn(coinUSDValue)

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}>
        <Text style={styles.title}>
          {isBuy ? "Buy " : "Sell "}
          {coinData?.name}
        </Text>
        <Text style={styles.subtitle}>
          1 {coinData?.symbol} {" = "}${coinData?.currentPrice}
        </Text>
        <Image style={styles.image} source={image} />

        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="decimal-pad"
              placeholder="0"
              value={coinAmount}
              onChangeText={setCoinAmount}
            />

            <Text>{coinData?.symbol}</Text>
          </View>

          <Text style={{ fontSize: 30 }}>=</Text>

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="decimal-pad"
              // keyboardType="default"
              // returnKeyLabel='Done'
              // returnKeyType='done'
              placeholder="0"
              value={coinUSDValue}
              onChangeText={setCoinUSDValue}
            />
            <Text>USD</Text>
          </View>
        </View>
      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
