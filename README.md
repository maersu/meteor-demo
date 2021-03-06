# Meteor


Build apps that are a delight to use, faster than you ever thought possible

* Full Stack Javascript Framework
* page: meteor.com
* on top of node


## Demo

### S1

* Simple App

### S2

* Package Manaqger: [atmospherejs](https://atmospherejs.com)
* Angualr support: meteor add urigo:angular
* SCSS support: meteor add fourseven:scss


### S3

* 3-Way data binding
* Collection: Server Mongo - Client Minimongo 
* [DDP](https://www.meteor.com/ddp)

DDP example: 

    a["{\"msg\":\"result\",\"id\":\"1\",\"result\":[{\"text\":\"test\",\"_id\":\"oSQgzp6ThmWSxQ7LY\"}]}"]
        
#### Deploy / Hosting

    meteor deploy jsbern.meteor.com
    
* Current meteor hoster: [modulus.io](http://modulus.io)
* Next: Galaxy by meteor group
* Plain Server: [meteor-up](https://github.com/arunoda/meteor-up) 

### S4

Go Mobile - Easy to use [cordova support for android/ios](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration)

Add ios plattform

    meteor add-platform ios
    
    # ios simulator
    meteor run ios-device

    # ios device
    meteor run ios-device
    # or 
    meteor run ios-device --mobile-server jsbern.meteor.com
    
        
* Be aware of [hotpush](http://info.meteor.com/blog/meteor-hot-code-push)
* Offline data: [GroundMeteor](https://github.com/GroundMeteor/db)
* Optimistic UI [Optimistic UI](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation)

### S5

* Add user accounts: meteor add accounts-ui accounts-password

## Sources

* meteor.com
* meteorhacks.com
* discovermeteor.com
* www.eventedmind.com
* http://meteorpedia.com/read/Main_Page

* Monitoring: kadira.io



