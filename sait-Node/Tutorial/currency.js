const CND_TO_US = 0.79124077;
const CND_TO_GBP = 0.58801332;
function roundTwo(amount)
{
    return Math.round(amount * 100)/100;
}
exports.CdnToUs = (cdnAmount)=>roundTwo(cdnAmount * CND_TO_US);
exports.UsToCdn = (usAmount)=>roundTwo(usAmount / CND_TO_US);
exports.CdnToGbp = (cdnAmount)=>roundTwo(cdnAmount * CND_TO_GBP);
exports.GbpToCdn = (gbpAmount)=>roundTwo(gbpAmount / CND_TO_GBP);