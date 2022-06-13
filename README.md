[![Contributors][contributors-shield]](contributors-url)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<img src="images/polytoria.png" width="100">
<h1>polyGameLogger</h1>
This code can be used to log activity on yours Polytoria Games.

---

## Basic Setup

First of all, you need to create a .env file with the value DISCORD_URL, which will be your discord webhook url.

Secondly, you'll need to install typescript on your machine.

Thirdly, you'll have to create a heroku account and set up an app and follow their guide on how to connect your machine to heroku so that you can push files to the app.

---

After you did all that, you should write the following into the terminal:

Install packages

`$ npm i`

Compile typescript, created js files will be in 'built' folder

`$ tsc`

Do your ordinary git stuff

`$ git add .`

`$ git commit -m "message"`

Push files to heroku

`$ git push heroku master`

---

## Polytoria .lua setup
Open up the polytoria creator, add a script and put the contents of scripts/main.lua into that script.
Be sure to change the URLs to the ones you need.













[contributors-shield]: https://img.shields.io/github/contributors/DamirAlkhaov/polyGameLogger.svg?style=for-the-badge
[contributors-url]: https://github.com/DamirAlkhaov/polyGameLogger/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DamirAlkhaov/polyGameLogger.svg?style=for-the-badge
[forks-url]: https://github.com/DamirAlkhaov/polyGameLogger/network/members
[stars-shield]: https://img.shields.io/github/stars/DamirAlkhaov/polyGameLogger.svg?style=for-the-badge
[stars-url]: https://github.com/DamirAlkhaov/polyGameLogger/stargazers
[issues-shield]: https://img.shields.io/github/issues/DamirAlkhaov/polyGameLogger.svg?style=for-the-badge
[issues-url]: https://github.com/DamirAlkhaov/polyGameLogger/issues 
