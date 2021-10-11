import React from 'react'
import { Text as TextNative } from 'react-native'

export default Text = ({ size, bold, color, children, paddingTop, paddingLeft, paddingRight, paddingBottom, fontFamily}) => {
    return (
        <TextNative style={{ fontSize: size, fontWeight: bold ? 'bold' : '500', color,  paddingTop, paddingLeft, paddingRight, paddingBottom, fontFamily}}>
            {children}
        </TextNative>
    )
}
