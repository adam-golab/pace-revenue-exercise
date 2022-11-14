# Pace gets organised 📅

This project is showing a day view of the events. Inspired by the MacOS Calendar design. Also, it shows some of my skills related to React and Frontend in general.

# FAQ

## What choices did you make and why?

To be honest there wasn't many choices to make. If I had to name which decision was the hardest, I’d say picking the main approach for positioning event cards.

Using the CSS Grid was the first idea, but I wasn't so sure if the items will flow as desired. Other ideas that I had were the Flexbox or using absolute positioning. With Flexbox I still had the same questions as with the Grid, plus a few additional like adding required offsets to particular items to align those correctly with the time. Using absolute positioning looked like a solution which allows me to achieve all acceptance criteria but at the same time required writing the most JavaScript code. So I set timer for 30 minutes to create a Proof Of Concept for Grid. It was worth it. So, the rest of the time I could spend on polishing the styles and making sure that everything looks good.

Regarding technologies, I didn't add many new libraries. Jest for testing, as it's the most popular and it's faster to configure than mocha/chai. Moreover, I had a Jest config from the previous project that I just copied over to save some time.

For styling I picked the Styled-Components. I've heard that you're using it in the project so it's an opportunity to show that I'm familiar with the library.

## What challenges did you face?

The most difficult challenge was the answer for the question how to handle very short events. I decided to set a minimal height for each of event cards. So, I ended with writing a small helper to calculate the height required to fit the time and title of an event depending on the screen height. It required accessing the DOM Element so there is a performance tradeof in a form of an additional render. Also, the helper checks the Grid's height instead of just screen size, so it works on smaller screens too.

Rest of the challenges was mostly related to the time constraint and me trying to not extend the 3 hours time limit.

## What tradeoffs did you choose?

Implementing as much as possible in the pure CSS didn't allow me to write that many test cases as I'd like to. Of course, I could use more complex tests runners like Cypress, Playwright or implementing CSS regression tests but I didn't have enough time to do it correctly. Also all of those solutions are checking regressions, so not that much useful for the TDD approach.

During the testing I encountered some issues with performance during the POC implementation. Firstly, I divided the grid to 1440 rows to have as precise resolution as possible. It seems like it was too many. So I decided to lower the resolution to only 144 rows. It improved performance but with a cost of not every card being positioned correctly. For example with a specific resolution an event with start time 7:59 will be placed below an event with end time 8:00 even that they're overlapping. Later I found out that the issue with performance was caused by DevTools, so it can be easily reverted to more precise solution. But there is other issue, older browsers (Chrome below version 96) have limitations to 1000 rows. So, still I think it's safer to keep this value lower.

Also, I wasn't so sure about events starting close to midnight, so I just allowed them to overflow at the bottom of the grid. That may be not so desirable when there are some other components below the calendar but it looked better than moving it up and messing with perceived start time. In the real product that's something to discuss with the UX team.

I didn't focus that much on the titles of events. So there is only one line allowed with ellipsis when it's too long. That's probably something to think about and fix when requirements about longer desciptions appear.

I didn't implement anything related to accessibility there because of the time constraint. That's probably something to improve in the future, at least add properties for screen readers which parts are important and which one shouldn't be read.

## What do you like and not like about your solution?

It was fun to implement it using the CSS Grid and I really like how easy it was to position the cards as desired for overlapping events.

Also, I'd say it's responsive and looks nice on most of the reasonable resolutions. I really like how the cards re-position when you resize the window.

When it comes to things that I'm not so proud of, I don't the lack of minimal width set on the cards. But it'd require setting it on the grid as well.

I'm not so sure if the fully responsive implementation hasn't generated some hard to spot issues with some edge cases. Maybe it'd be better to implement only a few breakpoints and prepare more fixed design.

The last thing to improve is the mobile view. As the design looks fine on landscape devices, on the portrait orientation it'll cut of probably all of the titles. So, I don't like the fact that I didn't have enough time to implement another view for mobile devices. Probably a simple list with events may be enough.

## What areas would you work on next?

- Improve the mobile view, maybe by implementing the list view.
- Add CI pipelines to check the quality of the code. Just in a case someone else wants to contribute to the project.
- Maybe add some animations, it'd be nice to re-position items smoothly when a user resize the window.
- I was thinking about the zoom feature. As for now, the calendar takes the whole screen. Allowing users to change the height of the calendar should help them to see which events are really overlapping and which not but because of the minimal height constraint were placed next to each other.
- Improve error handling of the API call and the loading screen.
- implement dark mode and switch it automatically depending on the OS theme.
- Implement modals with more details about a clicked event.
- Maybe connect everything to a real API. And then allows users to add/edit/remove events.
