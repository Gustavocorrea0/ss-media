import { router } from "expo-router";

const ROUTES = {
    home: "/(home)/home",
} as const;

export function useSignIn(){
    //const [ email, setEmail ] = useState("");
    //const [ password, setPassword ] = useState("");

    function handleSignIn() {
        router.replace(ROUTES.home);
    }

    //return { email, password, setEmail, setPassword, handleSignIn };

}