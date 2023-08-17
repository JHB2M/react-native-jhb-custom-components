import * as React from 'react';
import { Text,  StyleSheet,Pressable,View } from 'react-native';
import type { IButton } from './interface';



const Button = ({
    text,
    onPress,
    style,
    textStyle,
    leftItem,
    theme='primary',
}:IButton) => {
  return (
        
    <Pressable style={[styles.container,style,theme =='secondary' ? {backgroundColor:'rgba(220, 38, 38, 0.20)'}:{}]} onPress={onPress}>
        <View style ={styles.leftContainer}>
        {leftItem}
        </View>
      <Text style ={[styles.text,textStyle,theme =='secondary' ? {color:'#DC2626'}:{}]}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    backgroundColor:'#2563EB',
    alignItems:'center',
    borderRadius:40,
    flexDirection:'row',
  },
  leftContainer:{
    marginRight:8,
  },
  text:{
    fontWeight:'500',
    fontSize:14,
    color:'#FFFFFF',
    paddingVertical:10,
  }
});
