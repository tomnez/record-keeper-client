export default function() {
  this.passthrough();
}

export function testConfig() {
  // jscs:disable
  this.post('/users/sign_in', function() {
    return {
      "token":"qwertyuiopasdfghjklz",
      "email":"tom@tom.com",
      "admin":true,
      "record":{
        "data":{
          "id":"6fac94b9-7829-4aa7-bcb8-a51becfec25b",
          "type":"user",
          "attributes":{
            "email":"tom@tom.com",
            "admin":true
          },
          "links":{
            "self":"/users/6fac94b9-7829-4aa7-bcb8-a51becfec25b"
          },
          "relationships":{
            "students":{
              "links":{
                "self":"/users/6fac94b9-7829-4aa7-bcb8-a51becfec25b/relationships/students",
                "related":"/users/6fac94b9-7829-4aa7-bcb8-a51becfec25b/students"
              }
            }
          }
        }
      }
    };
  });

  this.get('/students', function() {
    return {
      "data":[
        {
          "id":"0265c7e6-784a-437b-bbd4-307e74561c84",
          "type":"student",
          "attributes":{
            "first-name":"Elliott",
            "last-name":"Lutterman",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/0265c7e6-784a-437b-bbd4-307e74561c84"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/0265c7e6-784a-437b-bbd4-307e74561c84/relationships/users",
                "related":"/students/0265c7e6-784a-437b-bbd4-307e74561c84/users"
              }
            }
          }
        },
        {
          "id":"3b728c16-df0f-4329-89a4-bd047eca826a",
          "type":"student",
          "attributes":{
            "first-name":"Rickey",
            "last-name":"Bendickson",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/3b728c16-df0f-4329-89a4-bd047eca826a"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/3b728c16-df0f-4329-89a4-bd047eca826a/relationships/users",
                "related":"/students/3b728c16-df0f-4329-89a4-bd047eca826a/users"
              }
            }
          }
        },
        {
          "id":"d0603cec-ca54-4c56-bfe2-bc1d5c63f760",
          "type":"student",
          "attributes":{
            "first-name":"Johnny",
            "last-name":"Lown",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/d0603cec-ca54-4c56-bfe2-bc1d5c63f760"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/d0603cec-ca54-4c56-bfe2-bc1d5c63f760/relationships/users",
                "related":"/students/d0603cec-ca54-4c56-bfe2-bc1d5c63f760/users"
              }
            }
          }
        },
        {
          "id":"e305a7e8-3bea-4300-850a-42937d501ce4",
          "type":"student",
          "attributes":{
            "first-name":"Terina",
            "last-name":"Hoge",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/e305a7e8-3bea-4300-850a-42937d501ce4"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/e305a7e8-3bea-4300-850a-42937d501ce4/relationships/users",
                "related":"/students/e305a7e8-3bea-4300-850a-42937d501ce4/users"
              }
            }
          }
        },
        {
          "id":"dd7aa1be-0607-4e73-b823-edfd37158911",
          "type":"student",
          "attributes":{
            "first-name":"Laquita",
            "last-name":"Andrade",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/dd7aa1be-0607-4e73-b823-edfd37158911"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/dd7aa1be-0607-4e73-b823-edfd37158911/relationships/users",
                "related":"/students/dd7aa1be-0607-4e73-b823-edfd37158911/users"
              }
            }
          }
        },
        {
          "id":"80152a71-f11f-4af6-a122-93b77802b75c",
          "type":"student",
          "attributes":{
            "first-name":"Gaynell",
            "last-name":"Auzenne",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/80152a71-f11f-4af6-a122-93b77802b75c"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/80152a71-f11f-4af6-a122-93b77802b75c/relationships/users",
                "related":"/students/80152a71-f11f-4af6-a122-93b77802b75c/users"
              }
            }
          }
        },
        {
          "id":"4888d2eb-d3cb-40ed-b172-21d6fb168540",
          "type":"student",
          "attributes":{
            "first-name":"Lyla",
            "last-name":"Steinman",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/4888d2eb-d3cb-40ed-b172-21d6fb168540"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/4888d2eb-d3cb-40ed-b172-21d6fb168540/relationships/users",
                "related":"/students/4888d2eb-d3cb-40ed-b172-21d6fb168540/users"
              }
            }
          }
        },
        {
          "id":"b0677a8e-bfe3-4214-8b99-b8fb86e293c2",
          "type":"student",
          "attributes":{
            "first-name":"Kenyetta",
            "last-name":"Guertin",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/b0677a8e-bfe3-4214-8b99-b8fb86e293c2"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/b0677a8e-bfe3-4214-8b99-b8fb86e293c2/relationships/users",
                "related":"/students/b0677a8e-bfe3-4214-8b99-b8fb86e293c2/users"
              }
            }
          }
        },
        {
          "id":"dddc2552-a528-4959-9682-5fe3e1091c49",
          "type":"student",
          "attributes":{
            "first-name":"Jenny",
            "last-name":"Keas",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/dddc2552-a528-4959-9682-5fe3e1091c49"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/dddc2552-a528-4959-9682-5fe3e1091c49/relationships/users",
                "related":"/students/dddc2552-a528-4959-9682-5fe3e1091c49/users"
              }
            }
          }
        },
        {
          "id":"0085a6da-5292-406f-884d-a96b2ba5dca3",
          "type":"student",
          "attributes":{
            "first-name":"Mindy",
            "last-name":"Cybulski",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/0085a6da-5292-406f-884d-a96b2ba5dca3"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/0085a6da-5292-406f-884d-a96b2ba5dca3/relationships/users",
                "related":"/students/0085a6da-5292-406f-884d-a96b2ba5dca3/users"
              }
            }
          }
        },
        {
          "id":"596fa73a-6af7-48ce-ba40-20cce10a7487",
          "type":"student",
          "attributes":{
            "first-name":"Neely",
            "last-name":"Yarbrough",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/596fa73a-6af7-48ce-ba40-20cce10a7487"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/596fa73a-6af7-48ce-ba40-20cce10a7487/relationships/users",
                "related":"/students/596fa73a-6af7-48ce-ba40-20cce10a7487/users"
              }
            }
          }
        },
        {
          "id":"c163e822-e604-4056-a0a9-d7eda49a4da3",
          "type":"student",
          "attributes":{
            "first-name":"Claudie",
            "last-name":"Nicolson",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/c163e822-e604-4056-a0a9-d7eda49a4da3"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/c163e822-e604-4056-a0a9-d7eda49a4da3/relationships/users",
                "related":"/students/c163e822-e604-4056-a0a9-d7eda49a4da3/users"
              }
            }
          }
        },
        {
          "id":"d4e6f390-949e-45a5-b48d-ccfa59ecf05d",
          "type":"student",
          "attributes":{
            "first-name":"Valda",
            "last-name":"Pastor",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/d4e6f390-949e-45a5-b48d-ccfa59ecf05d"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/d4e6f390-949e-45a5-b48d-ccfa59ecf05d/relationships/users",
                "related":"/students/d4e6f390-949e-45a5-b48d-ccfa59ecf05d/users"
              }
            }
          }
        },
        {
          "id":"a87d7aa6-529f-4560-a5ee-3eb3c672a69c",
          "type":"student",
          "attributes":{
            "first-name":"Jenice",
            "last-name":"Beams",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/a87d7aa6-529f-4560-a5ee-3eb3c672a69c"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/a87d7aa6-529f-4560-a5ee-3eb3c672a69c/relationships/users",
                "related":"/students/a87d7aa6-529f-4560-a5ee-3eb3c672a69c/users"
              }
            }
          }
        },
        {
          "id":"38379672-39ca-449c-8f08-3732b2de16e7",
          "type":"student",
          "attributes":{
            "first-name":"Aileen",
            "last-name":"Monette",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/38379672-39ca-449c-8f08-3732b2de16e7"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/38379672-39ca-449c-8f08-3732b2de16e7/relationships/users",
                "related":"/students/38379672-39ca-449c-8f08-3732b2de16e7/users"
              }
            }
          }
        },
        {
          "id":"c022f84c-b656-4cd0-9c5a-7ace29c55775",
          "type":"student",
          "attributes":{
            "first-name":"Tobias",
            "last-name":"Accardo",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/c022f84c-b656-4cd0-9c5a-7ace29c55775"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/c022f84c-b656-4cd0-9c5a-7ace29c55775/relationships/users",
                "related":"/students/c022f84c-b656-4cd0-9c5a-7ace29c55775/users"
              }
            }
          }
        },
        {
          "id":"9552f4ff-b96f-43bc-ba82-7e313f9f4348",
          "type":"student",
          "attributes":{
            "first-name":"Antione",
            "last-name":"Beerman",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/9552f4ff-b96f-43bc-ba82-7e313f9f4348"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/9552f4ff-b96f-43bc-ba82-7e313f9f4348/relationships/users",
                "related":"/students/9552f4ff-b96f-43bc-ba82-7e313f9f4348/users"
              }
            }
          }
        },
        {
          "id":"36e9edea-a88b-4b35-9fec-3147de1adc95",
          "type":"student",
          "attributes":{
            "first-name":"Charlette",
            "last-name":"Braverman",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/36e9edea-a88b-4b35-9fec-3147de1adc95"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/36e9edea-a88b-4b35-9fec-3147de1adc95/relationships/users",
                "related":"/students/36e9edea-a88b-4b35-9fec-3147de1adc95/users"
              }
            }
          }
        },
        {
          "id":"659a4ad7-12d8-44de-ba32-78cf696655d3",
          "type":"student",
          "attributes":{
            "first-name":"Johnna",
            "last-name":"Severin",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/659a4ad7-12d8-44de-ba32-78cf696655d3"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/659a4ad7-12d8-44de-ba32-78cf696655d3/relationships/users",
                "related":"/students/659a4ad7-12d8-44de-ba32-78cf696655d3/users"
              }
            }
          }
        },
        {
          "id":"983a329c-76e4-4ff0-86cb-5f22ebe9107d",
          "type":"student",
          "attributes":{
            "first-name":"Kareem",
            "last-name":"Rison",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/983a329c-76e4-4ff0-86cb-5f22ebe9107d"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/983a329c-76e4-4ff0-86cb-5f22ebe9107d/relationships/users",
                "related":"/students/983a329c-76e4-4ff0-86cb-5f22ebe9107d/users"
              }
            }
          }
        },
        {
          "id":"023769f7-1dea-44b9-84bb-3e67ebed4058",
          "type":"student",
          "attributes":{
            "first-name":"An",
            "last-name":"Keisler",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/023769f7-1dea-44b9-84bb-3e67ebed4058"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/023769f7-1dea-44b9-84bb-3e67ebed4058/relationships/users",
                "related":"/students/023769f7-1dea-44b9-84bb-3e67ebed4058/users"
              }
            }
          }
        },
        {
          "id":"43af9426-c379-4b13-81ac-f704b543e9b1",
          "type":"student",
          "attributes":{
            "first-name":"Iraida",
            "last-name":"Seward",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/43af9426-c379-4b13-81ac-f704b543e9b1"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/43af9426-c379-4b13-81ac-f704b543e9b1/relationships/users",
                "related":"/students/43af9426-c379-4b13-81ac-f704b543e9b1/users"
              }
            }
          }
        },
        {
          "id":"dc388844-0f2d-4780-a67c-705592e0b106",
          "type":"student",
          "attributes":{
            "first-name":"Shana",
            "last-name":"Wissing",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/dc388844-0f2d-4780-a67c-705592e0b106"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/dc388844-0f2d-4780-a67c-705592e0b106/relationships/users",
                "related":"/students/dc388844-0f2d-4780-a67c-705592e0b106/users"
              }
            }
          }
        },
        {
          "id":"0106736d-6958-40e4-a2e5-5fd627502697",
          "type":"student",
          "attributes":{
            "first-name":"Chauncey",
            "last-name":"Worthington",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/0106736d-6958-40e4-a2e5-5fd627502697"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/0106736d-6958-40e4-a2e5-5fd627502697/relationships/users",
                "related":"/students/0106736d-6958-40e4-a2e5-5fd627502697/users"
              }
            }
          }
        },
        {
          "id":"e1af805b-7086-40ca-8ad6-a2d27f79a144",
          "type":"student",
          "attributes":{
            "first-name":"Kallie",
            "last-name":"Cruzan",
            "birthdate":null,
            "iep-date":null,
            "tx-frequency":null,
            "primary-disability":null,
            "secondary-disability":null,
            "goals":null
          },
          "links":{
            "self":"/students/e1af805b-7086-40ca-8ad6-a2d27f79a144"
          },
          "relationships":{
            "users":{
              "links":{
                "self":"/students/e1af805b-7086-40ca-8ad6-a2d27f79a144/relationships/users",
                "related":"/students/e1af805b-7086-40ca-8ad6-a2d27f79a144/users"
              }
            }
          }
        }
      ],
      "meta":{
        "total_pages":2,
        "page":1,
        "per_page":25
      }
    };
  });
  // jscs:disable
}

