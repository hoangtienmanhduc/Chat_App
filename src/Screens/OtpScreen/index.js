// import React from "react";
// import { StyleSheet, Text, View, Image, ImageBackground, Touchable } from "react-native";
// import { Button, Input } from "react-native-elements";
// const OtpScreen = ({navigation}) => {
//     return (
//         <View style={style.main}>
//             <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={style.image}>
//             <Text style={style.title} >OTP</Text>
//             <View style={{ marginTop: 10 }}></View>
//             <Input
//                 placeholder="MaOTP"
//             />
//             <Button
//                 title="Xác nhận"
//                 onPress={() => navigation.navigate("BottomTabNavigator")}
//                 loading={false}
//                 loadingProps={{ size: 'small', color: 'white' }}
//                 buttonStyle={{
//                     backgroundColor: 'rgba(111, 202, 186, 1)',
//                     borderRadius: 15,
//                 }}
//                 titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
//                 containerStyle={{
//                     marginHorizontal: 50,
//                     height: 50,
//                     width: 300,
//                     marginVertical: 10,
//                 }}
//             />
//             </ImageBackground>
//         </View>
//     )
// }

// export default OtpScreen

// const style = StyleSheet.create({
//     title: {
//         fontSize: 35,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: 'black'
//     },
//     main: {
//         height: '100%',
//         justifyContent: 'center',

//     },
//     image: {
//         flex: 1,
//       },
// });