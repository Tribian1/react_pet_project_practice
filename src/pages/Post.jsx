import React, {useEffect,useRef} from 'react';  

import {useState} from 'react';
import {usePosts} from '../hooks/usePost';
import {useFetching} from '../hooks/useFetching';
import {useObserver} from '../hooks/useObserver'




import 'macro-css';

import '../style.scss';

import Counter from '../components/Counter/Counter.jsx';
import PostList from '../components/PostList/PostList.jsx';
import PostForms from '../components/PostForms/PostForms';
import PostFilter from '../components/PostFilter/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal.jsx';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/Loader/MyLoader.jsx'
import PostService from '../API/PostService';
import getPageCount from '../../src/utils/getPageCount';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';








function Post() {
	const [post, setPost] = useState
	([
		// {id: 1, title: 'JavaScript', body:' JavaScript - Язик програмування!'},
		// {id: 2, title: 'Paython', body:' Paython - Язик програмування!'},
		// {id: 3, title: 'Java', body:' Java - Язик програмування!'},
		// {id: 4, title: 'Ruby', body:' Ruby - Язик програмування!'}
	]);



		const [filter, setFilter] = useState({sort: '', query:''});
		const [modal, setModal] = useState(false);
		const sortedAndSearchedPost = usePosts(post, filter.sort, filter.query);
		const [totalPage, setTotalPage] = useState(0);
		const [limit, setLimit] = useState(10);
		const [page, setPage] = useState(1);
		const lastElement = useRef();
		

		
		

		const [fetchPosts, isPostsLoading, postError] = useFetching( async() => {
			const response = await PostService.getAll(limit, page);
			setPost([...post, ...response.data]);
			const totalCount = response.headers['x-total-count']
			setTotalPage(getPageCount(totalCount, limit));
		})
		
		useObserver(lastElement, page < totalPage, isPostsLoading, () => {
			setPage(page + 1);
		})


		useEffect(() => {
			fetchPosts()
		}, [page])

		
		
		const createPost = (newPost) => {
			setPost([...post, newPost]);
			setModal(false);
		}

		const removePost = (posts) => {
			setPost(post.filter(p => p.id !== posts.id));
		}
		
		const changePage = (page) => {
			setPage(page);
			
		}


	return (
		<div className="App">
			<Counter />
			<MyModal 
				visible={modal} 
				setVisible={setModal}>
				<PostForms
					create={createPost}
				/> 
			</MyModal>
			<hr className='mt-30'/>
			<MyButton 
				style={{marginTop: 20}} 
				onClick={() => setModal(true)}> 
				Create Post 
			</MyButton>
			
			<PostFilter 
				filter={filter}
				setFilter={setFilter} 
			/>
			
			{postError && 
				<h1>Error ${postError}</h1>
			}
			<PostList 
				remove={removePost} 
				post={sortedAndSearchedPost} 
				title="List of Post"
			/>
			<div ref={lastElement} style={{height: 20, background: 'red'}} />
			{isPostsLoading &&
				<div className='d-flex justify-center mt-50'>
					<MyLoader/>
				</div>
			}
			<Pagination 
				page={page}
				changePage={changePage} 
				totalPage={totalPage}
			/>
		</div>
	);
}

export default Post;




