Hashtags = new orion.collection('hashtags', {
  singularName: 'hashtag',
  pluralName: 'hashtags',
  link: {
    title: 'Hashtag' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" }
    ]
  }
});

Hashtags.attachSchema(new SimpleSchema({
  title: {
    type: String
  }
}));