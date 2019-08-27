Blockly.JavaScript["color_tcsp3200_begin"] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_out = block.getFieldValue('OUT');
    var number_s0 = block.getFieldValue('S0');
    var number_s1 = block.getFieldValue('S1');
    var number_s2 = block.getFieldValue('S2');
    var number_s3 = block.getFieldValue('S3');
    var code =
        `
  #EXTINC
  #include "CMMC_TCSP3200.h" 
  #END
  
  #VARIABLE
  COLOR ${variable_instance};
  #END

  #SETUP
${variable_instance}.begin(${number_out}, ${number_s0}, ${number_s1}, ${number_s2}, ${number_s3});
  #END
  `;
    return code;
};

Blockly.JavaScript['color_tcsp3200_scaling'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_scaling = block.getFieldValue('SCALING');
  var code = 
  `
  #SETUP
${variable_instance}.scaling(${dropdown_scaling});
  #END
  `;
  return code;
};


Blockly.JavaScript['color_tcsp3200_map_value'] = function(block) {
  var variable_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var number_formLow = block.getFieldValue('formLOW');
  var number_formHigh = block.getFieldValue('formHIGH');
  var number_toLow = block.getFieldValue('toLOW');
  var number_toHigh = block.getFieldValue('toHIGH');
  var code =`map(${variable_value}, ${number_formLow}, ${number_formHigh}, ${number_toLow}, ${number_toHigh})`;
 return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['color_tcsp3200_get_red'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =`${variable_instance}.redColor()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['color_tcsp3200_get_green'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =`${variable_instance}.greenColor()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['color_tcsp3200_get_blue'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `${variable_instance}.blueColor()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}