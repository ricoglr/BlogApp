import React, {useState, useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, {title: 'Vue Js'}]
    
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
    // const [blogPost, setBlogPost] = useState([{title:'React Native'}, {title:'TypeScript'}])
    const [blogPost, dispatch] = useReducer(blogReducer, [{title:'React Native'}, {title:'TypeScript'}])

    const addBlogPost = () => {
        // setBlogPost([...blogPost, {title: 'Vue Js'}])
        dispatch({type: 'add_blogPost'})
    }

    return <BlogContext.Provider value={{
        data: blogPost,
        addBlogPost
    }}>{children}</BlogContext.Provider>
}

export default BlogContext;