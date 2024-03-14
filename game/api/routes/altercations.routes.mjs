import {HttpMethod, Route} from "#structs/route.mjs";
import {
    createAltercation,
    getRandomAltercation,
    getRandomTutorialAltercation
} from "#controllers/altercations.controller.mjs";

export default [
    // Create an altercation
    new Route(HttpMethod.POST, '/altercations', [], async (req, res) => {
        await createAltercation(res, req.body.label)
    }),
    // Get a random altercation
    new Route(HttpMethod.GET, '/altercations/:code', [], async (req, res) => {
        await getRandomAltercation(res, req.params.code)
    }),
    // Get a random altercation for the tutorial phase
    new Route(HttpMethod.GET, '/altercations/tuto', [], async (req, res) => {
        await getRandomTutorialAltercation(res)
    })
]
