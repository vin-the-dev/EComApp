// https://github.com/cmcaboy/imageCarouselExample/blob/a2a6aa0bc926867379e6e61d080a4235f19071e5/BackgroundCarousel.js#L6

import * as React from "react"
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native"

const DEVICE_WIDTH = Dimensions.get("window").width

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef()
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
    this.scrollRef = React.createRef()
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0,
          })
        },
      )
    }, 3000)
  }

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset
    const viewSize = event.nativeEvent.layoutMeasurement

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width)
    this.setState({ selectedIndex })
  }

  render() {
    const { images } = this.props
    const { selectedIndex } = this.state
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image) => (
            <Image
              style={styles.backgroundImage}
              source={{ uri: image }}
              key={image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[styles.whiteCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width,
  },
  circleDiv: {
    alignItems: "center",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    height: 10,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  whiteCircle: {
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 6,
    margin: 5,
    width: 6,
  },
})

export { BackgroundCarousel }
