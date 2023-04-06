import { TouchableOpacity, View, Text, Image } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({imgUrl, handlepress, ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
    }}
    onPress={handlepress}
    >
        <Image source={imgUrl} resizedMode="contain" style={{width: 24, height:24}}/>
    </TouchableOpacity>
  )
}

export const RectButton=({minWidth, fontSize, handlepress, ...props}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            padding: SIZES.small,
            ...props,
        }}
            onPress={handlepress}
        >
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: 'center'
            }}>
                Place a bid
            </Text>
        </TouchableOpacity>
    );
}
  