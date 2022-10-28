import React from "react";
import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import ActiveUser from "./ActiveUser";
import Recent from "./Recent";

const HomeScreen = () => {
    return (
       
            <FlatList
                data={[]}
                ListHeaderComponent={()=><ActiveUser />}
                ListFooterComponent={()=><Recent />}
            />
    )
}

export default HomeScreen

const style = StyleSheet.create({})