# Gigboard

## README

[Gigboard](https://gig-board.herokuapp.com/gigs) is an app specific for short-term-gigs.

The gig poster is going to be able to log-in, view gigs posted by others, and view gigs posted by themselves.

The gigs will have specific categories or “tags” that will show you what type of work the gig involves (whether it’s bartending, playing music, mechanic work, etc…)

The gig poster is able to specify how many positions they have available for that specific gig

_[Future Goals]_

Create a gig seeker who will be able to view available gigs

The gig seeker will be able to view gigs in their area, as well as filter them through tags

As the gig seeker “claims” a gig, the available gigs positions will decrease

### UX/Stories

- 1 log-in (gig poster)
  - Eventual 2 log-in (gig poster / gig seeker)
- As a gig poster
  - Log-In
  - Post a gig
    - Title
    - Description
      - Start Date & End Date
        - Include times
      - Requirements
    - Wage
    - Tip (yes/no)
    - Tag
      - Categories it fits in to (Service, Entertainment, Sports, Health/Wellness, General, Automotive)
  - Delete a gig
  - Edit a gig
  - Number of positions available for that gig
  - Add location
    - Map API, Weather API
      - Map API will require a package
  - Urgency of the specific position

### Tech Stack

- React
- Express
- MongoDB
- Node
- Heroku (deploy)
- Bootstrap

### Resources

- [WeatherAPI.com](https://www.weatherapi.com)
- [React search functionality](https://www.emgoto.com/react-search-bar/)

### Repos

- [Frontend](https://github.com/benhammondmusic/gigboard) - current repo
- [Backend API](https://github.com/benhammondmusic/gigboard-backend/)

### Wireframes

![Wireframe 1](./images/Wireframe1.png)

![Wireframe 2](./images/Wireframe2.png)

![Wireframe 3](./images/Wireframe3.png)

![ERD](./images/erd.png)

### Gig-Style

If you're interested in contributing to this project - please check out our [style guide](./styleguide.md)

### Live Site(s)

- [Gigboard-B](https://gig-board.herokuapp.com/gigs) - [Ben's](https://benhammond.tech) Heroku deployment
- [Gigboard-K](https://kaye-gig-board.herokuapp.com) - Kaye's Heroku deployment
- [Gigboard-S](https://sergio-frontend-gigboard.herokuapp.com) - Sergio's Heroku deployment
- [Gigboard-JC](https://jc-gigboard.herokuapp.com) - JC's Heroku deployment
- [Gigboard-J](#) - James' Heroku deployment
- [Gigboard-H](#) - Hayden's Heroku deployment
  _Please ensure you're using HTTPS and that cookies are enabled to allow Oauth login_

### Kaye and the Boyzz

![Kaye and the Boyzz](./images/KayeAndTheBoyzz.png)
