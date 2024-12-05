import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '@/context/BlogContext'

export default function HomeScreen() {
  const blogPost = useContext(BlogContext);
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={blogPost}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item})=>{
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})