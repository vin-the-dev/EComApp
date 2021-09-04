import * as React from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const IMAGE_STYLE: ImageStyle = {
  height: "100%",
  width: "100%",
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
        style={IMAGE_STYLE}
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
      />
    </View>
  )
})
