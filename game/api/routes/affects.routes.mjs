import {HttpMethod, Route} from "#structs/route.mjs";
import {createAffect, getAffects} from "#controllers/affects.controller.mjs";

export default [
    new Route(HttpMethod.GET, '/affects', [], async (req, res) => {
      await getAffects(res)
    }),
    new Route(HttpMethod.POST, '/affects', [], async (req, res) => {
      await createAffect(res, req.body)
    })
]
