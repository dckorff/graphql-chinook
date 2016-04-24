var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var InvoiceLineType = new GraphQLObjectType({
    name: 'InvoiceLine',
    description: '@TODO DESCRIBE ME',

    fields: function getInvoiceLineFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            invoiceId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            invoice: {
                type: getType('Invoice'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Invoice')
            },

            trackId: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            track: {
                type: getType('Track'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Track')
            },

            unitPrice: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            quantity: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(InvoiceLineType);
module.exports = InvoiceLineType;