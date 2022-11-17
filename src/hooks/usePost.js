import {useMemo} from 'react';

export const useSortedPosts = (post, sort) => {
    const sortedPost = useMemo( () => {
        if (sort) {
            return [...post].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return post;
    }, [sort, post]);

    return sortedPost;
};

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortedPosts(posts, sort);

    const sortedAndSearchedPost = useMemo( () => {
        return sortedPost.filter(posts => posts.title.toLowerCase().includes(query.toLowerCase()))

    },[query, sortedPost]);

    return sortedAndSearchedPost;
}


