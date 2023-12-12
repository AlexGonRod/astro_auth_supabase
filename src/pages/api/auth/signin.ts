import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({request, redirect, cookies}) => {
    const formdata = await request.formData();
    const email = formdata.get('email')?.toString();
    const password = formdata.get('password')?.toString()

    if(!email || !password) {
        return new Response("Some data is not found" , {status: 400})
    }

    const {error, data} = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if(error) {
        return new Response(error.message, {status: 500})
    }

    const {access_token, refresh_token} = data.session;
    cookies.set('sb-token', access_token, {
        path: '/'
    })
    cookies.set('sb-refresh-token', refresh_token, {
        path: '/'
    })

    return redirect('/')
}
