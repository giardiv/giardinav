Meteor.subscribe('posts');
Meteor.subscribe('hashtags');



Template.header.helpers({
        hashtags : function(){return Hashtags.find();}
    }    
);



Template.main.helpers({
        posts : function(){return Posts.find();},
        hashtags : function(){return Hashtags.find()},
        hashtagDetails: function() {return Hashtags.findOne(this);}}
);

Template.post.onRendered(
    function(){
        this.subscribe('post',Router.current().params._id);
    }
);

Template.post.helpers({
        post : function(){
            return Posts.findOne(Router.current().params._id);
        }
    }
);


ReactiveTemplates.events(
    'collections.posts.create',
    {
        'keyup input[name="hashtag"]' : function(event, template){
            console.log(event.target);
            console.log('whoo')
        }
    })