import {HttpMethod, Route} from "#structs/route.mjs";
import {createSession, getSession} from "#controllers/sessions.controller.mjs";

export default [
    // Create a session
    new Route(HttpMethod.POST, '/session', [], async (req, res) => {
        await createSession(res, req.body)
    }),
    // Get a session
    new Route(HttpMethod.GET, '/session/:code', [], async (req, res) => {
        await getSession(res, req.params.code)
    })
]
