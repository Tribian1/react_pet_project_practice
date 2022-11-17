import React from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import Block from '../Block/Block'
import './style.scss'

const PostList = ({post,title, remove}) => {

    if(!post.length) {
        return (
            <h1 className='text-center mt-30'>
                Post not found
            </h1>
       )
    }

    return (
        <div className='2' >
            <h1 className='text-center mt-20'>
                {title}
            </h1>
            <TransitionGroup>
                {post.map((post, index) =>
                    <CSSTransition 
                        key={post.id} 
                        timeout={500} 
                        classNames="posts">
                        
                         <Block remove={remove} number={index + 1} post={post} />
                    </CSSTransition>  
     
                )}
            </TransitionGroup> 
        </div>
    );
};

export default PostList;