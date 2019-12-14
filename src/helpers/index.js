let operations = {
  string: [
    {
      'name': 'equals',
      'displayName': "Equals",
      'type': 'string'
    },
    {
      'name': 'not_equals',
      'displayName': "Not equals",
      'type': 'string'
    },
    {
      'name': 'contains',
      'displayName': "Contains",
      'type': 'string'
    },
    {
      'name': 'does_not_contains',
      'displayName': "Does not contains",
      'type': 'string'
    },
    {
      'name': 'starts_with',
      'displayName': "Starts with",
      'type': 'string'
    }
  ],
  number: [
    {
      'name': 'equals',
      'displayName': "Equals",
      'type': 'number'
    },
    {
      'name': 'greater_than',
      'displayName': "Greater than",
      'type': 'number'
    },
    {
      'name': 'greater_or_equal',
      'displayName': "Greater than or Equal to",
      'type': 'number'
    },
    {
      'name': 'lesser_than',
      'displayName': "Lesser than",
      'type': 'number'
    },
    {
      'name': 'lesser_or_equal',
      'displayName': "Lesser than or Equal to",
      'type': 'number'
    },
    {
      'name': 'is_present',
      'displayName': "Is present",
      'type': 'none'
    },
    {
      'name': 'is_not_present',
      'displayName': "Is not present",
      'type': 'none'
    }
  ],
  list: [
    {
      'name': 'includes',
      'displayName': "Includes",
      'type': 'multi_list'
    }, {
      'name': 'does_not_includes',
      'displayName': "Does not includes",
      'type': 'multi_list'
    }, {
      'name': 'is',
      'displayName': "Is",
      'type': 'list'
    }, {
      'name': 'is_not',
      'displayName': "Is not",
      'type': 'list'
    },
  ],
  boolean:[
    {
      'name': 'is',
      'displayName': "Is",
      'type': 'boolean'
    }
  ]
};

export function validConditionsFromDataType(dataType) {
  return operations[dataType];
}

