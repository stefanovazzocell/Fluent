const fs = require('fs');
const express = require('express');
const hbs = require('hbs');

const site = require('./config/site');

const app = express();

hbs.registerHelper('a', function(link, code) {
  return '<a href="' + link + '" rel="noreferrer" target="_blank">' + code.fn(this) + '</a>';
});
hbs.registerHelper('pageIs', function(page, html) {
  if (page == this.title) {
    return html.fn(this);
  } else {
    return '';
  }
});

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.render('home', {
    site: site,
    title: ''
  });
});
app.get('/blog', function (req, res) {
  res.render('blog', {
    site: site,
    articles: [
      {title: 'Title', content: 'Content', link: '#', image: '/static/image/insert.jpg'}
    ],
    title: 'blog'
  });
});
app.get('/contact-me', function (req, res) {
  res.render('contact-me', {
    site: site,
    title: 'contact-me'
  });
});
app.get('/projects', function (req, res) {
  res.render('projects', {
    site: site,
    title: 'projects'
  });
});

app.listen(site.server.port, function () {
  console.log('Server started on port ' + site.server.port);
});