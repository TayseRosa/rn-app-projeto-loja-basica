import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Product } from '../types/Product'

type Props = {
  product: Product;
}

export const ProductItem = (props: Props)=>{

  const handleAddNewCart = () => {
    alert('Você esta comprando: '+props.product.name)
  }

  return(
    <View style={styles.container}>
      <Image
        source={{ uri: props.product.image }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}> {props.product.name} </Text>
        <Text> {props.product.price.toFixed(2)} </Text>
        <Text style={styles.price}> {props.product.price} </Text>
        <Button title="Comprar" onPress={handleAddNewCart} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginBottom:20
  },
  image:{
    width:100,
    height:100,
  },
  info:{
    flex:1,
    marginLeft:20
  },
  name:{
    fontWeight:'bold',
    fontSize:21,
    marginBottom:10,
  },
  price:{
    color:'#ff0000',
    fontSize:16,
    marginBottom:10,
  }
});







