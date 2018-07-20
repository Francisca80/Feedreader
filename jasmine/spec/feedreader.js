/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        it('urls are notEmpty', () => {
            allFeeds.forEach((feed) => {

                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch(/^(http|https):\/\//);
            });

        });

        it('name is defined', () => {
            allFeeds.forEach(feed => {

                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    describe('The menu', () => {

        const body = document.body;
        const menuIcon = document.querySelector('.menu-icon-link');

        it('menuHidden', function () {
            expect(body.className).toContain('menu-hidden');
        });

        it('menuHidden toggleOnClick', function () {
            menuIcon.click();
            expect(body.className).not.toBe('menu-hidden');
            menuIcon.click();
            expect(body.className).toBe('menu-hidden');
        });
    });

    describe('Initial Entries', () => {
       
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

      

        it('there is at least a single .entry in the feed', ((done) => {
            const singleEntries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(singleEntries).toBeGreaterThan(0);
            done();
        }));

    });

    describe('New Feed Selection', () => {

       let actualFeedSelection;
        beforeEach((done) => {
            loadFeed(0, () => {
                actualFeedSelection = document.querySelector(".feed").innerHTML;

                loadFeed(1, () => {
                    done();
                });
            });
        });
        it("new feeds are loaded through loadFeed()", ((done) => {
            const newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(actualFeedSelection).not.toBe(newFeedSelection);
            done();
        }));
    })
}());




 