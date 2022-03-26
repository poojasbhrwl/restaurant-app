# Restaurant-App
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Challenges](#challenges)
* [Future Improvement](#future-improvement)
* [Setup](#setup)

## General info
This project contains api for Restaurant and their products
	
## Technologies
Project is created with:
* Node: 14.18.1
* NPM: 6.14.15
* Typescript
* Mongoose: 6.0.12
* Swagger: 4.1.6
* Webpack

## Challenges
The only challenge I have faced during production is implementation graphql with image upload so I have drop the idea and implemented swagger for documentation.

## Future Improvement
* GraphQl: Use of graphQl will improve the proformance and give the functionality for reduce our code. 
GraphQL allows making multiple resources request in a single query call, which saves a lot of time and bandwidth by reducing the number of network round trips to the server. It also helps to save waterfall network requests, where you need to resolve dependent resources on previous requests.
* More Interfaces: We can create more intefaces for custom type given to our variables.
* Cloud storage:  We can implement aws S3 bucket or any cloud service for storing our files that will reduce the load to the server.
* testing tools: We can use testing libraries so that test cases will implement for all the scenerios.

## Setup
Create .env file and add following variable in it:

```
PORT=<PORT>
MONGOSERVER=<MONGOSERVER IP>
DATABASE=<my_database>
```

To run this project, install it locally using npm:

```
$ cd ../Restaurant-App
$ npm install
$ NODE_ENV=<development OR production> npm run build
$ npm start

```

Find Documentation on 
``` 
<URl>/api-docs
```