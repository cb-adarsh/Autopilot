export function fetchModel() {
  return new Promise((resolve, reject) => {
    resolve(
      [
        {
          entityName: "Subscription",
          trigger: [
            "Subscription created",
            "Subscription renewed",
            "Subscription deleted",
            "Subscription updated",
          ],
          criterias: [
            {
              "name": "Id",
              "type": "number"
            },
            {
              "name": "Name",
              "type": "string"
            },
            {
              "name": "country",
              "type": "list",
              "possibleValues": [
                "IN",
                "US",
                "EUR",
                "CAN",
              ]
            },
            {
              "name": "Kill Who",
              "type": "multi_list",
              "possibleValues": [
                "Cercei",
                "Robert",
                "LittleFinger",
                "Yourself",
              ]
            }
          ],
          actions: [
            {
              "name": "Create Invoice",
              "attributes": [
                {
                  "name": "Id",
                  mandatory: true,
                  "type": "number"
                },
                {
                  "name": "Name",
                  "type": "string"
                },
                {
                  "name": "country",
                  mandatory: true,
                  "type": "list",
                  "possibleValues": [
                    "IN",
                    "US",
                    "EUR",
                    "CAN",
                  ]
                },
                {
                  "name": "country",
                  "type": "multi_list",
                  "possibleValues": [
                    "IN",
                    "US",
                    "EUR",
                    "CAN",
                  ]
                }
              ],
              "multiAttribute": [
                {
                  "name": "charge",
                  "mandatory": true,
                  "fields": [
                    {
                      "name": "Id",
                      mandatory: true,
                      "type": "number"
                    },
                    {
                      "name": "Name",
                      "type": "string"
                    },
                    {
                      "name": "country",
                      mandatory: true,
                      "type": "list",
                      "possibleValues": [
                        "IN",
                        "US",
                        "EUR",
                        "CAN",
                      ]
                    },
                    {
                      "name": "country",
                      "type": "multi_list",
                      "possibleValues": [
                        "IN",
                        "US",
                        "EUR",
                        "CAN",
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          entityName: "Customer",
          trigger: [
            "Customer created",
            "Customer renewed",
            "Customer deleted",
            "Customer updated",
          ],
          criterias: [
            {
              "name": "Id",
              "type": "number"
            },
            {
              "name": "Name",
              "type": "string"
            },
            {
              "name": "country",
              "type": "list",
              "possibleValues": [
                "IN",
                "US",
                "EUR",
                "CAN",
              ]
            },
            {
              "name": "Kill Who",
              "type": "multi_list",
              "possibleValues": [
                "Cercei",
                "Robert",
                "LittleFinger",
                "Yourself",
              ]
            }
          ],
          actions: [
            {
              "name": "Create Invoice",
              "attributes": [
                {
                  "name": "Id",
                  mandatory: true,
                  "type": "number"
                },
                {
                  "name": "Name",
                  "type": "string"
                },
                {
                  "name": "country",
                  mandatory: true,
                  "type": "list",
                  "possibleValues": [
                    "IN",
                    "US",
                    "EUR",
                    "CAN",
                  ]
                },
                {
                  "name": "country",
                  "type": "multi_list",
                  "possibleValues": [
                    "IN",
                    "US",
                    "EUR",
                    "CAN",
                  ]
                }
              ],
              "multiAttribute": [
                {
                  "name": "charge",
                  "mandatory": true,
                  "fields": [
                    {
                      "name": "Id",
                      mandatory: true,
                      "type": "number"
                    },
                    {
                      "name": "Name",
                      "type": "string"
                    },
                    {
                      "name": "country",
                      mandatory: true,
                      "type": "list",
                      "possibleValues": [
                        "IN",
                        "US",
                        "EUR",
                        "CAN",
                      ]
                    },
                    {
                      "name": "country",
                      "type": "multi_list",
                      "possibleValues": [
                        "IN",
                        "US",
                        "EUR",
                        "CAN",
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
    ]
    )
  })
}
