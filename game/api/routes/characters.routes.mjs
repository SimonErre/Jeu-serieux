import {HttpMethod, Route} from "#structs/route.mjs";
import enums from "#utils/enums.mjs";
import {
  createCharacter,
  deleteCharacter,
  getCharacter,
  getCharactersList
} from "#controllers/characters.controller.mjs";

export default [
  new Route(HttpMethod.GET, '/characters/criteria', [], (req, res) => {
    res.json(enums)
  }),
  // Get genders
  new Route(HttpMethod.GET, '/characters/criteria/genders', [], (req, res) => {
    res.json(enums.genders)
  }),
  // Get skins
  new Route(HttpMethod.GET, '/characters/criteria/skins', [], (req, res) => {
    res.json(enums.skins)
  }),
  // Get csps
  new Route(HttpMethod.GET, '/characters/criteria/csps', [], (req, res) => {
    res.json(enums.csps)
  }),
  // Get all characters
  new Route(HttpMethod.GET, '/characters', [], async (req, res) => {
    await getCharactersList(res, req.query)
  }),
  // Get a character
  new Route(HttpMethod.GET, '/characters/:name', [], async (req, res) => {
    await getCharacter(res, req.params.name)
  }),
  // Create character
  new Route(HttpMethod.POST, '/characters', [], async (req, res) => {
    await createCharacter(res, req.body)
  }), // TODO: Authentication needed
  // Delete character
  new Route(HttpMethod.DELETE, '/characters/:name', [], async (req, res) => {
    await deleteCharacter(res, req.params.name)
  }) // TODO: Authentication needed
]
