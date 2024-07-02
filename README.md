# Toolbox Test Backend

Files API integration for toolbox test.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Running the project

Use following command to run the project.

```bash
npm start
```

## Running the test

Use following command to run the tests.

```bash
npm test
```

## Usage

```
Get files names list 
curl --location 'localhost:3000/api/files/list'

Get files information without filter
curl --location 'localhost:3000/api/files/data'

Get files information applying filter
curl --location 'localhost:3000/api/files/data?fileName=test2.csv'
```
## Technologies Stack

```
 NodeJS V.14 
 ExpressJS
```