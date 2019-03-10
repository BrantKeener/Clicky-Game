This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Note: If you would like to see a demo, go here: https://brantkeener.github.io/Backend-Demos/**

# Clicky-Game
*A react memory app that requires the user to click unique pictures.*

**Clicky-Game** is a memory card game based on the excellent science fiction series [The Expanse](https://www.imdb.com/title/tt3230854/). If you haven't started watching it yet, check it out on Amazon Prime!
The user is immediately greeted with a modal that gives them a rundown on how to play the game.

![Opening Instructions](public/images/captures/opening_instructions.png)


## Motivation

Creating **Clicky-Game** allowed for exploration of Node.js interfacing with an SQL database.

## Build Status

Complete

## Code Style

Standard

## Demo

To view the demonstration video, please go to https://brantkeener.github.io/Backend-Demos/

## Tech/framework Used

Built utilizing mySQL workbench, and Node.js including the following npm:
1. inquirer
2. mysql
3. easy-table

## Features

Clicky-Game requires a fair amount of user interaction, and thus required extensive answer validation. It also includes some redundant checks during manager database updating to ensure that data is entered correctly. Commentary to the user helps to ensure that they don't run into a situation where they've triggered an error, but they don't know why, or how to move forward. Well-designed custom tables in both the customer and manager section, as well as easy-table in the supervisor login allow the user to quickly glean the pertinent information on the screen.

## Installation

Perform either a clone or a fork by visiting [bamazon](https://github.com/BrantKeener/bamazon). This will give you access to everything except the **.env** file. The **.env** file contains the following information laid out exactly as written:

**====================**
# Database password

products_pass = {database-password for the database you will use}

**====================**

The user must provide their own database password, and their own database.

The user then needs to install the appropriate npm files, which are included in the package.json as dependencies. Perform an npm install, and you are ready! You may also perform the following installs manually if you choose:
1. inquirer
2. dotenv
3. mysql
4. easy-table

## How to Use

After installation, launch your favorite terminal, head over to the folder the project is installed into, and run node bamazonCustomer.js, bamazonManager.js, or bamazonSupervisor.js.
The user will immediately be greeted, and a table, or menu will appear depending on the chosen login. Navigate the menus following the prompts as needed.
The manager, and supervisor levels do have "Exit" options in the menu, while a user must reach checkout to exit.

## Credits

Written and maintained by Brant Keener.
