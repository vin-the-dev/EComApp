import * as React from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../"

const MAIN_CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  width: "50%",
  paddingBottom: spacing.medium,
}

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const WRAPPER_CONTAINER: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}

const IMAGE_STYLE: ImageStyle = {
  height: 150,
  width: 150,
}

export interface ProductProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  item: any
}

/**
 * Describe your component here
 */
export const Product = observer(function Product(props: ProductProps) {
  const { style, item } = props

  return (
    <View style={MAIN_CONTAINER}>
      <View style={WRAPPER_CONTAINER}>
        <View style={[CONTAINER, style]}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={IMAGE_STYLE}
          />
          <Text preset="default" text={item.name} />
          <Text preset="description" text={item.description} />
        </View>
      </View>
    </View>
  )
})
