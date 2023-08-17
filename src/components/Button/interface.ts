import type { StyleProp,ViewStyle,TextStyle  } from "react-native";

export interface IButton{
    text?:string,
    onPress?:() =>void,
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    leftItem?:JSX.Element | JSX.Element[] | undefined,
    theme?: 'primary' |  'secondary',
    
}