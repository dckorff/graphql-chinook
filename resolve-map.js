'use strict';

var resolveMap = {
    'Album': {
        'name': 'Album',
        'table': 'Album',
        'primaryKey': 'AlbumId',

        'aliases': {
            'AlbumId': 'id',
            'Title': 'title',
            'ArtistId': 'artistId'
        },

        'referenceMap': {
            'artist': 'artistId'
        },

        'listReferences': {
            'tracks': 'AlbumId'
        }
    },

    'Artist': {
        'name': 'Artist',
        'table': 'Artist',
        'primaryKey': 'ArtistId',

        'aliases': {
            'ArtistId': 'id',
            'Name': 'name'
        },

        'referenceMap': {},

        'listReferences': {
            'albums': 'ArtistId'
        }
    },

    'Customer': {
        'name': 'Customer',
        'table': 'Customer',
        'primaryKey': 'CustomerId',

        'aliases': {
            'CustomerId': 'id',
            'FirstName': 'firstName',
            'LastName': 'lastName',
            'Company': 'company',
            'Address': 'address',
            'City': 'city',
            'State': 'state',
            'Country': 'country',
            'PostalCode': 'postalCode',
            'Phone': 'phone',
            'Fax': 'fax',
            'Email': 'email',
            'SupportRepId': 'supportRepId'
        },

        'referenceMap': {},

        'listReferences': {
            'invoices': 'CustomerId'
        }
    },

    'Employee': {
        'name': 'Employee',
        'table': 'Employee',
        'primaryKey': 'EmployeeId',

        'aliases': {
            'EmployeeId': 'id',
            'LastName': 'lastName',
            'FirstName': 'firstName',
            'Title': 'title',
            'ReportsTo': 'reportsTo',
            'BirthDate': 'birthDate',
            'HireDate': 'hireDate',
            'Address': 'address',
            'City': 'city',
            'State': 'state',
            'Country': 'country',
            'PostalCode': 'postalCode',
            'Phone': 'phone',
            'Fax': 'fax',
            'Email': 'email'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Genre': {
        'name': 'Genre',
        'table': 'Genre',
        'primaryKey': 'GenreId',

        'aliases': {
            'GenreId': 'id',
            'Name': 'name'
        },

        'referenceMap': {},

        'listReferences': {
            'tracks': 'GenreId'
        }
    },

    'Invoice': {
        'name': 'Invoice',
        'table': 'Invoice',
        'primaryKey': 'InvoiceId',

        'aliases': {
            'InvoiceId': 'id',
            'CustomerId': 'customerId',
            'InvoiceDate': 'invoiceDate',
            'BillingAddress': 'billingAddress',
            'BillingCity': 'billingCity',
            'BillingState': 'billingState',
            'BillingCountry': 'billingCountry',
            'BillingPostalCode': 'billingPostalCode',
            'Total': 'total'
        },

        'referenceMap': {
            'customer': 'customerId'
        },

        'listReferences': {
            'invoiceLines': 'InvoiceId'
        }
    },

    'InvoiceLine': {
        'name': 'InvoiceLine',
        'table': 'InvoiceLine',
        'primaryKey': 'InvoiceLineId',

        'aliases': {
            'InvoiceLineId': 'id',
            'InvoiceId': 'invoiceId',
            'TrackId': 'trackId',
            'UnitPrice': 'unitPrice',
            'Quantity': 'quantity'
        },

        'referenceMap': {
            'invoice': 'invoiceId',
            'track': 'trackId'
        },

        'listReferences': {}
    },

    'MediaType': {
        'name': 'MediaType',
        'table': 'MediaType',
        'primaryKey': 'MediaTypeId',

        'aliases': {
            'MediaTypeId': 'id',
            'Name': 'name'
        },

        'referenceMap': {},

        'listReferences': {
            'tracks': 'MediaTypeId'
        }
    },

    'Playlist': {
        'name': 'Playlist',
        'table': 'Playlist',
        'primaryKey': 'PlaylistId',

        'aliases': {
            'PlaylistId': 'id',
            'Name': 'name'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'PlaylistTrack': {
        'name': 'PlaylistTrack',
        'table': 'PlaylistTrack',
        'primaryKey': 'PlaylistId',

        'aliases': {
            'PlaylistId': 'id',
            'TrackId': 'trackId'
        },

        'referenceMap': {
            'track': 'trackId'
        },

        'listReferences': {}
    },

    'Track': {
        'name': 'Track',
        'table': 'Track',
        'primaryKey': 'TrackId',

        'aliases': {
            'TrackId': 'id',
            'Name': 'name',
            'AlbumId': 'albumId',
            'MediaTypeId': 'mediaTypeId',
            'GenreId': 'genreId',
            'Composer': 'composer',
            'Milliseconds': 'milliseconds',
            'Bytes': 'bytes',
            'UnitPrice': 'unitPrice'
        },

        'referenceMap': {
            'album': 'albumId',
            'mediaType': 'mediaTypeId',
            'genre': 'genreId'
        },

        'listReferences': {
            'invoiceLines': 'TrackId',
            'playlistTracks': 'TrackId'
        }
    }
};

exports.resolveMap = resolveMap;

exports.registerType = function registerType(type) {
    if (!resolveMap[type.name]) {
        throw new Error(
            'Cannot register type "' + type.name + '" - resolve map does not exist for that type'
        );
    }

    resolveMap[type.name].type = type;
};

exports.getType = function getType(type) {
    if (!resolveMap[type] || !resolveMap[type].type) {
        throw new Error('No type registered for type \'' + type + '\'');
    }

    return resolveMap[type].type;
};