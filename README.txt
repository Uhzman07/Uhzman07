This website is a personal website of Sadiq Usman Adebayo on the 7th of April, 2023
This webiste is an improvement on the previous website created by me for the Assignment 1 and 2.

// File Structure
I created a css stylesheet and named it "styles.ccs" 
I linked the stylesheet to each page "index.html", "Contact_me.html" and "RESUME.html"
The websites consists of 3 pages with various features and navigation links that directs and links the pages 
The pages are the About me(main) page, Resume page(where a copy of my resume file can be downloaded) and the contact me page which contains some additional details about my contact.
I also created a 3 javaScript files for each html file named "index.js" "Contact_me.js" "RESUME.js" to control the activities of wach page without any interference
I used the script tag to link each javaScript in their respective pages with the defer attribute so that the entire files load before the javaScript is applied to them.
All the files belong to a general folder there is no sub division.
The videos, images and audio files also belong to this folder.

// Asset list
Mubarak.png, sister.jpg,sister2.jpg,sister3.jpg,backwardarrow.png, forwardarrow.png, world.jpg, instagram.png,Mypicture.jpg,linkedin.png,snapchat.png,twitter.png,forwardarrow.png,dveeloperfavIcon.png,iStockVideo.mp4,rainandthundersound.mp3
The social media icons serve as links to my social media accounts 
The little dveloper icon is the websites icon
The sister images and world image belong to my gallery
The arrow images serve as links to the index.html and contact me respectively
the audio and video files are played on control
Mypicture.jpg is my profile picture
// CSS
This websites also contains two media queries one for mobile phone and the other for tablet while the rest of the code fits perfectly into the a desktop screen size
- I also used responsive dimensioning like using %, vw, vh based on the sizes of the devices screen.
- The first media query is one which is applied for a device whose width is less than or equal to 500px, the css rules are peculiar to this device size and can easily ovveride a general css rule
- For example, I used the media query to resize the size of my personal image because it was not quite responsive enough, I also used some special font sizes for some text elements, videos that weren't up to the size desired when the general css rule apply.
- Also, I used the second media query that applies to devices with width 1000px and below.
- The result here is that the first media query applies to the mobile devices with width less than or equal to 500px while the second media query applies to devices less than or equal to 1000px but not beyond 500px as it is rightfullly intercepted.
- I only applied the second media query for the personal image size for tablets.
- The default is avaialble for amd they also make up for that in the media query tag

--The first page (index.html and index.js)
- I added my photo galleery to this page and gave them equal margins, the border chnages when it is hovered on and then the pictures open when clicked (open)
-contains various social media links and link to send an email to me.
-contains links to the resume page, contact me page and the page itself
-it also contains an embedded video,my profile picture,the hero image and audio.-
-I made the entire body of the page to be a div element
-I made the header element to be a a div element also.
-I created another div element in the header element and made it display its link contents like a flex container, I also set the flex-wrap attribute as wrap to warp up content with minimized screen.
- I made the content move to the right using the justify content attribut and also added some paddings and margins between the images and links
-I made the header element to remain at the top of the viewer screen using the sticky attribute.
- I put the image, audio and video in different div tags.
- I also changed the font family, font size and colour of various texts on the page.
- In the index.js file, I added four new buttons at the bottom of the page using a general div tage and then aligning them to the right hand side of the page.
- The first three buttons perform the function of changing the colors of both the header and the body of the first page respectively, the lasty button returns the colour back to default
- In the JS, I used the document Id Selector to select the buttons and then the class name selector to select the other tags.
- To each button, I added an event Listener "click" that calls the function changeTheme() to change the colours of the header and the body rightfully to the colour of my colour pallete

