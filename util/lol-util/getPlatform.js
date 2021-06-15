
module.exports = function getPlatform(platformId) {
    if(platformId == 'BR') return 'BR1'
    if(platformId == 'EUN') return 'EUN1'
    if(platformId == 'euw' || 'EUW') return 'EUW1'
    if(platformId == 'JP') return 'JP1'
    if(platformId == 'KR') return 'KR'
    if(platformId == 'LA') return 'LAN1'
    if(platformId == 'LA') return 'LAS1'
    if(platformId == 'NA') return 'NA1'
    if(platformId == 'OC') return 'OC1'
    if(platformId == 'TR') return 'TR1'
    if(platformId == 'RU') return 'RU'
}