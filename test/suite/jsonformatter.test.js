const assert = require('assert');
const JsonFormatter = require('../../jsonformatter');
const XMLFormatter = require('../../xmlformatter');

let jsonData, jformatter, xformatter;
jsonData = `
{
    "name": "BeJson",
    "url": "http://www.bejson.com",
    "address": {
        "city": "江苏苏州"
    },
    "links": [
        {
            "url": "http://www.google.com"
        },
        {
            "url": "http://www.SoSo.com"
        }
    ]
}
`;

jformatter = new JsonFormatter();
xformatter = new XMLFormatter();
jformatter.update(jsonData);
console.log(jformatter.isJSON());
console.log(xformatter.isXML());

jsonData = `
{
    'name': 'BeJson',
    'url': 'http://www.bejson.com',
    'address': {
        'city': '江苏苏州'
    }
}
`
// console.log("@", encodeURIComponent(data), "@")
// console.log("@", encodeURIComponent(this.data), "@")
jformatter.update(jsonData);
jsonData = jformatter.format();
console.log(jsonData);
jformatter.update(jsonData);
jsonData = jformatter.format();
console.log(jsonData);
jformatter.update(jsonData);
jsonData = jformatter.format();
console.log(jsonData);