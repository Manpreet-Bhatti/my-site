<p align="center">
  <img alt="logo" src="./src/images/mb.png" width="60" />
</p>
<h1 align="center">
  my-site
</h1>

![my-site release](https://img.shields.io/github/release/Manpreet-Bhatti/my-site.svg?style=popout-square) ![my-site issues](https://img.shields.io/github/issues/Manpreet-Bhatti/my-site.svg?style=popout-square) ![my-site top language](https://img.shields.io/github/languages/top/Manpreet-Bhatti/my-site.svg?style=popout-square) ![Gatsby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white) ![my-site last commit](https://img.shields.io/github/last-commit/Manpreet-Bhatti/my-site.svg?style=popout-square) ![my-site license](https://img.shields.io/github/license/Manpreet-Bhatti/my-site.svg?style=popout-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Personal website of Manpreet Bhatti
Check out this [live demo](https://manpreetbhatti.gatsbyjs.io/) to see my-site in action.

# Getting started
### Let's Install
Install modules and Gatsby plugins
```shell
cd my-site
npm install
```
### Let's Build
Start a development server
```shell
npm run start
```
or
Create and start a production build
```shell
npm run build
npm run serve
```
### Let's Customize
> Fork this project for your customization ideas!
> 
> Tip: You should see if these changes work in the development server before building and serving.

#### Fonts
To add custom fonts, make sure to import them into `./static/fonts` and change `./src/scss/_fonts.scss` accordingly.
#### Colours
To change the primary color (or add your own), edit `./src/scss/_colors.scss` and change the `theme_color` in `./gatsby-config.js`.
#### Skills
To showcase your skills, edit `./src/sections/Skills/data.js` with your own expertise!
#### Socials
In the same way skills were edited, you'll have to visit `./src/sections/Contact/data.js` to add your own contact links.

### Updating
Although during the development server live changes will be done, I recommend stopping the server, running `npm run clean` to clear cache, and rerunning `npm run start`.

Once everything looks fine, once again run `npm run clean` to prepare yourself for a production build.

### Let's Publish
There are many great hosting platforms that will have services to showcase your static websites. I personally advise you to use [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) as it's created solely to deploy your Gatsby projects with little-to-no hiccups!

### License
![my-site license](https://img.shields.io/github/license/Manpreet-Bhatti/my-site.svg?style=popout-square)