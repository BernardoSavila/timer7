module.exports = async function (context, myTimer) {

    var timeStamp = new Date().toISOString();

    context.log('Timer trigger function executed at', timeStamp);

};
