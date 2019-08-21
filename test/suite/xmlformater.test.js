const assert = require('assert');
const XMLFormatter = require('../../xmlformatter');

let xmlData, formatter;
xmlData = `
    <note>
    <to>George</to>
    <from>John</from>
    <heading>Reminder</heading>
    <body>Don't forget the meeting!</body>
    </note>
`;

formatter = new XMLFormatter()
formatter.update(xmlData)
xmlData = formatter.format()
console.log(xmlData);
console.log('---------- ----------- -----------')
formatter.update(xmlData)
xmlData = formatter.format()
console.log(xmlData);
console.log('---------- ----------- -----------')
formatter.update(xmlData)
xmlData = formatter.format()
console.log(xmlData);
console.log('---------- ----------- -----------')

xmlData = `
[2019-07-07 05:24:33,448] INFO [ReplicaFetcherManager on broker 0] shutting down (kafka.server.ReplicaFetcherManager)
[2019-07-07 05:24:33,451] INFO [ReplicaFetcherManager on broker 0] shutdown completed (kafka.server.ReplicaFetcherMan
ager)
[2019-07-07 05:24:33,448] INFO [ReplicaFetcherManager on broker 0] shutting down (kafka.server.ReplicaFetcherManager)
[2019-07-07 05:24:33,451] INFO [ReplicaFetcherManager on broker 0] shutdown completed (kafka.server.ReplicaFetcherMan
ager)
`
formatter.update(xmlData)
xmlData = formatter.format();
console.log(formatter.isXML())
console.log(xmlData);
// // Tag is an invalid name.
// xmlData = `
//   <no
//   te>
//   <from>John</from>
//   <body>Don't forget t
//   he meeting!</body>
//   </note>
// `;
// formatter = new XMLFormatter()
// formatter.putXmlData(xmlData)
// formatter.format()