--The Second page
--was divided in to grid areas containing the contents like tables, lists and the first heading sentences
--also has a two button links to move to the first page or the last page.
--also has a download link at the base used to download a copy of my resume page.
--I represented the entire body element as a div element and I made it display as a grid container, I also assigned a general colour.
--I manually calculated the desired rows and colums of each grid aread using the grid-template-area attribute.
--I set a size for each row and column.
-- Each grid area is set as a div element with the body as the parent
--Each grid area has a curved border and they inherit the colour of the body but the lists, tables and headings have different colours.
--The texts and headings also have different font families and colours for differentiation.
-- Here I also added the four buttons and added an eventListener that chnages the colour of the background amd the grid areas when clicked
-- The first button changes it to the first pallete colours and the rest also chnage the colour to the other respective pallete colours.
- There is also a default button to restore the page's colour back to default.
- In the JS,  added the eventListener to the buttons so as the perfrom the function of changing the theme with "click"
- Also I selected the download link and tried to control its activity, I was able to add a "click eventListener" to the link and was able to slow down its execeution by disturbing the user with confirm and alert notification.
- I also used the if conditional statements to move through steps and then when the final condition has been reached when the appropriate boolean value has been met, it displays a new print button(by appending) that allows printing of the page when clicked on
- I then used a for loop to chnage the element been referred to when the changeTheme function has been clocked



--The Third page
-- has 4 image links similar to that of the first page but they are bigger and also social media links.
-- has an external video with black borders around it.
-- also has a form used that contains a text input for the first and last name, an email input, a widget for selecting the user country and then a submit button.
-- it also has a "GO BACK" link used to return to the previous page.
-- I also made the entire body element to be a div element by putting a div tag directly in it, I also made the entire body page to display as a flex with the justify-content attribyte set as center; 
- I set the header tag as a div element, divided the main tag(also a div element) into various section tag element that act as div elments.
- Each section contains the first text setences and the images respectively.
- I also put the form element in a div element, this div element is also placed in an <aside> tag for clarification
-The form contains both the label and input tag and I used a "select option widget" also for the country selction.
- The last page also contains the four buttons to chnage the theme of the website page, I added the "click" event listener to each button also.
- I also useed the JS form validation here to check for validity of the input in each input box
- I selected each input box using their id nuumbers and then added the event listener "input" to check the values of the input boxes
- To each box I added a function to show that it is valid and that which is showed when it is reverted or when the criteria is not met again
- The first input box gets the first name and the second input box gets the last name and then the background color changes the lightgreen when the right input is put in.
- the email input box also checks if the right order had been followed in inputing the email address, here I searched the internet to check the right order to write a regex that checks its validity
- The next one is the password input that checks if the valu contains a number and if the lenth of value>8 to become valid
- The next one is the select and option which only validates when a country had been selected.
- The submit button in this form also gets a click eventListener that submits the form when all the criteria had been met and it also prevents submission if is pressed while the criteria haven't been completely met.
- Also, the empty p tag at the base of the page gets an inner html text to direct the user upon failing
- There is also a sign shown when all criteria has been met(background Color of the form chnages to lightgreen)
- The next form is a text area that allows the user to type in their suggestions, this validates when there is a valid input in the textarea before submission by changing the backgroundColor and then sending an alert notification
- the next feature is the star rating that chnage sthe color of star texts when the range input is been used.. It also returns an alert with the accurate rating 
- i also tied to efectively change the colour when not in need,  I used the for loop to itrarate backward after getting the input.

--selectors-- styles.css From A2
Adjacent sibling selector
- The adjacent sibling selector selects a particular element directly after a specified element.
- I used this selector to select the h3 directly after the div element with class"panel", I changed the colour, font size and the font family of one of the headings (First page)
Pseudo element selector
- I used the pseudo element select the first letter of h3(in the header tag)on the RESUME page, I changed the colour, font size, font weight and the font family.
Child selector 
- I used the child select the iframe in the div tag which I named "video", I changed the border colour, height, weight of the iframe. (First page)
Attribute selector
- On the last page, I used the attribute selector to select the input type attributes in the form element. I changed the padding, margin, font of the input spaces.
Multiple selector
- On the last page I used the multiple selector to select two input attributes, select tag and the option tag to add a background colour, padding, margin, and font format to each of them.
Sibling selector
- On the second page, I used the sibling selector to select all the following td elements after the th element., I changed the font size and font colour.
Universal selector
- I used the universal selctor to select the all the body of the second page and changed the background colour.




