import {HttpMethod, Route} from "#structs/route.mjs";
import {createStat, deleteStat, getStat, getStatsList} from "#controllers/statistics.controller.mjs";

export default [
    new Route(HttpMethod.GET, '/stats', [], async (req, res) => {
        await getStatsList(res)
    }),
    new Route(HttpMethod.GET, '/stats/:id', [], async (req, res) => {
        await getStat(res, req.params.id)
    }),
    new Route(HttpMethod.POST, '/stats', [], async (req, res) => {
        await createStat(res, req.body)
    }),
    new Route(HttpMethod.DELETE, '/stats/:id', [], async (req, res) => {
        await deleteStat(res, req.params.id)
    })
]
