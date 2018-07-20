# Project Description

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. 
Now this was for me to finish as a project for Udacity.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


# How to install this test and where is it visible?

1.Clone this repository or download it as a .zip file.
2.Open the index.html file in the browser, to open the RSS feedreader.
3.Check the test results from jasmine on the bottom part of the page.

# What is in the test suite?

There are 4 tests in the feedreader spec file:

1.The allFeeds 
There are no undefined objects for name and for URLS, thet may not be empty.
Also the Urls are tested to contain html/https.

2.The menu 
The menu element is toggled by a click. It is initially hidden but on a 
click it shows. And on another click it is hidden again.

3.Initial Entries
A loadFeed is called en completed and there is at least a single feed entry in the container.
Callbacks are used for asynchronous calls. 

4.New Feeds
A new feed entry is loaded by a loadFeed function and changes the content.
This is asynchronous so callbacks are used.


# Acknowledgements
Thanks to mohammed riaad for the study jam to help with this.
