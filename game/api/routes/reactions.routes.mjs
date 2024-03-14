import {HttpMethod, Route} from "#structs/route.mjs";
import {createReaction, deleteReaction, getReaction, getReactionsList} from "#controllers/reactions.controller.mjs";

export default [
    // Get a reaction by id
    new Route(HttpMethod.GET, '/reactions/:id', [], async (req, res) => {
        await getReaction(res, req.params.id)
    }),
    // Get reactions list
    new Route(HttpMethod.GET, '/reactions', [], async (req, res) => {
        await getReactionsList(res)
    }),
    // Create a reaction
    new Route(HttpMethod.POST, '/reactions', [], async (req, res) => {
        await createReaction(res, req.body)
    }),
    // Delete a reaction
    new Route(HttpMethod.DELETE, '/reactions/:id', [], async (req, res) => {
        await deleteReaction(res, req.params.id)
    })
]
