var express = require('express');
var config = require('config');
var contentful = require('contentful');

var router = express.Router();

var client = contentful.createClient({
  accessToken: config.get("contentful.api.access_token"),
  space: config.get("contentful.api.space_id"),
});

/* do something with contentful */
router.get('/', function(req, res) {

  client.entries({ 'content_type': config.get("contentful.content_type.leadership_profile_id") }, function(err, entries) {
    if (err) { console.log(err); return; }

    // console.log(entries[0].sys.contentType.sys.id);
    console.log("Profiles:");
    entries.forEach(function(entry) {
      console.log(entry.fields.title);
    })
  });

  client.entries({ 'content_type': config.get("contentful.content_type.corporate_information_id") }, function(err, entries) {
    if (err) { console.log(err); return; }

    console.log("Corporate infomation:");
    entries.forEach(function(entry) {
      console.log(entry.fields.title);
    })
  });

  client.entries({ 'content_type': config.get("contentful.content_type.team_overview_id") }, function(err, entries) {
    if (err) { console.log(err); return; }

    console.log("Teams:");
    entries.forEach(function(entry) {
      console.log(entry.fields.title);
    })
  });

  client.entries({ 'content_type': config.get("contentful.content_type.location_id") }, function(err, entries) {
    if (err) { console.log(err); return; }

    console.log("Locations:");
    entries.forEach(function(entry) {
      console.log(entry.fields.title);
    })
  });

  res.send('respond with a resource');
});

module.exports = router;
