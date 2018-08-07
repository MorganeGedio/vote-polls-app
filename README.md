# Vote Polls App- BCG Code Challenge

Single page application that lets users vote through the Polls API.
Documentation for the API is available at ​ http://docs.pollsapi.apiary.io/​ . Refer to the
documentation for details on how to query the API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### Installing

A step by step series of examples that tell you how to get a development env running

* Make a local copy doing:

```
git clone https://github.com/eadsimone/vote-polls-app.git
```

* Run npm install:

```
npm install
```

* Run start:

```
npm start
```

* Then open http://localhost:3000/ to see your app.

The app list all the Questions on the initial page as the requirements. If you click one of them you can access to the description and you can vote one of the choices, just select the right one and then click on "save choice".
Also, in the main page, you have the possibility to create a Question clicking on "Add Question".

**Important Note**: For this first version you have to follow the format on the text area description to save all the choices.

## Running the tests

To run the automated tests for this system please run

```
npm test
```

## Technologies used

* [React](https://github.com/facebook/create-react-app) - The web framework used
* [Reactstrap](https://reactstrap.github.io/) - To get pretty and responsive Design
* [axios](https://github.com/axios/axios) - As HTTP client
* [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - programming language
* [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styles
* [Bootsrap 4]()

## Authors

* **Ezequiel De Simone** - [eadsimone](https://github.com/eadsimone)

## Extra notes

I consider extra improvements in the near future such as:
use Redux, integrate sass | postcss, do more testing unit.
