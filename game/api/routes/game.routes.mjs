import {HttpMethod, Route} from "#structs/route.mjs";
import {react, getResume} from "#controllers/game.controller.mjs";

export default [
  new Route(HttpMethod.POST, '/game/react', [], async (req, res) => {
    await react(res, req.body)
  }),
  new Route(HttpMethod.GET, '/game/resume/:code', [], async (req, res) => {
    await getResume(res, req.params.code)
  })
]
