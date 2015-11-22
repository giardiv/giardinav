Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  link: {
    title: 'Posts' 
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('summernote', 'body', 'Content'),
        orion.attributeColumn('image', 'image', 'Image'),
        orion.attributeColumn('hasMany','hashtag','Hashtag')
    ]
  }
});


Posts.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  hashtag: orion.attribute('hasMany', {
    label: 'Hashtag'
  }, {
    collection: Hashtags,
    titleField: 'title',
    publicationName: 'youCanPutAnyStringYouWantHere',
  }),
  body: orion.attribute('summernote', {
      label: 'Body'
  }),
  image: orion.attribute('image',{
    label : 'Image'
  })
}));