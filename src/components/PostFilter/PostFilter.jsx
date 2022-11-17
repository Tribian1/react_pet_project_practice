import React from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div  className ='mt-30 '>
			<MyInput 
				value={filter.query}
				onChange={(e) => setFilter ({...filter, query: e.target.value})}
				placeholder = 'Search...'
			/>
			
			<MySelect 
				value={filter.sort}
				onChange={(selectedSort) => setFilter ({...filter, sort: selectedSort})}
				defaultValue="Sort by:"
				options={[
					{value:'title', name:'By Name'},
					{value:'body', name:'By description'},
				]}
			/>
		</div>
    );
};

export default PostFilter;