const graphql = require('graphql');
const CharacterComments = require('../models/CharacterCard');
const _ = require('lodash');
const CharacterCard = require('../models/CharacterCard');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CharacterCardType = new GraphQLObjectType({
    name: 'CharacterCard',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        comment: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        charactercard: {
            type: CharacterCardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return CharacterCard.findById(args.id);
            }    
        },
        charactercards: {
            type: GraphQLList(CharacterCardType),
            resolve(parent, args){
                return CharacterCard.find({});
            }
        }
    }   
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCharacterCard: {
            type: CharacterCardType,
            args: {
                name: { type: GraphQLString },
                comment: { type: GraphQLString }
            }, 
            resolve(parent, args) {
                let characterCard = new CharacterCard({
                    name: args.name,
                    comment: args.comment
                });
                return characterCard.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