-------------- EXTERNAL LINKS-----------------------------------
developer-mode.png:Google inc, 2023, Developer mode Icon from https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj1-YeN7Ij9AhWF9cgKHdhfB98YABAAGgJxdQ&ohost=www.google.com&cid=CAESbeD2badmH0zFLvwOXCQ3JN3lksmKqlRgsxZPC0_bRBuUc86Zb61k6JsWLL7EmDvETLHJcraFZW7vK_SFknPj6h8zYyfk0qPMBdd-2bpHB5r3reBju70VETwS-jngnjNR5ILxsHVavoYwwtylLUo&sig=AOD64_2vhDWreGeO161PSPjpxH-0Y5LX5w&q&adurl&ved=2ahUKEwj50P-M7Ij9AhUqEFkFHd3YBTMQ0Qx6BAgIEAE
solid-brown-background.png: Solid background colours, 2023 https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-brown-solid-color-background.jpg 
Twitter link: Twitter, 2023,https://twitter.com/Usman52979407
twitter.png,Pixels icon, 2018, Twitter Icon in Flatstyle from https://iconscout.com/icon/twitter-241
Snapchat, 2023, link from https://www.snapchat.com/add/uhzmann?share_id=JCHnM0DJAa4&locale=en-US
Linkedin, 2023, link from https://www.linkedin.com/in/usman-sadiq-51aab7232
Instagram, 2023, link from https://instagram.com/uhzman_07?igshid=NTA5ZTk1NTc"
instagram.png, Stone hub, 2017, Icon scout from https://iconscout.com/icon/instagram-188
linkedin.png, Unicons font, 2020, Icon scout from https://iconscout.com/icon/linkedin-189
snapchat.png, Maninderkaur, 2019, Icon scout fromhttps://iconscout.com/icon/snapchat-1865890
Screenshot_20230207-134006_LinkedIn.jpg,Usman Sadiq's phone, stored in One Drive 2023
Centre image, adobe stock, 2023, from https://stock.adobe.com/ca/images/engineer-programmer-is-working-at-the-desk-programming-concept-website-coding-vector-illustration-isolated-on-white-background/255731595
Youtube video, Philip lackener, 2019, from https://youtu.be/QsrQV0wXh2E
Thunder audio, JuliusH, Pixabay, 2020, from https://pixabay.com/sound-effects/rain-and-thunder-nature-sounds-7803/
Contactme.html, Usman Sadiq, 2023, from C:\Users\Nafis\OneDrive\Documents\ASSIGNMENT 2 UM646490\Contact_me.html
Index.html, Usman Sadiq, 2023, from C:\Users\Nafis\OneDrive\Documents\ASSIGNMENT 2 UM646490\index.html
RESUME.html, Usman Sadiq, 2023, from C:\Users\Nafis\OneDrive\Documents\ASSIGNMENT 2 UM646490\RESUME.html
styles.css, Usman Sadiq, 2023, C:\Users\Nafis\OneDrive\Documents\ASSIGNMENT 2 UM646490\styles.css
Forward arrow.png, Chamestudio, 2019, Icon scout from https://cdn.iconscout.com/icon/free/png-256/arrow-left-next-forward-interface-ui-2-13532.png?f=avif&w=128
backward arrow.png, Graficon, 2022, Icon scout from https://iconscout.com/icon/previous-5190794
External video, Yana Tsap, 2022, iStock images from https://media.istockphoto.com/id/1363655815/video/programming-and-web-development-animation-laptop-with-computer-code-screen-programming.mp4?s=mp4-640x640-is&k=20&c=B8y1XAdP4Qsq9ZyY1EPjfm7sMjsbB53JjfmDEMzaz_E=
phone image but I ended up not using,https://iconscout.com/icon/phone-2902615 October 11, 2020 Phone icon

----- NEW -----
world.jpg, sister.jpg, sister2.jpg, sister3.jpg, Usman Sadiq, 2023, from my phone
Mubarak.jpg, Artoholic,2021,png tree from https://pngtree.com/freepng/twibbon-islamic-festival-ramadan-kareem-gold-shape-png_6097835.html
 

