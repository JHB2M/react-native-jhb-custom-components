import * as React from 'react';
import {  View ,Text,TextInput} from 'react-native';
import type { ITextInput } from './interface';
import styles from './style'
const Input = ({
  title,
  value,
  onChangeText,
  placeholder,
  rightItem,
  style,
  titleStyle,
  inputContainerStyle,
  inputStyle,
  placeholderTextColor,
  multiline =false,

}:ITextInput) => {
  return (
    <View style={[styles.container,style]}>
      <Text style ={[styles.title,titleStyle]}>{title}</Text>
      <View style ={[styles.inputContainer,inputContainerStyle]}>
        <TextInput 
        style ={[styles.input,inputStyle]} 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        multiline  ={multiline}
        />
        {rightItem}
      </View>

    </View>
  );
};

export default Input;
