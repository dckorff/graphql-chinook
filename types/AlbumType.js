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

var AlbumType = new GraphQLObjectType({
    name: 'Album',
    description: '@TODO DESCRIBE ME',

    fields: function getAlbumFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            title: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            artistId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            artist: {
                type: getType('Artist'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Artist')
            },

            tracks: {
                type: new GraphQLList(getType('Track')),
                description: 'Tracks belonging to this Album',
                resolve: getEntityResolver('Track'),

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

registerType(AlbumType);
module.exports = AlbumType;