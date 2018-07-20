/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
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

        it('name is defined', function () {
            allFeeds.forEach(feed => {

                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    describe('The menu', function () {

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


        it("there is at least a single .entry in the .feed after loadFeed() is done", ((done) => {
            const singleEntries = document.querySelector(".feed").getElementsByClassName("entry").length;
            expect(singleEntries).toBeGreaterThan(0);
            done();
        }));

        it("entry has a link starting'http(s)://'", ((done) => {
            const entries = document.querySelector(".feed").getElementsByClassName("entry-link");
            for (let i = 0; i < entries.length; i++) {
                expect(entries[i].href).toMatch(/^(http|https):\/\//);
            }
            done();
        }));
    });

    describe('New Feed Selection', () => {

        const actualFeedSelection;
        beforeEach((done) => {
            loadFeed(0, () => {
                actualFeedSelection = document.querySelector(".feed").innerHTML;

                loadFeed(1, () => {
                    done();
                });
            });
        });
        it("new content loaded through loadFeed()", ((done) => {
            var newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(actualFeedSelection).not.toBe(newFeedSelection);
            done();
        }));
    })
}());