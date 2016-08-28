---
title: Neighborhood Guide
layout: default
modal-id: 3
date: 2016-02-12
img: neighborhood-guide.png
alt: Neighborhood Guide
tools: Java, Android SDK, SQLite

---

Neighborhood Guide is an app that allows users to browse a selection of 
local destinations, save their favorites, and add ratings & notes. This
app was built as a project for General Assembly's Android development bootcamp.

<div class="center-links">
    <a class="btn btn-md btn-outline github-project-link" href="https://github.com/charlesdrews/Neighborhood-Guide" target="_blank">
        <i class="fa fa-github"></i>
        <span class="small">View on GitHub</span>
    </a>
</div>

The list of sample locations is stored locally in a SQLite database, along with
user input such as favorite status, rating, and notes. Future versions will
utilize an API such as [Google Places](https://developers.google.com/places/){:target="_blank"}
to provide a dynamic list of places based on the device's location.

Features include:

  * User can search through the list of places; results are updated on each key press
  * The multi-criteria search looks for the keyword(s) in place name, location, neighborhood, and category
  * User can filter results; the funnel icon opens a dialog with a dropdown of place categories
  * Searches and filters are preserved on device rotation
  * User can add a place to favorites from the search results or the place detail screen
  * Place detail screen allows user to add ratings and notes, which are persisted in SQLite
  * A *Shared Element Transition* animation is used to provide a smooth transition from the thumbnail in the places list to the header photo on the place detail screen
  * The favorites screen provides quick access to the user's favorite places
