import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { Product } from "../../components/product/product"
import { FlatList } from "react-native-gesture-handler"
import { BackgroundCarousel } from "../../components/background-carousel/background-carousel"
import { Banner } from "../../components/banner/banner"
import { ProductStoreModel } from "../../models/product-store/product-store"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const BUTTONSTYLE: ViewStyle = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
  backgroundColor: "#5D2555",
}

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { productStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  useEffect(() => {
    // do something
    console.tron.log("HomeScreen")
    productStore.getProducts()
    console.tron.log(productStore.products)
  }, [])

  useEffect(() => {
    console.tron.log("use effect")
    console.tron.log(productStore.products)
  }, [productStore.products])

  // const fecthData = () => {}
  return (
    <Screen style={ROOT} preset="scroll">
      {/* Banner */}
      <View style={{ height: 200, width: "100%", paddingVertical: spacing.medium }}>
        <Banner imageUrl="https://tinyurl.com/y379jw6s" />
      </View>
      {/* Background Carousel */}
      <View style={{ height: 200, paddingVertical: spacing.medium }}>
        <BackgroundCarousel
          images={[
            "https://tinyurl.com/y3w8oaah",
            "https://tinyurl.com/y4vaulog",
            "https://tinyurl.com/y3j7rq6g",
            "https://tinyurl.com/y28jpmyr",
            "https://tinyurl.com/y2w7fbdo",
            "https://tinyurl.com/yy2f6lha",
          ]}
        />
      </View>
      {/* Products */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.medium,
        }}
      >
        <Text preset="header" text="Discounts for you" />
        <Button style={BUTTONSTYLE}>
          <Text preset="bold" text="View All" />
        </Button>
      </View>

      <FlatList
        data={productStore.products}
        numColumns={2}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <Product item={item} />}
        scrollEnabled={true}
        refreshing={productStore.products.length === 0}
      />
    </Screen>
  )
})
