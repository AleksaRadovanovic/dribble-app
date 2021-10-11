import React from 'react'
import FastImage from 'react-native-fast-image'

export default Image = ({ width, height, uri, borderRadius, borderWidth, borderColor, elevation, stretch, contain, center}) => {
    return (
        <FastImage
            style={{ width, height, borderRadius, borderWidth, borderColor, elevation }}
            source={{
                uri: uri || null,
                priority: FastImage.priority.normal,
            }}
            resizeMode={stretch ? FastImage.resizeMode.stretch : contain ? FastImage.resizeMode.contain : center ? FastImage.resizeMode.center : FastImage.resizeMode.cover}
        />
    )
}
