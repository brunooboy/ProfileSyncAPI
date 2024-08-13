const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const apiController = require('../controllers/apiController');

router.get('/', indexController.home);
router.get('/api', apiController.api);
// userClient
router.get('/api/discord/users/:id', apiController.api_discord_user);
router.get('/api/discord/users/:id/avatar', apiController.api_discord_user_avatar);
router.get('/api/discord/users/:id/banner', apiController.api_discord_user_banner);
// userGuild
router.get('/api/discord/guild/users/:id', apiController.api_discord_guild_user);
router.get('/api/discord/guild/users/:id/avatar', apiController.api_discord_guild_user_avatar);
router.get('/api/discord/guild/users/:id/banner', apiController.api_discord_guild_user_banner);

module.exports = router;