module.exports = [
    {
        name: "Color sensor",
        blocks: [
            {
                xml:
                    `<block type="color_tcsp3200_begin">
                        <value name="OUT">
                            <shadow type="math_number">
                                <field name="NUM">19</field>
                            </shadow>
                        </value>
                        <value name="S0">
                            <shadow type="math_number">
                                <field name="NUM">4</field>
                            </shadow>
                        </value>
                        <value name="S1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S2">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                        <value name="S3">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'color_tcsp3200_scaling',
            'color_tcsp3200_get_red',
            'color_tcsp3200_get_green',
            'color_tcsp3200_get_blue',
            'color_tcsp3200_map_value'
        ]
    }
];