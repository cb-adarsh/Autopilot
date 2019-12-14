export function fetchModel() {
  return new Promise((resolve, reject) => {
    resolve(
      [
        {
          "actions": [
            {
              "attributes": [
                {
                  "name": "billingDate",
                  "type": "number"
                },
                {
                  "name": "billingDateMode",
                  "possible_values": [
                    "USING_DEFAULTS",
                    "MANUALLY_SET"
                  ],
                  "type": "list"
                },
                {
                  "name": "billingDayOfWeek",
                  "possible_values": [
                    "SUNDAY",
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                    "SATURDAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "billingDayOfWeekMode",
                  "possible_values": [
                    "USING_DEFAULTS",
                    "MANUALLY_SET"
                  ],
                  "type": "list"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.changeBillingDate"
            },
            {
              "attributes": [
                {
                  "name": "fromSite",
                  "type": "string"
                },
                {
                  "name": "idAtFromSite",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.move"
            },
            {
              "attributes": [{
                "name": "deletePaymentMethod",
                "type": "boolean"
              }],
              "multiAttribute": [],
              "name": "Customer.delete"
            },
            {
              "attributes": [
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "cardCvv",
                  "type": "string"
                },
                {
                  "name": "replacePrimaryPaymentSource",
                  "type": "boolean"
                },
                {
                  "name": "retainPaymentSource",
                  "type": "boolean"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "cardFirstName",
                  "type": "string"
                },
                {
                  "name": "cardLastName",
                  "type": "string"
                },
                {
                  "name": "cardNumber",
                  "type": "string"
                },
                {
                  "name": "cardExpiryMonth",
                  "type": "number"
                },
                {
                  "name": "cardExpiryYear",
                  "type": "number"
                },
                {
                  "name": "cardBillingAddr1",
                  "type": "string"
                },
                {
                  "name": "cardBillingAddr2",
                  "type": "string"
                },
                {
                  "name": "cardBillingCity",
                  "type": "string"
                },
                {
                  "name": "cardBillingStateCode",
                  "type": "string"
                },
                {
                  "name": "cardBillingState",
                  "type": "string"
                },
                {
                  "name": "cardBillingZip",
                  "type": "string"
                },
                {
                  "name": "cardBillingCountry",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.collectPayment"
            },
            {
              "attributes": [
                {
                  "name": "transactionAmount",
                  "type": "number"
                },
                {
                  "name": "transactionPaymentMethod",
                  "possible_values": [
                    "CARD",
                    "CASH",
                    "CHECK",
                    "CHARGEBACK",
                    "BANK_TRANSFER",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "DIRECT_DEBIT",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY",
                    "OTHER"
                  ],
                  "type": "list"
                },
                {
                  "name": "transactionDate",
                  "type": "string"
                },
                {
                  "name": "transactionReferenceNumber",
                  "type": "string"
                },
                {
                  "name": "transactionCurrencyCode",
                  "type": "string"
                },
                {
                  "name": "comment",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.recordExcessPayment"
            },
            {
              "attributes": [
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "creditType",
                  "possible_values": [
                    "LOYALTY_CREDITS",
                    "REFERRAL_REWARDS",
                    "GENERAL"
                  ],
                  "type": "list"
                },
                {
                  "name": "reference",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.setPromotionalCredits"
            },
            {
              "attributes": [
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "creditType",
                  "possible_values": [
                    "LOYALTY_CREDITS",
                    "REFERRAL_REWARDS",
                    "GENERAL"
                  ],
                  "type": "list"
                },
                {
                  "name": "reference",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.deductPromotionalCredits"
            },
            {
              "attributes": [
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "creditType",
                  "possible_values": [
                    "LOYALTY_CREDITS",
                    "REFERRAL_REWARDS",
                    "GENERAL"
                  ],
                  "type": "list"
                },
                {
                  "name": "reference",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.addPromotionalCredits"
            },
            {
              "attributes": [{
                "name": "contactId",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Customer.deleteContact"
            },
            {
              "attributes": [
                {
                  "name": "contactId",
                  "type": "string"
                },
                {
                  "name": "contactFirstName",
                  "type": "string"
                },
                {
                  "name": "contactLastName",
                  "type": "string"
                },
                {
                  "name": "contactEmail",
                  "type": "string"
                },
                {
                  "name": "contactPhone",
                  "type": "string"
                },
                {
                  "name": "contactLabel",
                  "type": "string"
                },
                {
                  "name": "contactEnabled",
                  "type": "boolean"
                },
                {
                  "name": "contactSendBillingEmail",
                  "type": "boolean"
                },
                {
                  "name": "contactSendAccountEmail",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.updateContact"
            },
            {
              "attributes": [
                {
                  "name": "contactId",
                  "type": "string"
                },
                {
                  "name": "contactFirstName",
                  "type": "string"
                },
                {
                  "name": "contactLastName",
                  "type": "string"
                },
                {
                  "name": "contactEmail",
                  "type": "string"
                },
                {
                  "name": "contactPhone",
                  "type": "string"
                },
                {
                  "name": "contactLabel",
                  "type": "string"
                },
                {
                  "name": "contactEnabled",
                  "type": "boolean"
                },
                {
                  "name": "contactSendBillingEmail",
                  "type": "boolean"
                },
                {
                  "name": "contactSendAccountEmail",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.addContact"
            },
            {
              "attributes": [
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "role",
                  "possible_values": [
                    "PRIMARY",
                    "BACKUP",
                    "NONE"
                  ],
                  "type": "list"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.assignPaymentRole"
            },
            {
              "attributes": [
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "vatNumber",
                  "type": "string"
                },
                {
                  "name": "registeredForGst",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.updateBillingInfo"
            },
            {
              "attributes": [
                {
                  "name": "paymentMethodGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodTmpToken",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.updatePaymentMethod"
            },
            {
              "attributes": [
                {
                  "name": "locale",
                  "type": "string"
                },
                {
                  "name": "lastName",
                  "type": "string"
                },
                {
                  "name": "firstName",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "email",
                  "type": "string"
                },
                {
                  "name": "phone",
                  "type": "string"
                },
                {
                  "name": "company",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "netTermDays",
                  "type": "number"
                },
                {
                  "name": "allowDirectDebit",
                  "type": "boolean"
                },
                {
                  "name": "taxability",
                  "possible_values": [
                    "TAXABLE",
                    "EXEMPT"
                  ],
                  "type": "list"
                },
                {
                  "name": "entityCode",
                  "possible_values": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "N",
                    "P",
                    "Q",
                    "R",
                    "MED1",
                    "MED2"
                  ],
                  "type": "list"
                },
                {
                  "name": "exemptNumber",
                  "type": "string"
                },
                {
                  "name": "consolidatedInvoicing",
                  "type": "boolean"
                },
                {
                  "name": "fraudFlag",
                  "possible_values": [
                    "SAFE",
                    "SUSPICIOUS",
                    "FRAUDULENT"
                  ],
                  "type": "list"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "preferredCurrencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.update"
            },
            {
              "attributes": [
                {
                  "name": "locale",
                  "type": "string"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardIpAddress",
                  "type": "string"
                },
                {
                  "name": "lastName",
                  "type": "string"
                },
                {
                  "name": "firstName",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "email",
                  "type": "string"
                },
                {
                  "name": "phone",
                  "type": "string"
                },
                {
                  "name": "company",
                  "type": "string"
                },
                {
                  "name": "vatNumber",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "netTermDays",
                  "type": "number"
                },
                {
                  "name": "allowDirectDebit",
                  "type": "boolean"
                },
                {
                  "name": "createdFromIp",
                  "type": "string"
                },
                {
                  "name": "taxability",
                  "possible_values": [
                    "TAXABLE",
                    "EXEMPT"
                  ],
                  "type": "list"
                },
                {
                  "name": "entityCode",
                  "possible_values": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "N",
                    "P",
                    "Q",
                    "R",
                    "MED1",
                    "MED2"
                  ],
                  "type": "list"
                },
                {
                  "name": "exemptNumber",
                  "type": "string"
                },
                {
                  "name": "consolidatedInvoicing",
                  "type": "boolean"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "preferredCurrencyCode",
                  "type": "string"
                },
                {
                  "name": "registeredForGst",
                  "type": "boolean"
                },
                {
                  "name": "cardCvv",
                  "type": "string"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "cardFirstName",
                  "type": "string"
                },
                {
                  "name": "cardLastName",
                  "type": "string"
                },
                {
                  "name": "cardNumber",
                  "type": "string"
                },
                {
                  "name": "cardExpiryMonth",
                  "type": "number"
                },
                {
                  "name": "cardExpiryYear",
                  "type": "number"
                },
                {
                  "name": "cardBillingAddr1",
                  "type": "string"
                },
                {
                  "name": "cardBillingAddr2",
                  "type": "string"
                },
                {
                  "name": "cardBillingCity",
                  "type": "string"
                },
                {
                  "name": "cardBillingStateCode",
                  "type": "string"
                },
                {
                  "name": "cardBillingState",
                  "type": "string"
                },
                {
                  "name": "cardBillingZip",
                  "type": "string"
                },
                {
                  "name": "cardBillingCountry",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Customer.create"
            }
          ],
          "criterias": [
            {
              "name": "customer.id",
              "type": "string"
            },
            {
              "name": "customer.first_name",
              "type": "string"
            },
            {
              "name": "customer.last_name",
              "type": "string"
            },
            {
              "name": "customer.email",
              "type": "string"
            },
            {
              "name": "customer.phone",
              "type": "string"
            },
            {
              "name": "customer.company",
              "type": "string"
            },
            {
              "name": "customer.vat_number",
              "type": "string"
            },
            {
              "name": "customer.auto_collection",
              "possibleValues": [
                "On",
                "Off"
              ],
              "type": "list"
            },
            {
              "name": "customer.net_term_days",
              "type": "number"
            },
            {
              "name": "customer.vat_number_validated_time",
              "type": "string"
            },
            {
              "name": "customer.vat_number_status",
              "possibleValues": [
                "Valid",
                "Invalid",
                "Not Validated",
                "Undetermined"
              ],
              "type": "list"
            },
            {
              "name": "customer.allow_direct_debit",
              "type": "boolean"
            },
            {
              "name": "customer.is_location_valid",
              "type": "boolean"
            },
            {
              "name": "customer.created_at",
              "type": "string"
            },
            {
              "name": "customer.created_from_ip",
              "type": "string"
            },
            {
              "name": "customer.exemption_details",
              "type": "string"
            },
            {
              "name": "customer.taxability",
              "possibleValues": [
                "Taxable",
                "Exempt"
              ],
              "type": "list"
            },
            {
              "name": "customer.entity_code",
              "possibleValues": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "P",
                "Q",
                "R",
                "MED1",
                "MED2"
              ],
              "type": "list"
            },
            {
              "name": "customer.exempt_number",
              "type": "string"
            },
            {
              "name": "customer.resource_version",
              "type": "number"
            },
            {
              "name": "customer.updated_at",
              "type": "string"
            },
            {
              "name": "customer.locale",
              "type": "string"
            },
            {
              "name": "customer.consolidated_invoicing",
              "type": "boolean"
            },
            {
              "name": "customer.billing_date",
              "type": "number"
            },
            {
              "name": "customer.billing_date_mode",
              "possibleValues": [
                "Using defaults",
                "Manual set"
              ],
              "type": "list"
            },
            {
              "name": "customer.billing_day_of_week",
              "possibleValues": [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "type": "list"
            },
            {
              "name": "customer.billing_day_of_week_mode",
              "possibleValues": [
                "Using defaults",
                "Manual set"
              ],
              "type": "list"
            },
            {
              "name": "customer.pii_cleared",
              "possibleValues": [
                "Active",
                "Scheduled For Clear",
                "Cleared"
              ],
              "type": "list"
            },
            {
              "name": "customer.card_status",
              "possibleValues": [
                "No card",
                "Valid",
                "Expiring",
                "Expired",
                "Pending Verification",
                "Invalid"
              ],
              "type": "list"
            },
            {
              "name": "customer.fraud_flag",
              "possibleValues": [
                "SAFE",
                "SUSPICIOUS",
                "FRAUDULENT"
              ],
              "type": "list"
            },
            {
              "name": "customer.primary_payment_source_id",
              "type": "string"
            },
            {
              "name": "customer.backup_payment_source_id",
              "type": "string"
            },
            {
              "name": "customer.invoice_notes",
              "type": "string"
            },
            {
              "name": "customer.preferred_currency_code",
              "type": "string"
            },
            {
              "name": "customer.promotional_credits",
              "type": "number"
            },
            {
              "name": "customer.unbilled_charges",
              "type": "number"
            },
            {
              "name": "customer.refundable_credits",
              "type": "number"
            },
            {
              "name": "customer.excess_payments",
              "type": "number"
            },
            {
              "name": "customer.meta_data",
              "type": "string"
            },
            {
              "name": "customer.deleted",
              "type": "boolean"
            },
            {
              "name": "customer.registered_for_gst",
              "type": "boolean"
            },
            {
              "name": "customer.business_customer_without_vat_number",
              "type": "boolean"
            },
            {
              "name": "customer.customer_type",
              "possibleValues": [
                "Residential",
                "Business",
                "Senior Citizen",
                "Industrial"
              ],
              "type": "list"
            },
            {
              "name": "customer.client_profile_id",
              "type": "string"
            }
          ],
          "entityName": "CUSTOMER",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.overrideBillingProfile"
            },
            {
              "attributes": [
                {
                  "name": "status",
                  "possible_values": [
                    "FUTURE",
                    "IN_TRIAL",
                    "ACTIVE",
                    "NON_RENEWING",
                    "CANCELLED"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "planId",
                  "type": "string"
                },
                {
                  "name": "setupFee",
                  "type": "number"
                },
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "planQuantity",
                  "type": "number"
                },
                {
                  "name": "planUnitPrice",
                  "type": "number"
                },
                {
                  "name": "startDate",
                  "type": "string"
                },
                {
                  "name": "trialStart",
                  "type": "string"
                },
                {
                  "name": "currentTermStart",
                  "type": "string"
                },
                {
                  "name": "currentTermEnd",
                  "type": "string"
                },
                {
                  "name": "startedAt",
                  "type": "string"
                },
                {
                  "name": "cancelledAt",
                  "type": "string"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                },
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.importForCustomer"
            },
            {
              "attributes": [
                {
                  "name": "status",
                  "possible_values": [
                    "FUTURE",
                    "IN_TRIAL",
                    "ACTIVE",
                    "NON_RENEWING",
                    "CANCELLED"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "planId",
                  "type": "string"
                },
                {
                  "name": "setupFee",
                  "type": "number"
                },
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "planQuantity",
                  "type": "number"
                },
                {
                  "name": "planUnitPrice",
                  "type": "number"
                },
                {
                  "name": "startDate",
                  "type": "string"
                },
                {
                  "name": "trialStart",
                  "type": "string"
                },
                {
                  "name": "currentTermStart",
                  "type": "string"
                },
                {
                  "name": "currentTermEnd",
                  "type": "string"
                },
                {
                  "name": "startedAt",
                  "type": "string"
                },
                {
                  "name": "cancelledAt",
                  "type": "string"
                },
                {
                  "name": "affiliateToken",
                  "type": "string"
                },
                {
                  "name": "customerEmail",
                  "type": "string"
                },
                {
                  "name": "customerFirstName",
                  "type": "string"
                },
                {
                  "name": "customerLastName",
                  "type": "string"
                },
                {
                  "name": "customerCompany",
                  "type": "string"
                },
                {
                  "name": "customerTaxability",
                  "possible_values": [
                    "TAXABLE",
                    "EXEMPT"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerLocale",
                  "type": "string"
                },
                {
                  "name": "customerEntityCode",
                  "possible_values": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "N",
                    "P",
                    "Q",
                    "R",
                    "MED1",
                    "MED2"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerExemptNumber",
                  "type": "string"
                },
                {
                  "name": "customerNetTermDays",
                  "type": "number"
                },
                {
                  "name": "customerPhone",
                  "type": "string"
                },
                {
                  "name": "customerAutoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerAllowDirectDebit",
                  "type": "boolean"
                },
                {
                  "name": "customerVatNumber",
                  "type": "string"
                },
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardTmpToken",
                  "type": "string"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                },
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                },
                {
                  "name": "cardCvv",
                  "type": "string"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "cardGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "cardFirstName",
                  "type": "string"
                },
                {
                  "name": "cardLastName",
                  "type": "string"
                },
                {
                  "name": "cardNumber",
                  "type": "string"
                },
                {
                  "name": "cardExpiryMonth",
                  "type": "number"
                },
                {
                  "name": "cardExpiryYear",
                  "type": "number"
                },
                {
                  "name": "cardBillingAddr1",
                  "type": "string"
                },
                {
                  "name": "cardBillingAddr2",
                  "type": "string"
                },
                {
                  "name": "cardBillingCity",
                  "type": "string"
                },
                {
                  "name": "cardBillingStateCode",
                  "type": "string"
                },
                {
                  "name": "cardBillingState",
                  "type": "string"
                },
                {
                  "name": "cardBillingZip",
                  "type": "string"
                },
                {
                  "name": "cardBillingCountry",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.importSubscription"
            },
            {
              "attributes": [{
                "name": "termsToCharge",
                "type": "number"
              }],
              "multiAttribute": [],
              "name": "Subscription.chargeFutureRenewals"
            },
            {
              "attributes": [
                {
                  "name": "addonId",
                  "type": "string"
                },
                {
                  "name": "addonQuantity",
                  "type": "number"
                },
                {
                  "name": "addonUnitPrice",
                  "type": "number"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.chargeAddonAtTermEnd"
            },
            {
              "attributes": [
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.addChargeAtTermEnd"
            },
            {
              "attributes": [
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "trialPeriodDays",
                  "type": "number"
                },
                {
                  "name": "termsToCharge",
                  "type": "number"
                },
                {
                  "name": "reactivateFrom",
                  "type": "string"
                },
                {
                  "name": "invoiceImmediately",
                  "type": "boolean"
                },
                {
                  "name": "billingAlignmentMode",
                  "possible_values": [
                    "IMMEDIATE",
                    "DELAYED"
                  ],
                  "type": "list"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.reactivate"
            },
            {
              "attributes": [
                {
                  "name": "endOfTerm",
                  "type": "boolean"
                },
                {
                  "name": "creditOptionForCurrentTermCharges",
                  "possible_values": [
                    "NONE",
                    "PRORATE",
                    "FULL"
                  ],
                  "type": "list"
                },
                {
                  "name": "unbilledChargesOption",
                  "possible_values": [
                    "INVOICE",
                    "DELETE"
                  ],
                  "type": "list"
                },
                {
                  "name": "accountReceivablesHandling",
                  "possible_values": [
                    "NO_ACTION",
                    "SCHEDULE_PAYMENT_COLLECTION",
                    "WRITE_OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "refundableCreditsHandling",
                  "possible_values": [
                    "NO_ACTION",
                    "SCHEDULE_REFUND"
                  ],
                  "type": "list"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.cancel"
            },
            {
              "attributes": [
                {
                  "name": "prorate",
                  "type": "boolean"
                },
                {
                  "name": "invoiceImmediately",
                  "type": "boolean"
                },
                {
                  "name": "termEndsAt",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.changeTermEnd"
            },
            {
              "attributes": [
                {
                  "name": "planId",
                  "type": "string"
                },
                {
                  "name": "setupFee",
                  "type": "number"
                },
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "planQuantity",
                  "type": "number"
                },
                {
                  "name": "planUnitPrice",
                  "type": "number"
                },
                {
                  "name": "startDate",
                  "type": "string"
                },
                {
                  "name": "reactivate",
                  "type": "boolean"
                },
                {
                  "name": "prorate",
                  "type": "boolean"
                },
                {
                  "name": "customerVatNumber",
                  "type": "string"
                },
                {
                  "name": "termsToCharge",
                  "type": "number"
                },
                {
                  "name": "reactivateFrom",
                  "type": "string"
                },
                {
                  "name": "invoiceImmediately",
                  "type": "boolean"
                },
                {
                  "name": "billingAlignmentMode",
                  "possible_values": [
                    "IMMEDIATE",
                    "DELAYED"
                  ],
                  "type": "list"
                },
                {
                  "name": "replaceAddonList",
                  "type": "boolean"
                },
                {
                  "name": "endOfTerm",
                  "type": "boolean"
                },
                {
                  "name": "replaceCouponList",
                  "type": "boolean"
                },
                {
                  "name": "forceTermReset",
                  "type": "boolean"
                },
                {
                  "name": "customerRegisteredForGst",
                  "type": "boolean"
                },
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardIpAddress",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                },
                {
                  "name": "cardCvv",
                  "type": "string"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "cardFirstName",
                  "type": "string"
                },
                {
                  "name": "cardLastName",
                  "type": "string"
                },
                {
                  "name": "cardNumber",
                  "type": "string"
                },
                {
                  "name": "cardExpiryMonth",
                  "type": "number"
                },
                {
                  "name": "cardExpiryYear",
                  "type": "number"
                },
                {
                  "name": "cardBillingAddr1",
                  "type": "string"
                },
                {
                  "name": "cardBillingAddr2",
                  "type": "string"
                },
                {
                  "name": "cardBillingCity",
                  "type": "string"
                },
                {
                  "name": "cardBillingStateCode",
                  "type": "string"
                },
                {
                  "name": "cardBillingState",
                  "type": "string"
                },
                {
                  "name": "cardBillingZip",
                  "type": "string"
                },
                {
                  "name": "cardBillingCountry",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.update"
            },
            {
              "attributes": [
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.removeCoupons"
            },
            {
              "attributes": [{
                "name": "billingCycles",
                "type": "number"
              }],
              "multiAttribute": [],
              "name": "Subscription.removeScheduledCancellation"
            },
            {
              "attributes": [
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "planId",
                  "type": "string"
                },
                {
                  "name": "setupFee",
                  "type": "number"
                },
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "planQuantity",
                  "type": "number"
                },
                {
                  "name": "planUnitPrice",
                  "type": "number"
                },
                {
                  "name": "startDate",
                  "type": "string"
                },
                {
                  "name": "termsToCharge",
                  "type": "number"
                },
                {
                  "name": "invoiceImmediately",
                  "type": "boolean"
                },
                {
                  "name": "billingAlignmentMode",
                  "possible_values": [
                    "IMMEDIATE",
                    "DELAYED"
                  ],
                  "type": "list"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.createForCustomer"
            },
            {
              "attributes": [
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "planId",
                  "type": "string"
                },
                {
                  "name": "setupFee",
                  "type": "number"
                },
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "trialEnd",
                  "type": "string"
                },
                {
                  "name": "planQuantity",
                  "type": "number"
                },
                {
                  "name": "planUnitPrice",
                  "type": "number"
                },
                {
                  "name": "startDate",
                  "type": "string"
                },
                {
                  "name": "affiliateToken",
                  "type": "string"
                },
                {
                  "name": "customerEmail",
                  "type": "string"
                },
                {
                  "name": "customerFirstName",
                  "type": "string"
                },
                {
                  "name": "customerLastName",
                  "type": "string"
                },
                {
                  "name": "customerCompany",
                  "type": "string"
                },
                {
                  "name": "customerTaxability",
                  "possible_values": [
                    "TAXABLE",
                    "EXEMPT"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerLocale",
                  "type": "string"
                },
                {
                  "name": "customerEntityCode",
                  "possible_values": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "N",
                    "P",
                    "Q",
                    "R",
                    "MED1",
                    "MED2"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerExemptNumber",
                  "type": "string"
                },
                {
                  "name": "customerNetTermDays",
                  "type": "number"
                },
                {
                  "name": "customerPhone",
                  "type": "string"
                },
                {
                  "name": "customerAutoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerAllowDirectDebit",
                  "type": "boolean"
                },
                {
                  "name": "customerVatNumber",
                  "type": "string"
                },
                {
                  "name": "termsToCharge",
                  "type": "number"
                },
                {
                  "name": "invoiceImmediately",
                  "type": "boolean"
                },
                {
                  "name": "billingAlignmentMode",
                  "possible_values": [
                    "IMMEDIATE",
                    "DELAYED"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerRegisteredForGst",
                  "type": "boolean"
                },
                {
                  "name": "customerConsolidatedInvoicing",
                  "type": "boolean"
                },
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardGateway",
                  "possible_values": [
                    "CHARGEBEE",
                    "STRIPE",
                    "WEPAY",
                    "BRAINTREE",
                    "AUTHORIZE_NET",
                    "PAYPAL_PRO",
                    "PIN",
                    "EWAY",
                    "EWAY_RAPID",
                    "WORLDPAY",
                    "BALANCED_PAYMENTS",
                    "BEANSTREAM",
                    "BLUEPAY",
                    "ELAVON",
                    "FIRST_DATA_GLOBAL",
                    "HDFC",
                    "MIGS",
                    "NMI",
                    "OGONE",
                    "PAYMILL",
                    "PAYPAL_PAYFLOW_PRO",
                    "SAGE_PAY",
                    "TCO",
                    "WIRECARD",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "GOCARDLESS",
                    "ADYEN",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "cardTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardIpAddress",
                  "type": "string"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "autoCollection",
                  "possible_values": [
                    "ON",
                    "OFF"
                  ],
                  "type": "list"
                },
                {
                  "name": "createdFromIp",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "string"
                },
                {
                  "name": "couponIds",
                  "type": "list"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                },
                {
                  "name": "cardCvv",
                  "type": "string"
                },
                {
                  "name": "paymentMethodType",
                  "possible_values": [
                    "CARD",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "AMAZON_PAYMENTS",
                    "DIRECT_DEBIT",
                    "GENERIC",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentMethodGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodReferenceId",
                  "type": "string"
                },
                {
                  "name": "paymentMethodTmpToken",
                  "type": "string"
                },
                {
                  "name": "cardGatewayAccountId",
                  "type": "string"
                },
                {
                  "name": "cardFirstName",
                  "type": "string"
                },
                {
                  "name": "cardLastName",
                  "type": "string"
                },
                {
                  "name": "cardNumber",
                  "type": "string"
                },
                {
                  "name": "cardExpiryMonth",
                  "type": "number"
                },
                {
                  "name": "cardExpiryYear",
                  "type": "number"
                },
                {
                  "name": "cardBillingAddr1",
                  "type": "string"
                },
                {
                  "name": "cardBillingAddr2",
                  "type": "string"
                },
                {
                  "name": "cardBillingCity",
                  "type": "string"
                },
                {
                  "name": "cardBillingStateCode",
                  "type": "string"
                },
                {
                  "name": "cardBillingState",
                  "type": "string"
                },
                {
                  "name": "cardBillingZip",
                  "type": "string"
                },
                {
                  "name": "cardBillingCountry",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Subscription.create"
            }
          ],
          "criterias": [
            {
              "name": "subscription.id",
              "type": "string"
            },
            {
              "name": "subscription.customer_id",
              "type": "string"
            },
            {
              "name": "subscription.currency_code",
              "type": "string"
            },
            {
              "name": "subscription.plan_id",
              "type": "string"
            },
            {
              "name": "subscription.plan_quantity",
              "type": "number"
            },
            {
              "name": "subscription.plan_unit_price",
              "type": "number"
            },
            {
              "name": "subscription.setup_fee",
              "type": "number"
            },
            {
              "name": "subscription.plan_amount",
              "type": "number"
            },
            {
              "name": "subscription.billing_period",
              "type": "number"
            },
            {
              "name": "subscription.billing_period_unit",
              "possibleValues": [
                "Day",
                "Week",
                "Month",
                "Year"
              ],
              "type": "list"
            },
            {
              "name": "subscription.plan_free_quantity",
              "type": "number"
            },
            {
              "name": "subscription.status",
              "possibleValues": [
                "Future",
                "In Trial",
                "Active",
                "Non Renewing",
                "Paused",
                "Cancelled"
              ],
              "type": "list"
            },
            {
              "name": "subscription.start_date",
              "type": "string"
            },
            {
              "name": "subscription.trial_start",
              "type": "string"
            },
            {
              "name": "subscription.trial_end",
              "type": "string"
            },
            {
              "name": "subscription.current_term_start",
              "type": "string"
            },
            {
              "name": "subscription.current_term_end",
              "type": "string"
            },
            {
              "name": "subscription.next_billing_at",
              "type": "string"
            },
            {
              "name": "subscription.remaining_billing_cycles",
              "type": "number"
            },
            {
              "name": "subscription.po_number",
              "type": "string"
            },
            {
              "name": "subscription.created_at",
              "type": "string"
            },
            {
              "name": "subscription.started_at",
              "type": "string"
            },
            {
              "name": "subscription.activated_at",
              "type": "string"
            },
            {
              "name": "subscription.gift_id",
              "type": "string"
            },
            {
              "name": "subscription.override_relationship",
              "type": "boolean"
            },
            {
              "name": "subscription.pause_date",
              "type": "string"
            },
            {
              "name": "subscription.resume_date",
              "type": "string"
            },
            {
              "name": "subscription.cancelled_at",
              "type": "string"
            },
            {
              "name": "subscription.cancel_reason",
              "possibleValues": [
                "Not Paid",
                "No Card",
                "Fraud Review Failed",
                "Non Compliant EU Customer",
                "Tax Calculation Failed",
                "Currency incompatible with Gateway",
                "Non Compliant Customer"
              ],
              "type": "list"
            },
            {
              "name": "subscription.affiliate_token",
              "type": "string"
            },
            {
              "name": "subscription.created_from_ip",
              "type": "string"
            },
            {
              "name": "subscription.resource_version",
              "type": "number"
            },
            {
              "name": "subscription.updated_at",
              "type": "string"
            },
            {
              "name": "subscription.has_scheduled_changes",
              "type": "boolean"
            },
            {
              "name": "subscription.payment_source_id",
              "type": "string"
            },
            {
              "name": "subscription.auto_collection",
              "possibleValues": [
                "On",
                "Off"
              ],
              "type": "list"
            },
            {
              "name": "subscription.due_invoices_count",
              "type": "number"
            },
            {
              "name": "subscription.due_since",
              "type": "string"
            },
            {
              "name": "subscription.total_dues",
              "type": "number"
            },
            {
              "name": "subscription.mrr",
              "type": "number"
            },
            {
              "name": "subscription.exchange_rate",
              "type": "number"
            },
            {
              "name": "subscription.base_currency_code",
              "type": "string"
            },
            {
              "name": "subscription.coupon",
              "type": "string"
            },
            {
              "name": "subscription.invoice_notes",
              "type": "string"
            },
            {
              "name": "subscription.meta_data",
              "type": "string"
            },
            {
              "name": "subscription.deleted",
              "type": "boolean"
            },
            {
              "name": "subscription.changes_scheduled_at",
              "type": "string"
            }
          ],
          "entityName": "SUBSCRIPTION",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [{
                "name": "comment",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Invoice.delete"
            },
            {
              "attributes": [{
                "name": "comment",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Invoice.writeOff"
            },
            {
              "attributes": [{
                "name": "comment",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Invoice.voidInvoice"
            },
            {
              "attributes": [{
                "name": "creditNoteId",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Invoice.removeCreditNote"
            },
            {
              "attributes": [{
                "name": "transactionId",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "Invoice.removePayment"
            },
            {
              "attributes": [
                {
                  "name": "customerNotes",
                  "type": "string"
                },
                {
                  "name": "transactionAmount",
                  "type": "number"
                },
                {
                  "name": "transactionPaymentMethod",
                  "possible_values": [
                    "CARD",
                    "CASH",
                    "CHECK",
                    "CHARGEBACK",
                    "BANK_TRANSFER",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "DIRECT_DEBIT",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY",
                    "OTHER"
                  ],
                  "type": "list"
                },
                {
                  "name": "transactionDate",
                  "type": "string"
                },
                {
                  "name": "transactionReferenceNumber",
                  "type": "string"
                },
                {
                  "name": "creditNoteReasonCode",
                  "possible_values": [
                    "WRITE_OFF",
                    "SUBSCRIPTION_CHANGE",
                    "SUBSCRIPTION_CANCELLATION",
                    "CHARGEBACK",
                    "PRODUCT_UNSATISFACTORY",
                    "SERVICE_UNSATISFACTORY",
                    "ORDER_CHANGE",
                    "ORDER_CANCELLATION",
                    "WAIVER",
                    "OTHER",
                    "FRAUDULENT"
                  ],
                  "type": "list"
                },
                {
                  "name": "comment",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.recordRefund"
            },
            {
              "attributes": [
                {
                  "name": "customerNotes",
                  "type": "string"
                },
                {
                  "name": "creditNoteReasonCode",
                  "possible_values": [
                    "WRITE_OFF",
                    "SUBSCRIPTION_CHANGE",
                    "SUBSCRIPTION_CANCELLATION",
                    "CHARGEBACK",
                    "PRODUCT_UNSATISFACTORY",
                    "SERVICE_UNSATISFACTORY",
                    "ORDER_CHANGE",
                    "ORDER_CANCELLATION",
                    "WAIVER",
                    "OTHER",
                    "FRAUDULENT"
                  ],
                  "type": "list"
                },
                {
                  "name": "refundAmount",
                  "type": "number"
                },
                {
                  "name": "comment",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.refund"
            },
            {
              "attributes": [
                {
                  "name": "transactionAmount",
                  "type": "number"
                },
                {
                  "name": "transactionPaymentMethod",
                  "possible_values": [
                    "CARD",
                    "CASH",
                    "CHECK",
                    "CHARGEBACK",
                    "BANK_TRANSFER",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "DIRECT_DEBIT",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY",
                    "OTHER"
                  ],
                  "type": "list"
                },
                {
                  "name": "transactionDate",
                  "type": "string"
                },
                {
                  "name": "transactionReferenceNumber",
                  "type": "string"
                },
                {
                  "name": "transactionIdAtGateway",
                  "type": "string"
                },
                {
                  "name": "transactionStatus",
                  "possible_values": [
                    "IN_PROGRESS",
                    "SUCCESS",
                    "VOIDED",
                    "FAILURE",
                    "TIMEOUT",
                    "NEEDS_ATTENTION"
                  ],
                  "type": "list"
                },
                {
                  "name": "transactionErrorCode",
                  "type": "string"
                },
                {
                  "name": "transactionErrorText",
                  "type": "string"
                },
                {
                  "name": "comment",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.recordPayment"
            },
            {
              "attributes": [
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "amount",
                  "type": "number"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.collectPayment"
            },
            {
              "attributes": [
                {
                  "name": "addonId",
                  "type": "string"
                },
                {
                  "name": "addonQuantity",
                  "type": "number"
                },
                {
                  "name": "addonUnitPrice",
                  "type": "number"
                },
                {
                  "name": "lineItemDateFrom",
                  "type": "string"
                },
                {
                  "name": "lineItemDateTo",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.addAddonCharge"
            },
            {
              "attributes": [
                {
                  "name": "lineItemDateFrom",
                  "type": "string"
                },
                {
                  "name": "lineItemDateTo",
                  "type": "string"
                },
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.addCharge"
            },
            {
              "attributes": [],
              "multiAttribute": [],
              "name": "Invoice.applyCredits"
            },
            {
              "attributes": [],
              "multiAttribute": [],
              "name": "Invoice.applyPayments"
            },
            {
              "attributes": [
                {
                  "name": "status",
                  "possible_values": [
                    "PAID",
                    "POSTED",
                    "PAYMENT_DUE",
                    "NOT_PAID",
                    "VOIDED",
                    "PENDING"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "roundOff",
                  "type": "number"
                },
                {
                  "name": "taxOverrideReason",
                  "possible_values": [
                    "ID_EXEMPT",
                    "CUSTOMER_EXEMPT"
                  ],
                  "type": "list"
                },
                {
                  "name": "useForProration",
                  "type": "boolean"
                },
                {
                  "name": "billingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "billingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "billingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "billingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "billingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "billingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "billingAddressCity",
                  "type": "string"
                },
                {
                  "name": "billingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "billingAddressState",
                  "type": "string"
                },
                {
                  "name": "billingAddressZip",
                  "type": "string"
                },
                {
                  "name": "billingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "billingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "subscriptionId",
                  "type": "string"
                },
                {
                  "name": "vatNumber",
                  "type": "string"
                },
                {
                  "name": "netTermDays",
                  "type": "number"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "dueDate",
                  "type": "string"
                },
                {
                  "name": "priceType",
                  "possible_values": [
                    "TAX_EXCLUSIVE",
                    "TAX_INCLUSIVE"
                  ],
                  "type": "list"
                },
                {
                  "name": "total",
                  "type": "number"
                },
                {
                  "name": "date",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.importInvoice"
            },
            {
              "attributes": [
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "addonId",
                  "type": "string"
                },
                {
                  "name": "addonQuantity",
                  "type": "number"
                },
                {
                  "name": "addonUnitPrice",
                  "type": "number"
                },
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "subscriptionId",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.chargeAddon"
            },
            {
              "attributes": [
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "subscriptionId",
                  "type": "string"
                },
                {
                  "name": "amount",
                  "type": "number"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.charge"
            },
            {
              "attributes": [
                {
                  "name": "coupon",
                  "type": "string"
                },
                {
                  "name": "shippingAddressFirstName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLastName",
                  "type": "string"
                },
                {
                  "name": "shippingAddressEmail",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCompany",
                  "type": "string"
                },
                {
                  "name": "shippingAddressPhone",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine1",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine2",
                  "type": "string"
                },
                {
                  "name": "shippingAddressLine3",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCity",
                  "type": "string"
                },
                {
                  "name": "shippingAddressStateCode",
                  "type": "string"
                },
                {
                  "name": "shippingAddressState",
                  "type": "string"
                },
                {
                  "name": "shippingAddressZip",
                  "type": "string"
                },
                {
                  "name": "shippingAddressCountry",
                  "type": "string"
                },
                {
                  "name": "shippingAddressValidationStatus",
                  "possible_values": [
                    "NOT_VALIDATED",
                    "VALID",
                    "PARTIALLY_VALID",
                    "INVALID"
                  ],
                  "type": "list"
                },
                {
                  "name": "paymentSourceId",
                  "type": "string"
                },
                {
                  "name": "customerId",
                  "type": "string"
                },
                {
                  "name": "poNumber",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Invoice.create"
            }
          ],
          "criterias": [
            {
              "name": "invoice.id",
              "type": "string"
            },
            {
              "name": "invoice.po_number",
              "type": "string"
            },
            {
              "name": "invoice.customer_id",
              "type": "string"
            },
            {
              "name": "invoice.subscription_id",
              "type": "string"
            },
            {
              "name": "invoice.recurring",
              "type": "boolean"
            },
            {
              "name": "invoice.status",
              "possibleValues": [
                "Paid",
                "Posted",
                "Payment Due",
                "Not Paid",
                "Voided",
                "Pending"
              ],
              "type": "list"
            },
            {
              "name": "invoice.vat_number",
              "type": "string"
            },
            {
              "name": "invoice.price_type",
              "possibleValues": [
                "Tax Exclusive",
                "Tax Inclusive"
              ],
              "type": "list"
            },
            {
              "name": "invoice.date",
              "type": "string"
            },
            {
              "name": "invoice.due_date",
              "type": "string"
            },
            {
              "name": "invoice.net_term_days",
              "type": "number"
            },
            {
              "name": "invoice.exchange_rate",
              "type": "number"
            },
            {
              "name": "invoice.currency_code",
              "type": "string"
            },
            {
              "name": "invoice.total",
              "type": "number"
            },
            {
              "name": "invoice.amount_paid",
              "type": "number"
            },
            {
              "name": "invoice.amount_adjusted",
              "type": "number"
            },
            {
              "name": "invoice.write_off_amount",
              "type": "number"
            },
            {
              "name": "invoice.credits_applied",
              "type": "number"
            },
            {
              "name": "invoice.amount_due",
              "type": "number"
            },
            {
              "name": "invoice.paid_at",
              "type": "string"
            },
            {
              "name": "invoice.dunning_status",
              "possibleValues": [
                "In Progress",
                "Exhausted",
                "Stopped",
                "Success"
              ],
              "type": "list"
            },
            {
              "name": "invoice.next_retry_at",
              "type": "string"
            },
            {
              "name": "invoice.voided_at",
              "type": "string"
            },
            {
              "name": "invoice.resource_version",
              "type": "number"
            },
            {
              "name": "invoice.updated_at",
              "type": "string"
            },
            {
              "name": "invoice.sub_total",
              "type": "number"
            },
            {
              "name": "invoice.sub_total_in_local_currency",
              "type": "number"
            },
            {
              "name": "invoice.total_in_local_currency",
              "type": "number"
            },
            {
              "name": "invoice.local_currency_code",
              "type": "string"
            },
            {
              "name": "invoice.tax",
              "type": "number"
            },
            {
              "name": "invoice.first_invoice",
              "type": "boolean"
            },
            {
              "name": "invoice.new_sales_amount",
              "type": "number"
            },
            {
              "name": "invoice.has_advance_charges",
              "type": "boolean"
            },
            {
              "name": "invoice.base_currency_code",
              "type": "string"
            },
            {
              "name": "invoice.term_finalized",
              "type": "boolean"
            },
            {
              "name": "invoice.is_gifted",
              "type": "boolean"
            },
            {
              "name": "invoice.expected_payment_date",
              "type": "string"
            },
            {
              "name": "invoice.amount_to_collect",
              "type": "number"
            },
            {
              "name": "invoice.round_off_amount",
              "type": "number"
            },
            {
              "name": "invoice.payment_owner",
              "type": "string"
            },
            {
              "name": "invoice.deleted",
              "type": "boolean"
            },
            {
              "name": "invoice.is_vat_moss_registered",
              "type": "boolean"
            },
            {
              "name": "invoice.is_digital",
              "type": "boolean"
            }
          ],
          "entityName": "INVOICE",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [{
                "name": "comment",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "CreditNote.delete"
            },
            {
              "attributes": [{
                "name": "comment",
                "type": "string"
              }],
              "multiAttribute": [],
              "name": "CreditNote.voidCreditNote"
            },
            {
              "attributes": [
                {
                  "name": "transactionAmount",
                  "type": "number"
                },
                {
                  "name": "transactionPaymentMethod",
                  "possible_values": [
                    "CARD",
                    "CASH",
                    "CHECK",
                    "CHARGEBACK",
                    "BANK_TRANSFER",
                    "AMAZON_PAYMENTS",
                    "PAYPAL_EXPRESS_CHECKOUT",
                    "DIRECT_DEBIT",
                    "ALIPAY",
                    "UNIONPAY",
                    "APPLE_PAY",
                    "OTHER"
                  ],
                  "type": "list"
                },
                {
                  "name": "transactionDate",
                  "type": "string"
                },
                {
                  "name": "transactionReferenceNumber",
                  "type": "string"
                },
                {
                  "name": "comment",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "CreditNote.recordRefund"
            },
            {
              "attributes": [
                {
                  "name": "type",
                  "possible_values": [
                    "ADJUSTMENT",
                    "REFUNDABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "customerNotes",
                  "type": "string"
                },
                {
                  "name": "referenceInvoiceId",
                  "type": "string"
                },
                {
                  "name": "reasonCode",
                  "possible_values": [
                    "WRITE_OFF",
                    "SUBSCRIPTION_CHANGE",
                    "SUBSCRIPTION_CANCELLATION",
                    "CHARGEBACK",
                    "PRODUCT_UNSATISFACTORY",
                    "SERVICE_UNSATISFACTORY",
                    "ORDER_CHANGE",
                    "ORDER_CANCELLATION",
                    "WAIVER",
                    "OTHER",
                    "FRAUDULENT"
                  ],
                  "type": "list"
                },
                {
                  "name": "total",
                  "type": "number"
                },
                {
                  "name": "date",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "CreditNote.create"
            }
          ],
          "criterias": [
            {
              "name": "credit_note.id",
              "type": "string"
            },
            {
              "name": "credit_note.customer_id",
              "type": "string"
            },
            {
              "name": "credit_note.subscription_id",
              "type": "string"
            },
            {
              "name": "credit_note.reference_invoice_id",
              "type": "string"
            },
            {
              "name": "credit_note.type",
              "possibleValues": [
                "Adjustment",
                "Refundable"
              ],
              "type": "list"
            },
            {
              "name": "credit_note.reason_code",
              "possibleValues": [
                "Write Off",
                "Subscription Change",
                "Subscription Cancellation",
                "Subscription Pause",
                "Chargeback",
                "Product Unsatisfactory",
                "Service Unsatisfactory",
                "Order Change",
                "Order Cancellation",
                "Waiver",
                "Other",
                "FRAUDULENT"
              ],
              "type": "list"
            },
            {
              "name": "credit_note.status",
              "possibleValues": [
                "Adjusted",
                "Refunded",
                "Refund Due",
                "Voided"
              ],
              "type": "list"
            },
            {
              "name": "credit_note.vat_number",
              "type": "string"
            },
            {
              "name": "credit_note.date",
              "type": "string"
            },
            {
              "name": "credit_note.price_type",
              "possibleValues": [
                "Tax Exclusive",
                "Tax Inclusive"
              ],
              "type": "list"
            },
            {
              "name": "credit_note.exchange_rate",
              "type": "number"
            },
            {
              "name": "credit_note.currency_code",
              "type": "string"
            },
            {
              "name": "credit_note.total",
              "type": "number"
            },
            {
              "name": "credit_note.amount_allocated",
              "type": "number"
            },
            {
              "name": "credit_note.amount_refunded",
              "type": "number"
            },
            {
              "name": "credit_note.amount_available",
              "type": "number"
            },
            {
              "name": "credit_note.refunded_at",
              "type": "string"
            },
            {
              "name": "credit_note.voided_at",
              "type": "string"
            },
            {
              "name": "credit_note.resource_version",
              "type": "number"
            },
            {
              "name": "credit_note.updated_at",
              "type": "string"
            },
            {
              "name": "credit_note.sub_total",
              "type": "number"
            },
            {
              "name": "credit_note.sub_total_in_local_currency",
              "type": "number"
            },
            {
              "name": "credit_note.total_in_local_currency",
              "type": "number"
            },
            {
              "name": "credit_note.local_currency_code",
              "type": "string"
            },
            {
              "name": "credit_note.round_off_amount",
              "type": "number"
            },
            {
              "name": "credit_note.fractional_correction",
              "type": "number"
            },
            {
              "name": "credit_note.base_currency_code",
              "type": "string"
            },
            {
              "name": "credit_note.deleted",
              "type": "boolean"
            },
            {
              "name": "credit_note.is_vat_moss_registered",
              "type": "boolean"
            },
            {
              "name": "credit_note.is_digital",
              "type": "boolean"
            }
          ],
          "entityName": "CREDIT_NOTE",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "fromSite",
                  "type": "string"
                },
                {
                  "name": "idAtFromSite",
                  "type": "string"
                },
                {
                  "name": "forSiteMerging",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Plan.copy"
            },
            {
              "attributes": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "period",
                  "type": "number"
                },
                {
                  "name": "sku",
                  "type": "string"
                },
                {
                  "name": "taxable",
                  "type": "boolean"
                },
                {
                  "name": "taxCode",
                  "type": "string"
                },
                {
                  "name": "price",
                  "type": "number"
                },
                {
                  "name": "invoiceName",
                  "type": "string"
                },
                {
                  "name": "periodUnit",
                  "possible_values": [
                    "WEEK",
                    "MONTH",
                    "YEAR"
                  ],
                  "type": "list"
                },
                {
                  "name": "enabledInPortal",
                  "type": "boolean"
                },
                {
                  "name": "accountingCode",
                  "type": "string"
                },
                {
                  "name": "accountingCategory1",
                  "type": "string"
                },
                {
                  "name": "accountingCategory2",
                  "type": "string"
                },
                {
                  "name": "taxProfileId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "redirectUrl",
                  "type": "string"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "trialPeriod",
                  "type": "number"
                },
                {
                  "name": "trialPeriodUnit",
                  "possible_values": [
                    "DAY",
                    "MONTH"
                  ],
                  "type": "list"
                },
                {
                  "name": "chargeModel",
                  "possible_values": [
                    "FLAT_FEE",
                    "PER_UNIT"
                  ],
                  "type": "list"
                },
                {
                  "name": "freeQuantity",
                  "type": "number"
                },
                {
                  "name": "setupCost",
                  "type": "number"
                },
                {
                  "name": "downgradePenalty",
                  "type": "number"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                },
                {
                  "name": "enabledInHostedPages",
                  "type": "boolean"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Plan.update"
            },
            {
              "attributes": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "status",
                  "possible_values": [
                    "ACTIVE",
                    "ARCHIVED",
                    "DELETED"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "period",
                  "type": "number"
                },
                {
                  "name": "sku",
                  "type": "string"
                },
                {
                  "name": "taxable",
                  "type": "boolean"
                },
                {
                  "name": "taxCode",
                  "type": "string"
                },
                {
                  "name": "price",
                  "type": "number"
                },
                {
                  "name": "invoiceName",
                  "type": "string"
                },
                {
                  "name": "periodUnit",
                  "possible_values": [
                    "WEEK",
                    "MONTH",
                    "YEAR"
                  ],
                  "type": "list"
                },
                {
                  "name": "enabledInPortal",
                  "type": "boolean"
                },
                {
                  "name": "accountingCode",
                  "type": "string"
                },
                {
                  "name": "accountingCategory1",
                  "type": "string"
                },
                {
                  "name": "accountingCategory2",
                  "type": "string"
                },
                {
                  "name": "taxProfileId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "redirectUrl",
                  "type": "string"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "trialPeriod",
                  "type": "number"
                },
                {
                  "name": "trialPeriodUnit",
                  "possible_values": [
                    "DAY",
                    "MONTH"
                  ],
                  "type": "list"
                },
                {
                  "name": "chargeModel",
                  "possible_values": [
                    "FLAT_FEE",
                    "PER_UNIT"
                  ],
                  "type": "list"
                },
                {
                  "name": "freeQuantity",
                  "type": "number"
                },
                {
                  "name": "setupCost",
                  "type": "number"
                },
                {
                  "name": "downgradePenalty",
                  "type": "number"
                },
                {
                  "name": "billingCycles",
                  "type": "number"
                },
                {
                  "name": "enabledInHostedPages",
                  "type": "boolean"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Plan.create"
            }
          ],
          "criterias": [
            {
              "name": "plan.id",
              "type": "string"
            },
            {
              "name": "plan.name",
              "type": "string"
            },
            {
              "name": "plan.invoice_name",
              "type": "string"
            },
            {
              "name": "plan.description",
              "type": "string"
            },
            {
              "name": "plan.price",
              "type": "number"
            },
            {
              "name": "plan.currency_code",
              "type": "string"
            },
            {
              "name": "plan.period",
              "type": "number"
            },
            {
              "name": "plan.period_unit",
              "possibleValues": [
                "Day",
                "Week",
                "Month",
                "Year"
              ],
              "type": "list"
            },
            {
              "name": "plan.trial_period",
              "type": "number"
            },
            {
              "name": "plan.trial_period_unit",
              "possibleValues": [
                "Day",
                "Month"
              ],
              "type": "list"
            },
            {
              "name": "plan.pricing_model",
              "possibleValues": [
                "Flat Fee",
                "Per Unit",
                "Tiered",
                "Volume",
                "Stairstep"
              ],
              "type": "list"
            },
            {
              "name": "plan.charge_model",
              "possibleValues": [
                "Flat Fee",
                "Per Unit",
                "Tiered",
                "Volume",
                "Stairstep"
              ],
              "type": "list"
            },
            {
              "name": "plan.free_quantity",
              "type": "number"
            },
            {
              "name": "plan.setup_cost",
              "type": "number"
            },
            {
              "name": "plan.downgrade_penalty",
              "type": "number"
            },
            {
              "name": "plan.status",
              "possibleValues": [
                "Active",
                "Archived",
                "Deleted"
              ],
              "type": "list"
            },
            {
              "name": "plan.archived_at",
              "type": "string"
            },
            {
              "name": "plan.billing_cycles",
              "type": "number"
            },
            {
              "name": "plan.redirect_url",
              "type": "string"
            },
            {
              "name": "plan.enabled_in_hosted_pages",
              "type": "boolean"
            },
            {
              "name": "plan.enabled_in_portal",
              "type": "boolean"
            },
            {
              "name": "plan.addon_applicability",
              "possibleValues": [
                "All",
                "Restricted"
              ],
              "type": "list"
            },
            {
              "name": "plan.tax_code",
              "type": "string"
            },
            {
              "name": "plan.taxjar_product_code",
              "type": "string"
            },
            {
              "name": "plan.avalara_sale_type",
              "possibleValues": [
                "Wholesale",
                "Retail",
                "Consumed (Sales and Use Only)",
                "Vendor Use (Sales and Use Only)"
              ],
              "type": "list"
            },
            {
              "name": "plan.avalara_transaction_type",
              "type": "number"
            },
            {
              "name": "plan.avalara_service_type",
              "type": "number"
            },
            {
              "name": "plan.sku",
              "type": "string"
            },
            {
              "name": "plan.accounting_code",
              "type": "string"
            },
            {
              "name": "plan.accounting_category1",
              "type": "string"
            },
            {
              "name": "plan.accounting_category2",
              "type": "string"
            },
            {
              "name": "plan.accounting_category3",
              "type": "string"
            },
            {
              "name": "plan.accounting_category4",
              "type": "string"
            },
            {
              "name": "plan.is_shippable",
              "type": "boolean"
            },
            {
              "name": "plan.shipping_frequency_period",
              "type": "number"
            },
            {
              "name": "plan.shipping_frequency_period_unit",
              "possibleValues": [
                "Year",
                "Month",
                "Week",
                "Day"
              ],
              "type": "list"
            },
            {
              "name": "plan.resource_version",
              "type": "number"
            },
            {
              "name": "plan.updated_at",
              "type": "string"
            },
            {
              "name": "plan.giftable",
              "type": "boolean"
            },
            {
              "name": "plan.claim_url",
              "type": "string"
            },
            {
              "name": "plan.invoice_notes",
              "type": "string"
            },
            {
              "name": "plan.taxable",
              "type": "boolean"
            },
            {
              "name": "plan.tax_profile_id",
              "type": "string"
            },
            {
              "name": "plan.meta_data",
              "type": "string"
            }
          ],
          "entityName": "PLAN",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "fromSite",
                  "type": "string"
                },
                {
                  "name": "idAtFromSite",
                  "type": "string"
                },
                {
                  "name": "forSiteMerging",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Addon.copy"
            },
            {
              "attributes": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "type",
                  "possible_values": [
                    "ON_OFF",
                    "QUANTITY"
                  ],
                  "type": "list"
                },
                {
                  "name": "period",
                  "type": "number"
                },
                {
                  "name": "sku",
                  "type": "string"
                },
                {
                  "name": "taxable",
                  "type": "boolean"
                },
                {
                  "name": "taxCode",
                  "type": "string"
                },
                {
                  "name": "price",
                  "type": "number"
                },
                {
                  "name": "invoiceName",
                  "type": "string"
                },
                {
                  "name": "chargeType",
                  "possible_values": [
                    "RECURRING",
                    "NON_RECURRING"
                  ],
                  "type": "list"
                },
                {
                  "name": "periodUnit",
                  "possible_values": [
                    "WEEK",
                    "MONTH",
                    "YEAR",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "enabledInPortal",
                  "type": "boolean"
                },
                {
                  "name": "accountingCode",
                  "type": "string"
                },
                {
                  "name": "accountingCategory1",
                  "type": "string"
                },
                {
                  "name": "accountingCategory2",
                  "type": "string"
                },
                {
                  "name": "taxProfileId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "unit",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Addon.update"
            },
            {
              "attributes": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "type",
                  "possible_values": [
                    "ON_OFF",
                    "QUANTITY"
                  ],
                  "type": "list"
                },
                {
                  "name": "status",
                  "possible_values": [
                    "ACTIVE",
                    "ARCHIVED",
                    "DELETED"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "period",
                  "type": "number"
                },
                {
                  "name": "sku",
                  "type": "string"
                },
                {
                  "name": "taxable",
                  "type": "boolean"
                },
                {
                  "name": "taxCode",
                  "type": "string"
                },
                {
                  "name": "price",
                  "type": "number"
                },
                {
                  "name": "invoiceName",
                  "type": "string"
                },
                {
                  "name": "chargeType",
                  "possible_values": [
                    "RECURRING",
                    "NON_RECURRING"
                  ],
                  "type": "list"
                },
                {
                  "name": "periodUnit",
                  "possible_values": [
                    "WEEK",
                    "MONTH",
                    "YEAR",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "enabledInPortal",
                  "type": "boolean"
                },
                {
                  "name": "accountingCode",
                  "type": "string"
                },
                {
                  "name": "accountingCategory1",
                  "type": "string"
                },
                {
                  "name": "accountingCategory2",
                  "type": "string"
                },
                {
                  "name": "taxProfileId",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "description",
                  "type": "string"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "unit",
                  "type": "string"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Addon.create"
            }
          ],
          "criterias": [
            {
              "name": "addon.id",
              "type": "string"
            },
            {
              "name": "addon.name",
              "type": "string"
            },
            {
              "name": "addon.invoice_name",
              "type": "string"
            },
            {
              "name": "addon.description",
              "type": "string"
            },
            {
              "name": "addon.pricing_model",
              "possibleValues": [
                "Flat Fee",
                "Per Unit",
                "Tiered",
                "Volume",
                "Stairstep"
              ],
              "type": "list"
            },
            {
              "name": "addon.type",
              "possibleValues": [
                "On Off",
                "Quantity",
                "Tiered",
                "Volume",
                "Stairstep"
              ],
              "type": "list"
            },
            {
              "name": "addon.charge_type",
              "possibleValues": [
                "Recurring",
                "Non Recurring"
              ],
              "type": "list"
            },
            {
              "name": "addon.price",
              "type": "number"
            },
            {
              "name": "addon.currency_code",
              "type": "string"
            },
            {
              "name": "addon.period",
              "type": "number"
            },
            {
              "name": "addon.period_unit",
              "possibleValues": [
                "Day",
                "Week",
                "Month",
                "Year",
                "Not Applicable"
              ],
              "type": "list"
            },
            {
              "name": "addon.unit",
              "type": "string"
            },
            {
              "name": "addon.status",
              "possibleValues": [
                "Active",
                "Archived",
                "Deleted"
              ],
              "type": "list"
            },
            {
              "name": "addon.archived_at",
              "type": "string"
            },
            {
              "name": "addon.enabled_in_portal",
              "type": "boolean"
            },
            {
              "name": "addon.tax_code",
              "type": "string"
            },
            {
              "name": "addon.taxjar_product_code",
              "type": "string"
            },
            {
              "name": "addon.avalara_sale_type",
              "possibleValues": [
                "Wholesale",
                "Retail",
                "Consumed (Sales and Use Only)",
                "Vendor Use (Sales and Use Only)"
              ],
              "type": "list"
            },
            {
              "name": "addon.avalara_transaction_type",
              "type": "number"
            },
            {
              "name": "addon.avalara_service_type",
              "type": "number"
            },
            {
              "name": "addon.sku",
              "type": "string"
            },
            {
              "name": "addon.accounting_code",
              "type": "string"
            },
            {
              "name": "addon.accounting_category1",
              "type": "string"
            },
            {
              "name": "addon.accounting_category2",
              "type": "string"
            },
            {
              "name": "addon.accounting_category3",
              "type": "string"
            },
            {
              "name": "addon.accounting_category4",
              "type": "string"
            },
            {
              "name": "addon.is_shippable",
              "type": "boolean"
            },
            {
              "name": "addon.shipping_frequency_period",
              "type": "number"
            },
            {
              "name": "addon.shipping_frequency_period_unit",
              "possibleValues": [
                "Year",
                "Month",
                "Week",
                "Day"
              ],
              "type": "list"
            },
            {
              "name": "addon.resource_version",
              "type": "number"
            },
            {
              "name": "addon.updated_at",
              "type": "string"
            },
            {
              "name": "addon.invoice_notes",
              "type": "string"
            },
            {
              "name": "addon.taxable",
              "type": "boolean"
            },
            {
              "name": "addon.tax_profile_id",
              "type": "string"
            },
            {
              "name": "addon.meta_data",
              "type": "string"
            }
          ],
          "entityName": "ADDON",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        },
        {
          "actions": [
            {
              "attributes": [
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "fromSite",
                  "type": "string"
                },
                {
                  "name": "idAtFromSite",
                  "type": "string"
                },
                {
                  "name": "forSiteMerging",
                  "type": "boolean"
                }
              ],
              "multiAttribute": [],
              "name": "Coupon.copy"
            },
            {
              "attributes": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "status",
                  "possible_values": [
                    "ACTIVE",
                    "EXPIRED",
                    "ARCHIVED",
                    "DELETED"
                  ],
                  "type": "list"
                },
                {
                  "name": "id",
                  "type": "string"
                },
                {
                  "name": "invoiceName",
                  "type": "string"
                },
                {
                  "name": "metaData",
                  "type": "string"
                },
                {
                  "name": "discountAmount",
                  "type": "number"
                },
                {
                  "name": "invoiceNotes",
                  "type": "string"
                },
                {
                  "name": "applyOn",
                  "possible_values": [
                    "INVOICE_AMOUNT",
                    "SPECIFIED_ITEMS_TOTAL",
                    "EACH_SPECIFIED_ITEM",
                    "EACH_UNIT_OF_SPECIFIED_ITEMS"
                  ],
                  "type": "list"
                },
                {
                  "name": "discountType",
                  "possible_values": [
                    "FIXED_AMOUNT",
                    "PERCENTAGE",
                    "OFFER_QUANTITY"
                  ],
                  "type": "list"
                },
                {
                  "name": "discountPercentage",
                  "type": "number"
                },
                {
                  "name": "discountQuantity",
                  "type": "number"
                },
                {
                  "name": "durationType",
                  "possible_values": [
                    "ONE_TIME",
                    "FOREVER",
                    "LIMITED_PERIOD"
                  ],
                  "type": "list"
                },
                {
                  "name": "durationMonth",
                  "type": "number"
                },
                {
                  "name": "validTill",
                  "type": "string"
                },
                {
                  "name": "maxRedemptions",
                  "type": "number"
                },
                {
                  "name": "planConstraint",
                  "possible_values": [
                    "NONE",
                    "ALL",
                    "SPECIFIC",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "addonConstraint",
                  "possible_values": [
                    "NONE",
                    "ALL",
                    "SPECIFIC",
                    "NOT_APPLICABLE"
                  ],
                  "type": "list"
                },
                {
                  "name": "planIds",
                  "type": "list"
                },
                {
                  "name": "planIds",
                  "type": "string"
                },
                {
                  "name": "addonIds",
                  "type": "string"
                },
                {
                  "name": "addonIds",
                  "type": "list"
                },
                {
                  "name": "currencyCode",
                  "type": "string"
                }
              ],
              "multiAttribute": [],
              "name": "Coupon.create"
            }
          ],
          "criterias": [
            {
              "name": "coupon.id",
              "type": "string"
            },
            {
              "name": "coupon.name",
              "type": "string"
            },
            {
              "name": "coupon.invoice_name",
              "type": "string"
            },
            {
              "name": "coupon.discount_type",
              "possibleValues": [
                "Fixed Amount",
                "Percentage",
                "Offer Quantity"
              ],
              "type": "list"
            },
            {
              "name": "coupon.discount_percentage",
              "type": "number"
            },
            {
              "name": "coupon.discount_amount",
              "type": "number"
            },
            {
              "name": "coupon.discount_quantity",
              "type": "number"
            },
            {
              "name": "coupon.currency_code",
              "type": "string"
            },
            {
              "name": "coupon.duration_type",
              "possibleValues": [
                "One Time",
                "Forever",
                "Limited Period"
              ],
              "type": "list"
            },
            {
              "name": "coupon.duration_month",
              "type": "number"
            },
            {
              "name": "coupon.valid_till",
              "type": "string"
            },
            {
              "name": "coupon.max_redemptions",
              "type": "number"
            },
            {
              "name": "coupon.status",
              "possibleValues": [
                "Active",
                "Expired",
                "Archived",
                "Deleted"
              ],
              "type": "list"
            },
            {
              "name": "coupon.apply_discount_on",
              "possibleValues": [
                "Plan only",
                "Plan and addons",
                "For each plan quantity",
                "Not Applicable"
              ],
              "type": "list"
            },
            {
              "name": "coupon.apply_on",
              "possibleValues": [
                "Invoice amount",
                "Specified items total",
                "Each specified item",
                "Each unit of specified items"
              ],
              "type": "list"
            },
            {
              "name": "coupon.plan_constraint",
              "possibleValues": [
                "None",
                "All",
                "Specific",
                "Not Applicable"
              ],
              "type": "list"
            },
            {
              "name": "coupon.addon_constraint",
              "possibleValues": [
                "None",
                "All",
                "Specific",
                "Not Applicable"
              ],
              "type": "list"
            },
            {
              "name": "coupon.created_at",
              "type": "string"
            },
            {
              "name": "coupon.archived_at",
              "type": "string"
            },
            {
              "name": "coupon.resource_version",
              "type": "number"
            },
            {
              "name": "coupon.updated_at",
              "type": "string"
            },
            {
              "name": "coupon.plan_ids",
              "type": "string"
            },
            {
              "name": "coupon.addon_ids",
              "type": "string"
            },
            {
              "name": "coupon.redemptions",
              "type": "number"
            },
            {
              "name": "coupon.invoice_notes",
              "type": "string"
            },
            {
              "name": "coupon.meta_data",
              "type": "string"
            }
          ],
          "entityName": "COUPON",
          "trigger": [
            "customer_created",
            "customer_changed",
            "customer_deleted"
          ]
        }
      ]
    )
  })
}
