import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const BlogPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <View>
      <Text>Başlığı giriniz: </Text>
      <TextInput value={title} onChangeText={(text)=> setTitle(text)}/>
      <Text>İçeriği giriniz: </Text>
      <TextInput value={content} onChangeText={(text)=> setContent(text)}/>
      <TouchableOpacity>
        <Text>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlogPostForm

const styles = StyleSheet.create({})