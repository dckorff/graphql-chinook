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

var ArtistType = new GraphQLObjectType({
    name: 'Artist',
    description: '@TODO DESCRIBE ME',

    fields: function getArtistFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            albums: {
                type: new GraphQLList(getType('Album')),
                description: 'Albums belonging to this Artist',
                resolve: getEntityResolver('Album'),

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

registerType(ArtistType);
module.exports = ArtistType;