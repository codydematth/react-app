import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

interface Info{
    title? : string
    input? : string
    bgColor? : string
}
const DeliveryInfo: React.FC <Info> = ({title, input, bgColor}) => {
  return (
    <View>

   
    <View style={{ paddingTop: 30, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 18}}>
          {title}
        </Text>
    </View>
    <View style={[{backgroundColor: bgColor},styles.selectContainer]}>
        <Text style={styles.textInput}>{input}</Text>
    </View> 
    </View>
  )
}

export default DeliveryInfo

DeliveryInfo.defaultProps={
    bgColor:'white'
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 15,
        fontSize: 18,
        textAlign: 'center',
      },
      selectContainer: {
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop: 10,
        marginHorizontal: 15
      },
})