import { View, FlatList } from "react-native";
import React from "react";
import { MainLayout } from "../../layouts";
import { TransactionCard } from "../../components";

import Header from "./header";

export function Home() {
  return (
    <MainLayout title={"Hola Chimaobi! 👋"}>
      <FlatList
        data={[
          "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/7455.png",
          "https://s2.coinmarketcap.com/static/img/coins/64x64/2539.png",
        ]}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={<Header />}
        ItemSeparatorComponent={() => <View style={{ paddingVertical: 10 }} />}
        renderItem={({ item }) => <TransactionCard item={item} />}
      />
    </MainLayout>
  );
}
