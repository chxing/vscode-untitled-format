const parser = require("fast-xml-parser");
const vkbeautify = require("vkbeautify");

const formatStyles = ["pretty", "minmum"];
let formatStyle = formatStyles[0];

function XMLFormatter() {

    this.update = function (data) {
        this.sourceData = data;

        if (this.data == undefined) this.data = "";
        this.data = this.data.replace(/\r/g, "");
        data = data.trim().replace(/\r/g, "");
        let changed = this.data == data;
        // console.log("existing xml is the same as the updated:", changed)
        if (changed) {
            let index = formatStyles.findIndex(function (elem) {
                if (elem == formatStyle) {
                    return true;
                }
            })
            index = (index + 1) % formatStyles.length;
            formatStyle = formatStyles[index];
        } else {
            formatStyle = formatStyles[0];
        }

        this.data = data.trim();
        let checked = parser.validate(data.trim());
        if (checked == true) { this.isXml = true; return; }

        this.data = "";
        let lineArrary = data.trim().split('\n');
        for (let line of lineArrary) this.data += line.trim();
        checked = parser.validate(this.data);
        if (checked == true) { this.isXml = true; return; }

        this.isXml = false;
        this.ValidationError = checked;
    };

    this.isXML = function () {
        return this.isXml;
    }

    this.format = function () {
        if (this.isXML() == true) {
            if (formatStyle == "pretty") {
                this.data = vkbeautify.xml(this.data);
            } else {
                this.data = vkbeautify.xmlmin(this.data);
            }
            return this.data;
        } else {
            // console.log("xml valid", this.ValidationError)
            return this.sourceData;
        }
    }
};

module.exports = XMLFormatter;