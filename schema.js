'use strict';
var getEntityResolver = require('./util/entity-resolver');
var GraphQL = require('graphql');
var AlbumType = require('./types/AlbumType');
var ArtistType = require('./types/ArtistType');
var CustomerType = require('./types/CustomerType');
var EmployeeType = require('./types/EmployeeType');
var GenreType = require('./types/GenreType');
var InvoiceType = require('./types/InvoiceType');
var InvoiceLineType = require('./types/InvoiceLineType');
var MediaTypeType = require('./types/MediaTypeType');
var PlaylistType = require('./types/PlaylistType');
var PlaylistTrackType = require('./types/PlaylistTrackType');
var TrackType = require('./types/TrackType');
//var resolveMap = require('./resolve-map');
var types = require('./types');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLSchema = GraphQL.GraphQLSchema;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
//var registerType = resolveMap.registerType;

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',

        fields: function getRootQueryFields() {
            return {
                album: {
                    type: AlbumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Album')
                },

                artist: {
                    type: ArtistType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Artist')
                },

                customer: {
                    type: CustomerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Customer')
                },

                employee: {
                    type: EmployeeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Employee')
                },

                genre: {
                    type: GenreType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Genre')
                },

                invoice: {
                    type: InvoiceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Invoice')
                },

                invoiceLine: {
                    type: InvoiceLineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('InvoiceLine')
                },

                mediaType: {
                    type: MediaTypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('MediaType')
                },

                playlist: {
                    type: PlaylistType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Playlist')
                },

                playlistTrack: {
                    type: PlaylistTrackType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('PlaylistTrack')
                },

                track: {
                    type: TrackType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Track')
                }
            };
        }
    })
});

module.exports = schema;