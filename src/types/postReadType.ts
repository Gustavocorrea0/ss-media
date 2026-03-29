export type PostReadParam = {
    id_post: string;
    id_user_post: { 
        name: string 
    };
    text_post: string;
    datetime_create: string;
    datetime_update: string;
    liked_by_user: boolean; // opcional 
};

export type PostReadError = {
    message: string
}