import { supabase } from "../../lib/supabase";
import { PostReadParam } from "../types/postReadType";
import { PostParam } from "../types/postType";

export const createPost = async ({ idUserPost, textPost }: PostParam) => {

    const { error: errorInsertPost } = await supabase.from('posts')
                                                     .insert({
                                                         id_user_post: idUserPost,
                                                         text_post: textPost
                                                    });

    if (errorInsertPost) {
        throw errorInsertPost;
    } else {
        return true;
    }

}

export const fetchAllPosts = async ( idCurrentAuthUser: string ) => {

    const [{ data: postsData, error: postsError }, { data: userLikes, error: likesError }] = await Promise.all([
        supabase.from('posts')
                .select(`
                    id_post,
                    id_user_post(name),
                    text_post,
                    datetime_create,
                    datetime_update
                `)
                .order('datetime_create', { ascending: false }),
        supabase.from('likes')
                .select('id_post')
                .eq('id_user_like', idCurrentAuthUser),
    ]);
    
    if ( postsError ) {
        throw postsError;
    } else if (postsData.length == 0) {
        throw postsError;
    } else {
        const likedPostIds = new Set(userLikes?.map(l => l.id_post));
        const result: PostReadParam[] = postsData?.map(post => ({
            ...post,
            id_user_post: Array.isArray(post.id_user_post) 
                ? post.id_user_post[0] 
                : post.id_user_post,
            liked_by_user: likedPostIds.has(post.id_post),
        })) ?? [];

        return result;
    }

}

export const addLikeFromPost = async (idPost: string, idUserLike: string) => {

    const { error: errorAddLikePost } = await supabase.from('likes')
                                                      .insert({
                                                          id_post: idPost,
                                                          id_user_like: idUserLike
                                                      });

    if (errorAddLikePost) {
        throw errorAddLikePost;
    } else {
        return true;
    }
    
}

export const removeLikeFromPost = async (idPost: string, idUserLike: string) => {

    const { error: errorRemoveLikePost } = await supabase.from('likes')
                                                      .delete()
                                                      .eq('id_post', idPost)
                                                      .eq('id_user_like', idUserLike);

    if (errorRemoveLikePost) {
        throw errorRemoveLikePost;
    } else {
        return true;
    }

}

export const validLikePost = async (idPost: string, idUserLike: string) => {
    
    const { data, error } = await supabase.from('likes')
                                    .select('id_post, id_user_like')
                                    .eq('id_post', idPost)
                                    .eq('id_user_like', idUserLike)
                                    .limit(1);
    
    if (error) {
        return false;
    } else if (data.length == 0)  {
        return false;
    } else {
        return true;
    }

}

export const countPostCurrentUser = async ( idCurrentUserAuth: string ) => {
    
    const { count: countPost, error: erroCountPosts } = await supabase.from('posts')
                                                                      .select('*', { count: 'exact', head: true })
                                                                      .eq('id_user_post', idCurrentUserAuth);

    if (erroCountPosts) {
        throw erroCountPosts;
    } else {
        return countPost;
    }

}

export const fetchAllPostsCurrentUser = async ( idCurrentAuthUser: string ) => {

    const [{ data: postsData, error: postsError }, { data: userLikes, error: likesError }] = await Promise.all([
        supabase.from('posts')
                .select(`
                    id_post,
                    id_user_post(name),
                    text_post,
                    datetime_create,
                    datetime_update
                `)
                .eq("id_user_post", idCurrentAuthUser)
                .order('datetime_create', { ascending: false }),
        supabase.from('likes')
                .select('id_post')
                .select('id_post')
                .eq('id_user_like', idCurrentAuthUser),
    ]);
    
    if ( postsError ) {
        throw postsError;
    } else if (postsData.length == 0) {
        throw postsError;
    } else {
        const likedPostIds = new Set(userLikes?.map(l => l.id_post));
        const result: PostReadParam[] = postsData?.map(post => ({
            ...post,
            id_user_post: Array.isArray(post.id_user_post) 
                ? post.id_user_post[0] 
                : post.id_user_post,
            liked_by_user: likedPostIds.has(post.id_post),
        })) ?? [];

        return result;
    }

}