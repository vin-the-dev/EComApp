import * as React from "react"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface BannerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  imageUrl?: string
}

/**
 * Describe your component here
 */
export const Banner = observer(function Banner(props: BannerProps) {
  const { style, imageUrl } = props

  return (
    <View style={[CONTAINER, style]}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
      />
    </View>
  )
})
