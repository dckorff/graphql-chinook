var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PlaylistTrackType = new GraphQLObjectType({
    name: 'PlaylistTrack',
    description: '@TODO DESCRIBE ME',

    fields: function getPlaylistTrackFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            trackId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            track: {
                type: getType('Track'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Track')
            }
        };
    }
});

registerType(PlaylistTrackType);
module.exports = PlaylistTrackType;