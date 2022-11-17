import React from 'react';
import {useState} from 'react';


import './style.scss'
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';






const PostForms = ({create}) => {

    const [posts, setPosts] = useState({title:'', body:''});

		const addNewPost = (e) => {
			e.preventDefault()
            const newPost = {
                ...posts, id: Date.now()
            }
			
			create(newPost);
			setPosts({title:'', body:''})
		}

    return (
        <form className='text-center mt-25'>
            <MyInput 
                value={posts.title}
                onChange={(e) => setPosts({...posts, title: e.target.value})}
                type="text" 
                placeholder='Post Name' 
            />

            <MyInput 
                value={posts.body}
                onChange={(e) => setPosts({...posts, body: e.target.value})}
                type="text" 
                placeholder=' Name Description' />

            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForms;