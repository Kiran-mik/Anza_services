
## Prequisites (Development):

| Module | Version |
| ------ | ------- |
| Node   | 12.16.1 |
| Npm    | 6.13.4  |
| React  | 16.12.0 |
| Redux  | 4.0.5   |

---

##### Take Clone of project

> \$ git clone -b branch_name git_url 

##### Development Process

> \$ npm install

> \$ npm start

---

##### Deployment Process

> \$ npm run build

---



##### Task details

Visit https://api.giphy.com/ and understand the features it provides.
We are primarily interested in Trending API and GIFS Search API.

Assignment:

Develop a React app that will use these two API to deliver a feature. The app will have just one view.

On loading the view display the top 9 trending GIFs in a 3x3 matrix.
The view should support searching for GIFs.
On successful search the top 9 search result GIF’s should be displayed.
Also, keep a count of number of searches done and show it next to search button.(It need not persist permanently, may start from 0 on server restart)
