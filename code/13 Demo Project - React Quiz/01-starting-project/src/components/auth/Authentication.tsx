import AuthForm from './AuthForm.tsx';
import {redirect} from "react-router-dom";
import {setAuthExpiration, setAuthToken} from "../../util/auth.ts";
import {loginUser} from "../../util/http.ts";

function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export async function authAction({request}) {
    const searchParams = new URL(request.url).searchParams; //get params from URL
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw new Response(JSON.stringify({message: 'Could not authenticate user.'}), {
            status: 422,
        });
    }

    const authFormData = await request.formData();
    const authData = {
        email: authFormData.get('email'),
        password: authFormData.get('password'),
    }

    //todo form validation

    const {token} = await loginUser(authData, mode);

    const expires = new Date();
    expires.setHours(expires.getHours() + 1);

    setAuthToken(token);
    setAuthExpiration(expires.toISOString());

    return redirect('/');
}