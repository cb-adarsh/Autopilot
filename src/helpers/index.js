let operations = {
  text: [
    {
      'name': 'In',
      'displayName': "In",
      'type': 'multi_select',
      'dtype': 'string',
    }, {
      'name': 'Not In',
      'displayName': "Not In",
      'type': 'multi_select',
      'dtype': 'string',
    }, {
      'name': 'Contains',
      'displayName': "Contains",
      'type': 'text',
      'dtype': 'string',
    }, {
      'name': 'Does not Contain',
      'displayName': "Does not Contain",
      'type': 'text',
      'dtype': 'string',
    }, {
      'name': 'Starts With',
      'displayName': "Starts With",
      'type': 'text',
      'dtype': 'string',
    }, {
      'name': 'Ends With',
      'displayName': "Ends With",
      'type': 'text',
      'dtype': 'string',
    }, {
      'name': 'Is Empty',
      'displayName': "Is Empty",
      'type': 'none',
      'dtype': 'string',
    }, {
      'name': 'Is Not Empty',
      'displayName': "Is Not Empty",
      'type': 'none',
      'dtype': 'string',
    }
  ],
  date: [
    {
      'name': 'Is',
      'displayName': "Is",
      'type': 'before',
      'dtype': 'date_time',
    }, {
      'name': 'Is Not',
      'displayName': "Is Not",
      'type': 'before',
      'dtype': 'date_time',
    },
    {
      'name': 'Between',
      'displayName': "Between",
      'type': 'between',
      'dtype': 'date_time',
    },
    {
      'name': 'Not Between',
      'displayName': "Not Between",
      'type': 'between',
      'dtype': 'date_time',
    },
    {
      'name': 'Is Before',
      'displayName': "Is Before",
      'type': 'before',
      'dtype': 'date_time',
    },
    {
      'name': 'Is After',
      'displayName': "Is After",
      'type': 'after',
      'dtype': 'date_time',
    },
    {
      'name': 'Is Empty',
      'displayName': "Is Empty",
      'type': 'none',
      'dtype': 'date_time',
    }, {
      'name': 'Is Not Empty',
      'displayName': "Is Not Empty",
      'type': 'none',
      'dtype': 'date_time',
    }
  ],
  number: [
    {
      'name': 'Equal To',
      'displayName': "Equal To",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Not Equal To',
      'displayName': "Not Equal To",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Less Than',
      'displayName': "Less Than",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Greater Than',
      'displayName': "Greater Than",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Is Empty',
      'displayName': "Is Empty",
      'type': 'none',
      'dtype': 'number',
    }, {
      'name': 'Is Not Empty',
      'displayName': "Is Not Empty",
      'type': 'none',
      'dtype': 'number',
    }
  ],
  currency: [
    {
      'name': 'Equal To',
      'displayName': "Equal To",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Not Equal To',
      'displayName': "Not Equal To",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Less Than',
      'displayName': "Less Than",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Greater Than',
      'displayName': "Greater Than",
      'type': 'text',
      'dtype': 'number',
    }, {
      'name': 'Is Empty',
      'displayName': "Is Empty",
      'type': 'none',
      'dtype': 'number',
    }, {
      'name': 'Is Not Empty',
      'displayName': "Is Not Empty",
      'type': 'none',
      'dtype': 'number',
    }
  ]
};

export function validConditionsFromDataType(dataType) {
  switch (dataType) {
    case 'string':
      return operations['text'];
    case 'number':
      return operations['number'];
      list
      multi_list
  }
  return operations[dataType];
}

