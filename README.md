## TouchToonies

<center><a href="https://imggmi.com/" target="_blank"><img src="https://cdn1.imggmi.com/uploads/2019/1/31/70bc5412cc82759342d4a0669fe49d8e-full.jpg" border="0"/></a></center>

<center><p><a href="https://imggmi.com/view/2019/1/31/f01abd70901f75a9a3aca2e9e20c2092-full.jpg.html" target="_blank"><img src="https://cdn1.imggmi.com/uploads/2019/1/31/f01abd70901f75a9a3aca2e9e20c2092-prev.jpg" border="0"/></a></p></center>

## Inspiration

After first meeting as a group, we bonded over our love for music and playlist making so we decided to solve a problem that was close to our hearts. Inspired by the TouchTunes challenge, after playing with the API for some time we discovered that we wanted to help empower recording companies and music festival organizers with identifying prominent performance candidates in the area.

Imagine if you're a festival organizer for Osheaga and you wanted to optimize the amount of people that would buy tickets for your festival, attend, and/or engage on social media by inviting the most in-demand artists by region. Not only would you be able to increase ticket sale revenue but you'd be able to increase the regional media coverage and engagement.

TouchToonie allows you to access over 180M Jukebox song play events, in order to help identify the most played songs, artists and music content in your region. By identifying this top content, users are given the ability to view this data in a virtual reality visualization immersing them into the audio experience with the indicated artist song spearheading the experience.

## What it does

A webVR visualization platform that helps record companies and festival organizers identify prominent candidates for touring and events by allowing potential clients to view the data for top musical candidates in the region by geolocation and visualize the data through an audio and visual VR experience on their web browser.
How we built it

We built our application with the TouchTunes API using JSON files with identification features that pull data with GET requests and geo-location data that searches JSON query data for the top 10 artists and songs within the region. Data is then analyzed with the Google Cloud Maps API and is then visualized through dominant locations with a Maps heat-map. Our ReactJS application was then sent our parsed data to the React360 environment that was initialized by ReactVR components with our 3-D shapes being created in Unity with 3-D modelling, with the animation.spring function.

## Challenges we ran into

Integrating the WebVR environment with the JSON files and queried data, and Google Cloud APIs was the most challenging part of our project. As there are limited webVR application with geo-location data, we had limited documentation to reference when navigating through data integration errors and creating our menu for the audio visualizer by ensuring that a C++ wrapper was created to input our visualization in a JS environment.
Accomplishments that we're proud of

We're proud of being able to build a WebVR application that makes virtual reality more accessible to the music industry and allows for music festivals to be a more personalized and engaging experience. We're also very proud of the fact that we chose to visualize the data that we used (both geolocation and real-time) to create an innovative experience outside the typical corporate graphing.


## What we learned 

We learned how to design and integrate location data with a WebVR environment, as well as creating a product for a two-sided marketplace. We were also new to WebVR development and since we were developing without a Google Cardboard and only with Unity we found that the 3-D modelling was challenging without physically being able to visualize the dimensions outside of the given axis.

## What's next for TouchToonies

The next product feature that we'd like to add would identify and predict the cultural characteristics of that region and how the artist can improve music curation. While we were able to create a product that would drive social awareness, and analyze the data to identify points of trends, and discover anomalies.


## Built With

    web-vr
    javascript
    google-cardboard
    google-cloud
    touch-tunes API 
    firebase
    react
    react-360
    json

