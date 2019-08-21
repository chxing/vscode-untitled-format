const JsonFormatter = require('../../jsonformatter');
const XMLFormatter = require('../../xmlformatter');

const xformatter = new XMLFormatter();
const jformatter = new JsonFormatter();

function formatter(text) {
    xformatter.update(text);
    console.log("isXML:", xformatter.isXML() == true)
    if (xformatter.isXML() == true) {
        // @ts-ignore
        text = xformatter.format();
        console.log("【XML】", text);
        return;
    }

    jformatter.update(text);
    console.log("isJSON:", jformatter.isJSON() == true)
    if (jformatter.isJSON() == true) {
        // @ts-ignore
        text = jformatter.format();
        console.log("【Json】", text);
        return;
    }
}
let data;
data = `
[2019-07-07 05:24:33,448] INFO [ReplicaFetcherManager on broker 0] shutting down (kafka.server.ReplicaFetcherManager)
[2019-07-07 05:24:33,451] INFO [ReplicaFetcherManager on broker 0] shutdown completed (kafka.server.ReplicaFetcherMan
ager)
[2019-07-07 05:24:33,452] INFO [ReplicaAlterLogDirsManager on broker 0] shutting down (kafka.server.ReplicaAlterLogDi
rsManager)
[2019-07-07 05:24:33,452] INFO [ReplicaAlterLogDirsManager on broker 0] shutdown completed (kafka.server.ReplicaAlter
LogDirsManager)
`;
formatter(data);
console.log(data);