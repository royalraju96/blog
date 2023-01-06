import React, { useContext } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";

import { MaterialIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  console.log(blogPost);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Edit", { id: navigation.getParam("id") });
          }}
        >
          <MaterialIcons name="edit" size={35} color="black" />
        </TouchableOpacity>
      );
    },
  };
};
const styles = StyleSheet.create({
  container: {},
});

export default ShowScreen;
