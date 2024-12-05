import React from 'react';

const BlogContext = React.createContext();

blogPost = [{title:'React Native'}, {title:'TypeScript'}]
export const BlogProvider = ({children}) => {
    return <BlogContext.Provider value={blogPost}>{children}</BlogContext.Provider>
}

export default BlogContext;