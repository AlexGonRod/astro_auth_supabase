import { defineMiddleware } from "astro:middleware";
const protectedUrls = ['/signin', 'signout/', '/register']

export const onRequest = defineMiddleware(
    async ({url, locals, redirect, cookies}, next) => {
        if(protectedUrls.includes(url.pathname)) {
            const token = cookies.get('sb-token')
            const refreshToken = cookies.get('sb-refresh-token')

            if(!token || !refreshToken) {
                return redirect('/signin')
            }
            return redirect('/')
        }
        return next()
    }
)
