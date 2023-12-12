import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({request, redirect }) => {
    const formdata = await request.formData();
    const email = formdata.get("email")?.toString();
    const password = formdata.get("password")?.toString();

    if(!email || !password) {
        return new Response("Some data is not found", {status: 400})
    }

    const {error} = await supabase.auth.signUp({email, password})

    if(error) {
        return new Response(error.message, {status: 500})
    }

    return redirect('/signin')
}
