---
title: Don't Forget
layout: default
modal-id: 0
date: 2016-04-14
img: dont-forget.png
alt: Don't Forget
tools: Java, Android SDK, APIs/JSON (Retrofit), NoSQL (Realm)

---

Don't Forget is an app that delivers weather, task, and birthday reminders
to users via notifications custom-timed to fit their schedule.
The app is very customizable thanks to a robust set of user-controlled
preferences on the settings screen.

<div class="center-links">
    <a href='https://play.google.com/store/apps/details?id=com.charlesdrews.dontforget' target="_blank">
        <img class="play-store-app-badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png' />
    </a>
    <a class="btn btn-md btn-outline github-project-link" href="https://github.com/charlesdrews/Dont-Forget" target="_blank">
        <i class="fa fa-github"></i>
        <span class="small">View on GitHub</span>
    </a>
</div>

This project was a great opportunity to use some popular third-party
libraries like [Retrofit](http://square.github.io/retrofit/){:target="_blank"},
[Picasso](http://square.github.io/picasso/){:target="_blank"}, and
[Realm](https://realm.io/){:target="_blank"}.
It was also a good exercise in multithreaded, asynchronous programming,
using a *Sync Adapter* to gather data from the
[Weather Underground API](http://www.wunderground.com/weather/api/){:target="_blank"}
and *Intent Services* to schedule and launch notifications.

Features include:

  * Weather data is based on device location, or static location if user prefers
  * Data is gathered via *SyncAdapter* every 2 hours in the background, and also on app startup if data > 30 minutes old, as well as when user clicks the refresh icon
  * Weather data is saved to *Realm* database for offline access and quick loading on app startup
  * User can easily toggle between Celsius and Fahrenheit; data updates immediately
  * Tasks can be added with date and one of 4 quick time-of-day options which user can customize to their schedule
  * User can check off, edit, and delete tasks; all updates are persisted to the database
  * Birthdays are pulled automatically from the *Contacts Provider* and can be added/edited right from the app with changes saved to the provider
  * Notifications are launched at the 4 specified times, providing a weather summary, list of tasks due/overdue, and any birthdays occuring that day
  * Notifications are scheduled and created in the background with *Intent Services* and the *AlarmManager*
  