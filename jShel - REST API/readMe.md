# RЕST API - jShel
REST API for jShel – Single Page Application, created with React.

## Functionality
* Records, reads, changes and deletes information from the database.
* Server Authentication and Authorization.
* Password hashing for users, before saving in the database.
* Ability to review sent requests, urls and console data.
* Protection from incorrect data entering the database (validation).

## Technologies
* Express JS.
* bcrypt, jsonwebtoken.
* Mongoose, validator.
* cors, nodemon.

### Data structure
#### Colections
* Hotel
```javascript
{
    name: String,
    imageUrl: String,
    description: String,
    town: String,
    stars: Number,
    address: String,
    public: Boolean,
}
```
* User
```javascript
{   
    email: String,
    profileImg: String,
    username: String,
    password: String,
    likedHotels: Array,
}
```

## Routes:
* **URL** - http://localhost:4200

* **All Hotels** - METHOD -> GET : "/".
```javascript
{   
    sessionToken: true,
}
```
* **Gold Area** - METHOD -> GET : "/gold-area".
```javascript
{   
    sessionToken: false,
}
```
* **Create Hotel** - METHOD -> POST : "/create-hotel".
```javascript
{   
    sessionToken: true,
    body: Hotel,
}
```
* **Edit Hotel** - METHOD -> PUT : "/edit-hotel/hotelId".
```javascript
{   
    sessionToken: true,
    body: Post,
}
```
* **Delete Hotel** - METHOD -> DELETE : "/delete-hotel/hotelId".
```javascript
{   
    sessionToken: true,
}
```
* **Hotel Details** - METHOD -> GET : "/details/hotelId".
```javascript
{   
    sessionToken: false,
}
```
* **Profile Page** - METHOD -> GET : "/user/profile".
```javascript
{   
    sessionToken: true,
}
```
* **Like Hotel** - METHOD -> GET : "/like-hotel/:hotelId".
```javascript
{   
    sessionToken: true,
}
```
* **My Favourite Hotels** - METHOD -> GET : "/user/my-favourite".
```javascript
{   
    sessionToken: true,
}
```
* **Login** - METHOD -> POST : "/auth/login".
```javascript
{   
    sessionToken: false,
    body: {
        username: String,
        password: String,
    }
}
```
* **Register** - METHOD -> POST : "/auth/register".
```javascript
{   
    sessionToken: false,
    body: User,
}
```
* **Logout** - METHOD -> GET : "/auth/logout".
```javascript
{   
    sessionToken: true,
}
```

## Access control:
* All users can view the hotels.
* Only authorized users can create a hotel or like it.
* Only authenticated users can access their favourite hotels.
* Only authorized users (creators) can edit or delete a hotel.
