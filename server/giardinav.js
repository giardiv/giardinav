Meteor.startup(function () {
    console.log('GO!');
// code to run on server at startup
});

Meteor.publish(
    'hashtags', function(){
        return Hashtags.find();
    }
);

Meteor.publish(
    'posts', function(){
        return Posts.find();
    }
);

Meteor.publish(
    'post', function(pid){
        return Posts.findOne(pid);
    }
);