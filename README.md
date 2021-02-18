# SpaceX Programs Api App in ReactJs (Implemented SSR using NextJS)

In this project I have created a ReactJS webapp. The purpose of this web app is to show listing of spacex programs by using SpaceX's API and apply filters based on launch year, launch success and landing success.

# Tech Stack Used

- **ReactJS** - I have used reactjs as front end library in this project.
- **NextJs** - I have used NextJS in order to fetch the initial "list" of programs using Server Side Rendering. NextJS is zero config SSR framework hence it prevents task of writing boilerplate code for ssr. Also it has other features like AMP support and Static Site Generation (SSG) support. It also support hybrid sites with both SSG and SSR.
- **SCSS**- I have used SASS for providing styles to my web app. I have used it's features like variables which is very helpful in DRY practices.I also used BEM(Block Element Modifier) methodology which when combined with SCSS is very powerful.
- **HTML**- Used the latest HTML5 semantic tags for better context

# Project Breakdown

So whole project was broken down in following parts :

- Fetching the data from SpaceX Api in server side and send it for initial page view.
- Creating a UI in reactjs based on the data we got from spacex
- Hit SpaceX api on client side when a **"filter"** is applied.
- Making Sure site is responsive in different screens.
- Hosting the project
- Making sure project has good web vitals/ lighthouse score

# How I achieved the tasks

- **Fetching the Data on Server Side**: This is where NextJS came real handy. I used "getServerSideProps" method to fetch the initial data from spacex api and then just passed it on for hydration by browser.
- **Creating a UI in react**: This part required making a ui out of the data. The whole UI was divided in various modules. I divided it into various modules , like "Components" for raw pure components, "Layout" for structure of UI, And "Providers" for global things like loaders.
- **Hit SpaceX api on client side after applying filters**: Here i used the modern era "Hooks" , like **useEffect** ,**useState** and **useContext** to achieve the functionality.I did not use any class based components in the project. Everything was a functional component.
- **Making Sure site is responsive** : Here i used latest "Grid Layout" of CSS . Coupled with few media queries , our page got responsive on every screen
- **Hosting the Project** : To host the project I used [VERCEL](https://vercel.com). It provide amazing features like continuous integration(CI) from your git project. It also gives us a cdn on edge network which makes sure our project runs fast, and it is all for free.
- **Achieving good lighthouse score**: Since I used server side rendering , app's SEO automatically got better. Our other web vitals improved too. I made sure to use semantic UI and follow accessibility standards. Coupled with vercel's edge network , I was able to achieve a pretty good lighthouse score.

### Screenshot of Lighthouse Score :

![alt text](https://i.ibb.co/HPvZbPq/Screenshot-2020-09-23-at-3-13-37-AM.png)

Only reason we were missing 100 on Performance tab because the images that came from SpaceX api weren't in the next-gen formats like webp.

That's how I approached this project.
To check the deployment of the project you can go to [**DEMO**](https://spacex-demo-seven.vercel.app/)
