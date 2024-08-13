const manage = require('../manage.json')
const discordModule = require('../modules/discord/base.js')

// Data API
exports.api = (req, res) => {
   res.json(manage.app)
};

// userFetch - API

exports.api_discord_user = async (req, res) => {
   let userId = (req.params.id)
   res.json(await discordModule.userFetch(userId))
}

exports.api_discord_user_avatar = async (req, res) => {
   let userId = (req.params.id)
   let user = await discordModule.userFetch(userId)
   res.redirect(user.user.displayAvatarURL)
}

exports.api_discord_user_banner = async (req, res) => {
   let userId = (req.params.id)
   let user = await discordModule.userFetch(userId)
   res.redirect(user.user.bannerURL)
}

// userGuild - API

exports.api_discord_guild_user = async (req, res) => {
   let userId = (req.params.id)
   res.json(await discordModule.userGuild(userId))
}

exports.api_discord_guild_user_avatar = async (req, res) => {
   let userId = (req.params.id)
   let user = await discordModule.userGuild(userId)
   res.redirect(user.data.discordUser.displayAvatarURL)
}

exports.api_discord_guild_user_banner = async (req, res) => {
   let userId = (req.params.id)
   let user = await discordModule.userGuild(userId)
   res.redirect(user.data.discordUser.bannerURL)
}