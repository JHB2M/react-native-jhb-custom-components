import type {TextStyle, ViewStyle,StyleProp } from "react-native";

export interface ITextInput{
    style?:StyleProp<ViewStyle>,
    title?:string,
    value?:string,
    onChangeText?: ((text: string) => void) | undefined;
    placeholder?:string,
    rightItem?: JSX.Element | JSX.Element[] | undefined,
    titleStyle? :StyleProp<TextStyle>,
    inputContainerStyle? :StyleProp<ViewStyle>,
    inputStyle? :StyleProp<ViewStyle>,
    placeholderTextColor? :string,
    multiline? :boolean,
}