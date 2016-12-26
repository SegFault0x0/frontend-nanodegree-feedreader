/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    var length = allFeeds.length;

    // A test suite for the RSS Feeds
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and ensures it has a
         * URL defined and that the URL is not empty.
         */
         it('have all URLs defined and those URLs are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; ++i) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });


        /* Loops through each feed in the allFeeds object and ensures it has a
         * name defined and that the name is not empty.
         */
         it('have all names defined and those names are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; ++i) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });

    });

    // A test suite for the Hamburger Menu.
    describe('The Menu', function () {
        // Test to ensure that the menu element is hidden by default.
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Ensure that the menu changes visibility when the menu icon is clicked.
        it('changes visibility when the Hamburger Menu is clicked', function() {
            // Perform a click of the Hamburger Menu icon
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

    // A test suite for the initial feed load
    describe('Initial Entries', function () {
        beforeEach(function(done) {
            /* Perform the asynchronous loadFeed function and let Jasmine
             * know when the async function has completed.
             */
            loadFeed(0, done);
        });

        /* Ensure that when loadFeed() completes, there is at least a single
         * .entry element within the .feed container.
         */
        it('have at least one .entry element within the .feed container',
                function() {
            // If article entries are loaded, they'll be children of `.feed`
            expect($('.feed .entry')).not.toBe(0);
        });
    });

    // A test suite exercising the selection of a different feed
    describe('New Feed Selection', function () {
        var origFeed = '';
        var newFeed = '';

        beforeAll(function(done) {
            // Perform the initial feed load
            loadFeed(0, function() {
                origFeed = $('.feed-list a[data-id=0]').text();
            });

            // Load the second feed in the `allFeeds` array
            loadFeed(1, function() {
                newFeed = $('.feed-list a[data-id=1]').text();
                done();
            });
        });

        // Test that the feed content changes when a new feed is loaded
        it('changes the contents of the feed', function(done) {
            // Compare the original feed Header with the new feed Header.
            expect(origFeed).not.toEqual(newFeed);
            done();
        });

        afterAll(function(done) {
            /* Reset the page with the initial feed after the final test in
             * order to maintain a consistent test environment.
             */
            loadFeed(0, done);
        });
     });
}());
