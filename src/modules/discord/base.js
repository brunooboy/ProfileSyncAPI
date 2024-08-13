const axios = require('axios')
const config = require('../../manage.json')

const userFetch = async (id) => {
    let dados = await axios.get(config.sub_process.url + ':' + config.sub_process.port + '/client/users/' + id)
    return dados.data
}

const userGuild = async (id) => {
    let dados = await axios.get(config.sub_process.url + ':' + config.sub_process.port + '/guild/users/' + id)
    return dados.data
}

module.exports = {
    userFetch,
    userGuild
}