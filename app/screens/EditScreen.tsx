import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '@/context/BlogContext'
import BlogPostForm from '@/components/BlogPostForm';

const EditScreen = ({route}) => {
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  if (!blogPost) {
    // Eğer blogPost bulunamazsa, alternatif bir UI ya da mesaj gösterebiliriz
    return <Text>Blog Post bulunamadı!</Text>;
  }
  
  return (
    <BlogPostForm isEditable={true} initialValues={{title: blogPost.title, content:blogPost.content}}></BlogPostForm>
  );
}

export default EditScreen

const styles = StyleSheet.create({})