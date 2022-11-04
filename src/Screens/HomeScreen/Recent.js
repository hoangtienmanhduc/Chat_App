import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ActiveUserData } from "./Data";
import { ListItem, Avatar } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Recent = () => {
    return (
        <FlatList
            ListHeaderComponent={() => <Text style={{ fontSize: 25 }}>Recent</Text>}
            data={ActiveUserData}
            renderItem={({ item }) => <RenderItem item={item} />}
        />
    );
};

export default Recent

const style = StyleSheet.create({})

const RenderItem = ({ item }) => {
const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("MessageScreen")}>
            <ListItem>
                <Avatar
                    size="medium"
                    rounded
                    source={{ uri: item.image }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <Text>Xin chào</Text>
                </ListItem.Content>
                <Text>4.00 pm</Text>
            </ListItem>
        </TouchableOpacity>
    );
}