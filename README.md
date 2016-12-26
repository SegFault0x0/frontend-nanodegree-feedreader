# Feed-Reader Project

This project uses the [Jasmine](http://jasmine.github.io/) JavaScript testing
framework to test a web-based application that reads RSS feeds.


## Usage

1. Download or clone the [github project](http://github.com/SegFault0x0/frontend-nanodegree-feedreader).
1. From an internet browser, open `frontend-nanodegree-feedreader/index.html`.
1. Scroll to the bottom and inspect the Jasmine tests.  The results should read
    `7 specs, 0 failures`.

## Specs

### RSS Feeds
Tests were written to loop through each feed in the `allFeeds` object and
ensure its `url` and `name` properties are defined and not empty.

### The Menu
These tests ensure that:

1. The menu element is hidden by default.
2. The menu displays and hides when the "Hamburger Menu" icon is clicked.

### Initial Entries
Tests to ensure that when the `loadFeed` function is called and completes its
work, there is at least a single `.entry` element within the `.feed` container.

### New Feed Selection
Ensures that when a new feed is loaded by the `loadFeed` function (a result of
the user selecting an item from the menu) that the RSS content changes.
