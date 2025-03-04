<h1 align="center"> Reddit Timer</h1>
<h3 align="center"> It helps you figure out when to post based on when other successful posts were created</h3>
<br />

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

![App Search Screen](./docs/reddit_timer_search_reactjs.png "Search Reactjs SubReddit")

> The heatmap demonstrates the highest concentrations of successful posts at a glance based on the most popular posts of that subreddit.

> The data is fetched as needed from the Reddit API.

> You can click on a cell of the heatmap to drill down into the individual posts.

<br />

## About This Project

This project was completed as part of the premium course at [profy.dev](https://profy.dev/employers). This course mimics a professional real world development environment.

**[The app is hosted on a free heroku dyno, here. (it might take a moment to load as the dyno wakes up)](https://reddit-timer-wjkmartin.herokuapp.com)**

Designs were provided via [Figma](https://www.figma.com/). The project was split into small tasks using [ClickUp](https://clickup.com/) as a project management tool. I created a pull request for every task.

Here's what I learned while working on this project:

* **Creating pixel-perfect designs**
* **Creating custom React hooks [[1]](https://github.com/profydev/reddit-timer-wjkmartin/blob/main/src/hooks/useInput.js)[[2]](https://github.com/profydev/reddit-timer-wjkmartin/blob/main/src/hooks/useFetchPosts.js)**
* **[Implement data fetching with error handling](https://github.com/profydev/reddit-timer-wjkmartin/blob/main/src/hooks/useFetchPosts.js)**
* **Writing integration tests**
* **Professional Git workflow with pull requests**
* **Code reviews**
* **Continuous integration**

I was given designs, user stories, and acceptance criteria and was given full control over the implementation details as long as I used React. 

The code reviews gave me insights into best practices to follow (see [this example](https://github.com/profydev/reddit-timer-wjkmartin/pull/7#pullrequestreview-805303855)). I was able to learn a lot and evolve my front-end knowledge rapidly.

## Tech Stack
 * React (+Hooks)
 * React Router
 * React Testing Suite + Cypress

## Tools Used for the Project
* [Figma](https://www.figma.com/) - This is where the designs live.
* [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en) - To help verify a pixel perfect layout.
* [ClickUp](https://clickup.com/) - Kanban board for project management.
* Github - Version control & team collaboration
* Slack - Team communication tool

### Install
```sh
yarn install
```

### Usage
```sh
yarn start
```

### Run tests
```sh
yarn run cypress
yarn test
```

## Author
🧙‍♂️ **Will Martin**

* Website: [willmartin.ca](https://www.willmartin.ca/)
* LinkedIn: [William Martin](https://www.linkedin.com/in/william-martin-a1890b184/)
