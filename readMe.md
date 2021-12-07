# jShel - Single Page Application
Created with React

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Functionality
* Implemented authentication and authorization.
* Ability to freely view the post of other users.
* Ability to freely share your own post.
* Ability to edit and delete personal posts.
* Ability to like other users' posts and add them to Favourites. 
* Interactive UX.


## Technologies
* React
* HTML, CSS, JavaScript
* Еxpress JS, Mongo DB

## Application Pages
* **Home** - Home page for users who aren’t registered.
* **Regsiter** - registration with email, username and password.
* **All Post** - view all available public hotels in the database.
* **Share your hotel** - create a hotel and save it in the database.
* **Edit your hotel** - edit a hotel and save it in the database.
* **Details** -Shows details about a certain hotel. Unauthorised users can add it to Favourites or see other users who have already added it to Favourites. Authorized users can edit or delete the certain post. 
* **My Profile** - view information about the user and their shared hotels (only for authorized users).
* **My Favourite hotels** - Shows the registered user's Favourite hotels. 

## Access control:
* All users can view the Gold Area hotels.
* Only authorized users can view all hotels in database.
* Only authorized users can create a hotel or like another one.
* Only authenticated users can access their favourite hotels.
* Only authorized users (creators) can edit or delete a hotel.
* Only unregistered users have access to the homepage.
* Only unregistered users have access to the login and register pages.
