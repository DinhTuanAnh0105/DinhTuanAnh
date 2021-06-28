import React from "react";
import { StyleSheet,Text, View, Image } from "react-native";


const Content = () => {
    
  return (
    <View style={[styles.container, {
    
      flexDirection: "column",
      flex: 1,
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 1, backgroundColor: "white"}}>
        <View style={styles.heading}>
            <Text style={{color: "red"}}>TÌM KIẾM PHỔ BIẾN</Text>
            <Text style={{color: "red"}}>Xem thêm</Text>
        </View>
        <View>
          <View style={styles.displayInline}>
            <View style={styles.product}>
              <View>
                <Text>Tai nghe Bluetooth</Text>
                <Text>172K sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn.tgdd.vn/Products/Images/54/235083/bluetooth-true-wireless-jbl-tune-115-ava-600x600.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={styles.product}>
              <View>
                <Text>Sandal nữ</Text>
                <Text>335k sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://salt.tikicdn.com/cache/w444/ts/product/d6/c9/77/04ba7ec50354ebe3aebfee06d8265165.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
          <View style={styles.displayInline}>
            <View style={styles.product}>
              <View>
                <Text>Croptop nữ</Text>
                <Text>252K sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cf.shopee.vn/file/96a5868da11767e8c13fa12b69d5debb',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={styles.product}>
              <View>
                <Text>Áo phông nữ</Text>
                <Text>402k sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://lytshop.net/cdn/images/mau-ao-phong-nu-dep-2020-3rr.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
        </View>  
      </View>
      <View style={{ flex: 2, backgroundColor: "red" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  heading: {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  displayInline: {
    flexDirection: 'row',
    display: 'flex',
    height: 70,
  },
  product: {
    
    flex: 1,
    borderWidth: 1,
    borderColor: 'pink',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
});

export default Content;