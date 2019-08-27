Blockly.Blocks['color_tcsp3200_begin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("color1", null, ["Plugin.ColorSensor"], ["Plugin.ColorSensor"]), "instance")
            .appendField("RGB detector (OUT :")
            .appendField(new Blockly.FieldNumber(23), "OUT")
            .appendField(", S0 :")
            .appendField(new Blockly.FieldNumber(26), "S0")
            .appendField(", S1 :")
            .appendField(new Blockly.FieldNumber(27), "S1")
            .appendField(", S2 :")
            .appendField(new Blockly.FieldNumber(18), "S2")
            .appendField(", S3 :")
            .appendField(new Blockly.FieldNumber(19), "S3")
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['color_tcsp3200_scaling'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("color1", null, ["Plugin.ColorSensor"], ["Plugin.ColorSensor"]), "instance")
            .appendField("RGB scale")
            .appendField(new Blockly.FieldDropdown([
                ["OFF", "0"],
                [" 2 %", "1"],
                ["20 %", "2"],
                ["100 %", "3"]
            ]), "SCALING");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['color_tcsp3200_map_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("map")
        this.appendValueInput("VALUE")
            .setCheck("Number")
        this.appendDummyInput()
            .appendField("(v")
            .appendField(new Blockly.FieldNumber(0), "formLOW")
            .appendField(" :  ^")
            .appendField(new Blockly.FieldNumber(0), "formHIGH")
            .appendField(" to v")
            .appendField(new Blockly.FieldNumber(255), "toLOW")
            .appendField(" :  ^")
            .appendField(new Blockly.FieldNumber(0), "toHIGH")
            .appendField(")");
        this.setInputsInline(true);
        this.setInputsInline(true);
        this.setOutput(true, "Number")
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['color_tcsp3200_get_red'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("color1", null, ["Plugin.ColorSensor"], ["Plugin.ColorSensor"]), "instance")
            .appendField("get RED color");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['color_tcsp3200_get_green'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("color1", null, ["Plugin.ColorSensor"], ["Plugin.ColorSensor"]), "instance")
            .appendField("get GREEN color");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['color_tcsp3200_get_blue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("color1", null, ["Plugin.ColorSensor"], ["Plugin.ColorSensor"]), "instance")
            .appendField("get BLUE color");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};