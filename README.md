# Slider
This Slider switches pictures with arrows and by click on the slides  pagination dots. It also has auto scroll. Auto-scrolling stops when you move the mouse over the picture, to resume auto-scrolling - just remove the mouse.
***
The function takes two parameters: block with pictures and object with parameters.
In the object, we pass properties to customize the slide.
autoPlay : true/false - Enable/disable iamges auto-scroll
autoPlaySpeed: Number - Auto-scroll speed in milliseconds
pagination: true/false - show current slide's number in dots
### For example:
`index.html`

    <script src="./script.js"></script>

`index.js`

    const target = document.querySelector(".carousel");
    const slide = {
        autoplay: true,
        autoPlaySpeed: 1000,
        pagination: true,
    }
    gallery(target,slide);

### Built With  
* HTML/CSS and Javascript
* Visual Studio Code, Chrome Developer Tools  