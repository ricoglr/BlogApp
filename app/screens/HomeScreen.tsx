import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '@/context/BlogContext'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function HomeScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Text>HomeScreen</Text> */}
      <Button title='Ekle' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {

          return (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <EvilIcons name="trash" size={30} color="black" />
          </View>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical:20,
  },
  title: {
    fontSize: 20,
  }
})