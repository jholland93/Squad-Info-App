
# SQUADINFO

This project was developed using the MERN stack (MongoDB, Express, React, Node). 
[React Bootstrap](https://react-bootstrap.github.io/) was used for bootstrapping.


## Application Set Up

This application requires both client and server to be started separately as outlined below. Client runs at localhost:3000 while server runs at localhost:4000


### Clone Repo to Local Folder 

```bash
git clone 'https://github.com/jholland93/datarep_project'
```


### Install Node & Run App

```bash
npm install
npm start
```

Application will automatically open in browser at http://localhost:3000


### Connect to Backend Using Node

*Open integrated terminal in Backend Folder*

```bash
node server.js
```

Server will now run on http://localhost:4000 & you can now create, read, update and delete data.


# Components

#### welcomePage
Acts as a point of entry to the application. Displays the SQUADINFO logo, a high level description of the application and a 'Get Started' button which will bring the user to the viewPlayers component.

#### viewPlayers
The main component which allows user to view all created playerItem components by reading database documents.

#### playerItem
Contains each individual player data and edit & delete buttons.

#### players
Creates a new playerItem component for each player.

#### addPlayer
Contains a simple form which allows user to create a new playerItem component .

#### editPlayer
Simple form which allows user to edit existing playerItem components.
 
#### header
Header component contains the logo, search bar, and add player button. Only used with viewPlayers component but could be easily included across multiple pages if application was expanded further.

#### footer
Simple footer used across the site - contains a link to this Github repo.



**For information on how to use the application please refer to the User Guide in the Wiki Section of this repo.**







