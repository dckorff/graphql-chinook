#GraphQL-Chinook

This is an example of a GraphQL server working with a SQL database. This would be useful if you want to see what a GraphQl server looks like and want to experiment with interacting with one. Everything you need is embedded in the project. To run it, just clone the project and do this:
```
npm install
```
and 
```
npm start
```
It works with the [Chinook example database](https://chinookdatabase.codeplex.com/), which is embedded in the project as a SQLite database.  It was originally generated with [sql-to-graphql](https://github.com/vaffel/sql-to-graphql), then altered a little to work with [Express](https://github.com/expressjs/express) and [GraphiQL](https://github.com/graphql/graphiql).