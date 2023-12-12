import type { APIRoute } from "astro";

export const POST: APIRoute = ({cookies, redirect}) => {
    cookies.delete('sb-token', {path: '/'})
    cookies.delete('sb-refresh-token', {path: '/'})

    return redirect('/signin')
}
