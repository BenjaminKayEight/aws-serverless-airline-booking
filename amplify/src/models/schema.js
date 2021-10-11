export const schema = {
    "models": {
        "Booking": {
            "name": "Booking",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "BookingStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "outboundFlight": {
                    "name": "outboundFlight",
                    "isArray": false,
                    "type": {
                        "model": "Flight"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "bookingOutboundFlightId"
                    }
                },
                "paymentToken": {
                    "name": "paymentToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "checkedIn": {
                    "name": "checkedIn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bookingReference": {
                    "name": "bookingReference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Bookings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "ByCustomerStatus",
                        "fields": [
                            "customer",
                            "status"
                        ],
                        "queryField": "getBookingByStatus"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "customer",
                                "allow": "owner",
                                "identityField": "sub",
                                "operations": [
                                    "read"
                                ],
                                "identityClaim": "sub"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Flight": {
            "name": "Flight",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "departureDate": {
                    "name": "departureDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "departureAirportCode": {
                    "name": "departureAirportCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "departureAirportName": {
                    "name": "departureAirportName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "departureCity": {
                    "name": "departureCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "departureLocale": {
                    "name": "departureLocale",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "arrivalDate": {
                    "name": "arrivalDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "arrivalAirportCode": {
                    "name": "arrivalAirportCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "arrivalAirportName": {
                    "name": "arrivalAirportName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "arrivalCity": {
                    "name": "arrivalCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "arrivalLocale": {
                    "name": "arrivalLocale",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ticketPrice": {
                    "name": "ticketPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "ticketCurrency": {
                    "name": "ticketCurrency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "flightNumber": {
                    "name": "flightNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "seatAllocation": {
                    "name": "seatAllocation",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "seatCapacity": {
                    "name": "seatCapacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Flights",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "ByDepartureSchedule",
                        "fields": [
                            "departureAirportCode",
                            "arrivalAirportCode",
                            "departureDate"
                        ],
                        "queryField": "getFlightBySchedule"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "BookingStatus": {
            "name": "BookingStatus",
            "values": [
                "UNCONFIRMED",
                "CONFIRMED",
                "CANCELLED"
            ]
        }
    },
    "nonModels": {
        "Loyalty": {
            "name": "Loyalty",
            "fields": {
                "points": {
                    "name": "points",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "remainingPoints": {
                    "name": "remainingPoints",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "3606617317740f61a1cf36d4713cb841"
};