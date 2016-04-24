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

var MediaTypeType = new GraphQLObjectType({
    name: 'MediaType',
    description: '@TODO DESCRIBE ME',

    fields: function getMediaTypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            tracks: {
                type: new GraphQLList(getType('Track')),
                description: 'Tracks belonging to this MediaType',
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

registerType(MediaTypeType);
module.exports = MediaTypeType;