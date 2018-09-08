# IonPress

A Progressive Web App (PWA) built with Ionic, Angular, and the WordPress REST API.
The goal of this project is to provide service-oriented front-end to WordPress for desktop and mobile.
Use it to create a unique experience for your website or blog and learn about modern web development 
using popular frameworks and tools.

To learn how this project was created from beginning to end, see the companion developer log:

(https://codyburleson.com/pwa-with-ionic-angular-and-wordpress-rest-api)

## Getting started

- Install the latest versions of Node.js and npm if you don't already have them.
- Clone this repo from GitHub
- `cd` into the project root directory
- Run `npm install` to install the dependencies, which are defined in `package.json`
- Run `ionic serve` to run the app and open your browser to (http://localhost:8100/home).

## Setup a WordPress development environment

To setup a local WordPress instance for development purposes, run the following command from within
the project's root directory:

`$ docker-compose up -d`

This uses the docker-compose.yml file to create an environment consisting of two Docker containers - 
one for the database and one for the web server. It also brings in all the WordPress files needed to 
run WordPress. The WordPress installation files are saved in the `wp/` directory of the project root 
and they are mapped into the web server container. The `wp/` directory is ignored in the `.gitignore` file, 
so you will only find it after running the `docker-compose up -d` command. Of course, alternatively, you can use your 
own LAMP stack, MAMP, production instance or whatever.

Point your browser to http://localhost:8080/ to complete the WordPress setup.


## Command reference

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies, which are defined in `package.json` |
| `ionic serve` | Run the app at (http://localhost:8100) |
| `docker-compose up -d` | Start the local WordPress dev environment (at http://localhost:8080/) |
| `docker-compose logs -f` | Follow the container logs |
| `docker-compose stop` | Stop the local WordPress dev environment (Docker containers); restart with `docker-compose up -d` |

