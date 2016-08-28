---
title: Charlie Mail
layout: default
modal-id: 4
date: 2016-02-28
img: charlie-mail.png
alt: Charlie Mail
tools: Java, Android SDK, APIs/JSON

---

I built this simple email client in just a couple days as a project for
General Assembly's Android development bootcamp. I used Google's
[Gmail API](https://developers.google.com/gmail/api/){:target="_blank"}
as well as their
[API Client Library for Java](https://developers.google.com/api-client-library/java/){:target="_blank"}.

<div class="center-links">
    <a class="btn btn-md btn-outline github-project-link" href="https://github.com/charlesdrews/Email-Client-App/tree/master/CharlieMail" target="_blank">
        <i class="fa fa-github"></i>
        <span class="small">View on GitHub</span>
    </a>
</div>

Features include:

  * User can log into their Gmail account, view their emails, and actually send a new email
  * Master-detail flow pattern for the UI, from inbox/drafts/sent lists to view/compose email
  * Separate layout for tablets with master & detail views side by side
  * Email MIME data is parsed into relevant components (more difficult than it sounds!)
  * Email body is displayed with html formatting if available

