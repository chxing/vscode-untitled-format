const validator = require('validator');
const vkbeautify = require("vkbeautify");

const formatStyles = ["pretty", "minmum"];
let formatStyle = formatStyles[0];

function JsonFormatter() {

    this.update = function (data) {
        this.sourceData = data;

        if (this.data == undefined) this.data = "";
        this.data = this.data.replace(/\r/g, "");
        data = data.trim().replace(/\r/g, "");
        let changed = this.data == data;
        // console.log("existing json is the same as the updated:", changed)
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
        let checked = validator.isJSON(data.trim());
        if (checked == true) { this.isJson = true; return; }

        this.data = "";
        let lineArrary = data.trim().split('\n');
        for (let line of lineArrary) this.data += line.trim();
        checked = validator.isJSON(this.data);
        if (checked == true) { this.isJson = true; return; }

        this.data = this.data.replace(/["]/g, "\\\"");
        this.data = this.data.replace(/[']/g, "\"");
        checked = validator.isJSON(this.data);
        if (checked == true) { this.isJson = true; return; }

        this.isJson = false;
        this.ValidationError = checked;
    }

    this.isJSON = function () {
        return this.isJson;
    }

    this.format = function () {
        if (this.isJSON() == true) {
            if (formatStyle == "pretty") {
                this.data = vkbeautify.json(this.data);
            } else {
                this.data = vkbeautify.jsonmin(this.data);
            }
            return this.data;
        } else {
            // console.log("json valid:", this.ValidationError)
            return this.sourceData;
        }
    }
}

module.exports = JsonFormatter;