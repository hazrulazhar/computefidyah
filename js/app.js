// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  // App root element
 root: '#app',
 // App Name
 name: 'My App',
 // App id
 id: 'com.computefidyah.hazxco',
 // Enable swipe panel
 panel: {
   swipe: 'left',
 },
 // Add default routes
 routes: [
   {
     path: '/about/',
     url: 'pages/about.html',
   },
   {
     path: '/fidyah/',
     url: 'pages/fidyah.html',
   }
 ],
 // ... other parameters
});

var mainView = app.views.create('.view-main');
