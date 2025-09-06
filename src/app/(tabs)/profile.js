import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useUsers } from "../../hooks/useUsers";

export default function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text>SIN TOKEN {error}</Text>;

  return (
    <FlatList
      data={users}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.username}</Text>
        </View>
      )}
    />
  );
}
