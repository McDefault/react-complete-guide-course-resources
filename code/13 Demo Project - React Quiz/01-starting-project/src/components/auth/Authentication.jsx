import AuthForm from './AuthForm.jsx';
import {redirect} from "react-router-dom";
import {setAuthExpiration, setAuthToken} from "../../util/auth.js";

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

    const url = `http://localhost:8080/${mode}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response; //return for useActionData
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not authenticate user.'}), {
            status: 500,
        });
    }

    const resData = await response.json();
    const token = resData.token;

    const expires = new Date();
    expires.setHours(expires.getHours() + 1);

    setAuthToken(token);
    setAuthExpiration(expires.toISOString());

    return redirect('/');
}