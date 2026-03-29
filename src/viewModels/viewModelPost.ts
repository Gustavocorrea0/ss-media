import { useState } from "react";
import { addLikeFromPost, countPostCurrentUser, createPost, fetchAllPosts, fetchAllPostsCurrentUser, removeLikeFromPost, validLikePost } from "../service/postService";
import { fetchCurrentUser, fetchNameCurrentUser } from "../service/userService";
import { PostReadParam } from "../types/postReadType";

type PostState = {
    loading: boolean;
    error: string | null
}

export const viewModelCreatePost = () => {

    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const createNewPost = async ( textPost: string ) => {
        try {
            setState({ loading: true, error: null });
            var idUserPost = await fetchCurrentUser();
            await createPost({ idUserPost, textPost });
            return true;
        } catch ( err: any ) {
            if (err instanceof Error) {
                setState({
                    loading: false,
                    error: err.message
                });
            } else {
                setState({
                    loading: false,
                    error: err
                });
            }
        } finally {
            setState({ loading: false, error: null });
        }
    }

    return {
        createNewPost,
        loading: state.loading,
        error: state.error,
    };


};

export const viewModelFetchPost = () => {

    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const [posts, setPosts] = useState<PostReadParam[]>([]);

    const fetchPosts = async () => {
        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();
            const data = await fetchAllPosts(idUserCurrent);
            setPosts(data);
        } catch ( err: any ) {
            if (err instanceof Error) {
                setState({
                    loading: false,
                    error: err.message
                });
            } else {
                setState({
                    loading: false,
                    error: err
                });
            }
        } finally {
            setState({ loading: false, error: null });
        }
    }

    return {
        fetchPosts,
        posts: posts,
        loading: state.loading,
        error: state.error,
    };

};

export const viewModelLikePost = () => {
    
    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const [like, setLike] = useState(false);

    const likePost = async (idPost: string) => {
        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();
            
            const isLike = await addLikeFromPost(idPost, idUserCurrent);
            
            if (isLike) {
                setLike(true);
            } 
            
        } catch (error) {
            
        };
    };

    return {
        likePost,
        like: like,
        loadingAddLike: state.loading,
        errorAddLike: state.error,
    }

};

export const viewModelRemoveLikePost = () => {
    
    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const [removeLike, setRemoveLike] = useState(false);

    const removeLikePost = async (idPost: string) => {
        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();
            
            const isLike = await removeLikeFromPost(idPost, idUserCurrent);
            
            if (isLike) {
                setRemoveLike(true);
            } 
            
        } catch (error) {
            setState({ loading: true, error: null });
            return false;
        };
    };

    return {
        removeLikePost,
        removeLike: removeLike,
        loadingRemoveLike: state.loading,
        errorRemoveLike: state.error,
    }

};

export const viewModelValidLikePost = () => {

    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const validLike = async (idPost: string) => {
        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();
            
            const isLike = await validLikePost(idPost, idUserCurrent);
            
            if (isLike) {
                return true;
            } else {
                return false;
            }
            
        } catch (error) {
            setState({ loading: true, error: null });
        };
    };

    return {
        validLike,
        loadingvALIDLike: state.loading,
        errorValidLike: state.error,
    }

};

export const viewModelCountPosts = () => {
    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const countAllPost = async () => {
        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();

            const posts = await countPostCurrentUser(idUserCurrent)

            if (posts) {
                return posts;
            }

        } catch (error) {
            setState({ loading: true, error: null });
        };
    };

    return {
        countAllPost,
        loadingvALIDLike: state.loading,
        errorValidLike: state.error,
    }

};

export const viewModelFetchPostCurrentUser = () => {

    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const [postsCurrent, setPostsCurrent] = useState<PostReadParam[]>([]);

    const fetchPostsCurrentUser = async () => {

        try {
            setState({ loading: true, error: null });
            var idUserCurrent = await fetchCurrentUser();
            const data = await fetchAllPostsCurrentUser(idUserCurrent);
            setPostsCurrent(data);
        } catch ( err: any ) {
            if (err instanceof Error) {
                setState({
                    loading: false,
                    error: err.message
                });
            } else {
                setState({
                    loading: false,
                    error: err
                });
            }
        } finally {
            setState({ loading: false, error: null });
        }
        
    }

    return {
        fetchPostsCurrentUser,
        posts: postsCurrent,
        loading: state.loading,
        error: state.error,
    };

};

export const viewModelFetchConstUserName = () => {
    
    const [state, setState] = useState<PostState>({
        loading: false,
        error: null
    });

    const [userName, setUserName ] = useState();

    const fetchNameUser = async () => {
        try {
            setState({ loading: true, error: null });
            var idCurrentUser = await fetchCurrentUser();
            const data = await fetchNameCurrentUser(idCurrentUser);
            
            if (data == "") {
                return ""
            } else {
                setUserName(data)
                return data
            }

        } catch (err) {
            if (err instanceof Error) {
                setState({
                    loading: false,
                    error: err.message
                });
            } 
        } finally {
            setState({ loading: true, error: null });
        }
    }

    return {
        fetchNameUser,
        userNameCurrent: userName,
        loading: state.loading,
        error: state.error,
    };

}