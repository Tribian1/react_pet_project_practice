import React from 'react';
import './style.scss'
import {useNavigate} from 'react-router-dom';


const Block = function(props) {
    const router = useNavigate();
   

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post__btn">
                <button onClick={() => props.remove(props.post)}>Delete</button>
                <button onClick={() => router(`/postIdPage/${props.post.id}`)}>Open</button>
            </div>
        </div>
    );
};

export default Block;