import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from './../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../../src/components/UI/Loader/MyLoader';

const PostIdPage = (props) => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, ComError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })
    

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    }, [])
    
    return (
        <div>
            <h1>You opened page ID - {params.id} </h1>
            {isLoading 
                ? <Loader/>
                : <div>{post.title}, {post.id}</div>
            }
            <hr  />
            <h1 className='mt-20 text-center'>Comments</h1>
            {isComLoading 
                ? <Loader/>

                : <div>
                    {comments.map(comm => 
                        <div key={comm.id}>
                            <h5 className='mt-20'> {comm.email} </h5>
                            <div className='mt-10'> {comm.body} </div>
                        </div>
                    
                    )}
                  </div>
            }
        </div>
    );
};

export default PostIdPage;