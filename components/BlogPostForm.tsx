import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const BlogPostForm = ({onSubmit}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı giriniz: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>

      <Text style={styles.label}>İçeriği giriniz: </Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>

      <View style={styles.buttonMain}>
        <TouchableOpacity style={styles.buttonView} onPress={()=>onSubmit(title, content)}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BlogPostForm

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10
  },
  input: {
   borderWidth: 1,
   margin: 10,
   borderRadius: 10,
   padding: 5,
   fontSize: 18,
   marginBottom: 15
  },
  buttonMain:{
    padding: 30
  },
  buttonView:{
    backgroundColor: 'brown',
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  buttonText:{
    color: "white",
    fontSize: 20
  }
})