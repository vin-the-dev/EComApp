import * as React from "react"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
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
    <View
      style={{
        backgroundColor: color.palette.white,
        width: "50%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: spacing.large,
          justifyContent: "space-around",
        }}
      >
        <View style={[CONTAINER, style]}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={{ height: 150, width: 150 }}
          />
          <Text preset="default" text={item.name} />
          <Text preset="description" text={item.description} />
        </View>
      </View>
    </View>
  )
})
