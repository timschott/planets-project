## Lift Off 

For our project, we created a website for people to explore data and learn more about our Solar System’s planets. We were interested in this idea because of a shared interest in the Solar System. Also, thinking through this project and delivering a great end product provided a much-needed departure from our still mostly “remote” lives. We found a super cool [API](https://api.le-systeme-solaire.net/rest/bodies) (published in French!) to support our work and quickly got our project “off the ground.”

## Homepage 

The homepage serves as the entry point for the site. On page load, we use the `useEffect` hook to access data from the API we are working with. This API provides a massive response containing information about nearly every “celestial object” you could think of --- not just planets, but also moons, stars, etc. So, we include logic in the `useEffect` call to parse out the information relevant to our site. We persist a payload for each planet into local storage so it can be drawn on by the detail pages.

Besides calling the API, the homepage component constructs an image `<map>.` An image map allows for the use of a background image with defined points of interactivity. In our case, we use a solar system image that displays each of the planets in a row. From there, we add “coordinates” for each of the planets (capturing their position on the page) which makes each planet a clickable aspect of the site. This is how we add navigation to the site in a clever, intuitive fashion; if a user wants to learn more about Jupiter, they simply click and are taken to the details page for that planet. Additionally, hovering over a particular planet displays the data in its `title` attribute. We made sure not to make the sun clickable as our API did not contain data for it.

## Details

The detail pages displays [... ]

The UI of the detail pages was designed to be as easy to read as possible. The values returned by the API do not include units, which are a critical component for anyone hoping to find use in our website. To address this, a column was added to specify units. Each row of the table gathered from the API response is filtered through some hard-coded dictionaries that translate API keys to readable keys (i.e. `englishName` -> `name`). The `englishName` property is leveraged to choose an image to display under the table. The breathing background of the details page is implemented purely in CSS. Using some animation techniques, a gradient is varied positionally at some time intervals.

## Takeaways

When carrying out the homepage of the project, we were able to apply lessons from our labs and homework assignments towards an original end. It was really cool, for example, to work with an API using Javascript, something that before this project we had mostly seen as a “back-end code” activity. It was also interesting to integrate an image map into our website, because we were able to successfully blend some a new school framework (React) with image maps, an html affordance that has existed for a fairly long time. We also gained important skills when it comes to collaboration with Github. This is of major importance no matter what subfield of technology each of us pursue, so it was great to have a practical chance to configure and contribute to a shared repository with our peers. 