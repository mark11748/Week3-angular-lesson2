# KEGS

##### by Mark Woodward and Joseph Tomlinson
---

A web seite for pople to manage their uhhhh kegs or something

## Requirements
Node packet Manager (NPM)

A web browser that supports Javascript and HTML5.

## Installation
Download as zip, or clone to your machine.

open the terminal/command line and cd into the project's directory

install global dependencies if not already installed
```bash
$ npm install -g bower
$ npm install -g gulp
```

download all dependencies by entering the following commands in order:
```bash

$ npm install
$ bower install
$ gulp build
```

## Usage
to view or edit the website, enter:

```

$ gulp serve
```


## Edit guide
* Scripts can be found in js/
* styling is in css/styles.css

## Specs

Description: Get a list of available kegs; include name, brand, price and alcoholContent
* Input: `click "ALL"`
* Output: `list of all kegs recorded with more than 0 pints`

Description: Add a keg to memory. (a std sized keg has 124 pints)
* Input: `fill out info fields: name, brand, price, alcohol content and vol (int pints)`
* Output: `keg is stored on server`

Description: Edit a keg to memory
* Input: `fill out info fields: name, brand, price, alcohol content and vol (int pints); previous values are defaults`
* Output: `fill out info fields for selected keg`

Description: Get pints remaining for selected keg
* Input: `click on a keg from list`
* Output: `output remaining quantity`

Description: list all kegs with less than 10 pints remaining (THIS BEHAVIOR SOULD BE BY DEFAULT)
* Input: `N/a || click "REFILL"`
* Output: `list of all kegs recorded with more than 0 pints`

Description: sell a pint of keg 'X'
* Input: `click "SELL" next to X`
* Output: `change quantity of X to reflect purchase`

Description: sell a pint of keg 'X'
* Input: `click "SELL" next to X`
* Output: `change quantity of X to reflect purchase`

Description: change color of prices to reflect cost
* Input: `N/A`
* Output: `$4< : red; $4+ : green; $6+ : blue`

Description: change font of listings to reflect alchohol content
* Input: `N/A`
* Output: `the alcohol content is bolder based on alcohol content`



## legal
Uses Angular 2, bootstrap and jQuery(?).

all Images belong to their respective owners.
