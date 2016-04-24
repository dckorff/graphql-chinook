var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLList = GraphQL.GraphQLList;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var TrackType = new GraphQLObjectType({
    name: 'Track',
    description: '@TODO DESCRIBE ME',

    fields: function getTrackFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            albumId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            album: {
                type: getType('Album'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Album')
            },

            mediaTypeId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            mediaType: {
                type: getType('MediaType'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('MediaType')
            },

            genreId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            genre: {
                type: getType('Genre'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Genre')
            },

            composer: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            milliseconds: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            bytes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            unitPrice: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            invoiceLines: {
                type: new GraphQLList(getType('InvoiceLine')),
                description: 'InvoiceLines belonging to this Track',
                resolve: getEntityResolver('InvoiceLine'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            playlistTracks: {
                type: new GraphQLList(getType('PlaylistTrack')),
                description: 'PlaylistTracks belonging to this Track',
                resolve: getEntityResolver('PlaylistTrack'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            }
        };
    }
});

registerType(TrackType);
module.exports = TrackType;