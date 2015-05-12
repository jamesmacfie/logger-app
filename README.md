### Logger ###

A template Meteor app for Logger.

This app is more of a scaffold for a potential project implementation than any sort of full blown app, but it should provide a decent proof of concept to how it could work. I've also deliberately kept everything reasonably simple for those that haven't used the Meteor framework before.

There's a few packages that I've pulled in to help get this working nicely:

[twbs: bootstrap](https://atmospherejs.com/twbs/bootstrap): Twitter bootstrap. Yes, it looks like 'THE INTERNET' but we can easily override styles etc

[accounts-base](https://atmospherejs.com/meteor/accounts-base) and [accounts-password](https://atmospherejs.com/meteor/accounts-password): Accounts. Not sure if we'll need account functionality at all, but I've bought it in anyway

[ian:accounts-ui-bootstrap-3](https://atmospherejs.com/ian/accounts-ui-bootstrap-3): Bootstrap accounts UI. Adds a UI on top of the accounts package (login/signup/etc) that is written with the Bootstrap HTML in mind.

[aldeed:collection2](https://atmospherejs.com/aldeed/collection2) and [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema): Collection schemas. Mongo doesn't restrict the data schema of any record you insert into the DB. This provides that. Saves us accidentally inserting shitty data into the DB

[fourseven:scss](https://atmospherejs.com/fourseven/scss): Sass support. Allows us to write styles in Sass. Also provides live updates to any open page as you update your .scss files. Sidenote: is created and maintained by a local Wellington dev.

[iron:router](https://atmospherejs.com/iron/router): Routing. Iron router is the defacto routing solution for Meteor apps.

[momentjs:moment](https://atmospherejs.com/momentjs): Date time formatting. Moment is a neat library for dealing with dates and times.

#### To Run ####

```
git clone https://github.com/jamesmacfie/logger-app.git

cd logger-app

meteor
```
