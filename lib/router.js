Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',function () {
  this.render('main');},
             {name : 'main'}
);

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/post/:_id',{name : 'post'})
