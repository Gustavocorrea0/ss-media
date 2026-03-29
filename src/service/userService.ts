import { supabase } from "../../lib/supabase";

export const fetchCurrentUser = async () => {

    const { data: authData, error: authError } = await supabase.auth.getUser();
    
    if (authError) {
        throw authError;
    } else {
        var idUser = authData.user.id
        return idUser;
    }

}

export const fetchNameCurrentUser = async (idCurrentAuthUser: string) => {
    
    const { data: dataUsers, error: errorUsers } = await supabase.from('users')
                                                             .select('name')
                                                             .eq('id_user', idCurrentAuthUser)
                                                             .single();
    if (errorUsers) {
        throw errorUsers;
    } else {
        return dataUsers.name;
    }

}