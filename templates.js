//Title: templates.js
//Author: Kyle Hochdoerfer
//Date: 6/20/23
//Description: Declares classes to create header and footer HTML templates

//Declare a class header that extends HTMLElement
class Header extends HTMLElement{
    //Call super() in the constructor to initialize Header
    constructor(){
        super();
    }

    //Declare a function for setting the HTML of the component
    connectedCallback(){
        //Set the innerHTML of the header
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <!--Provide a title, metadata, link a stylesheet, and Google Fonts-->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Personal Portfolio</title>
            <link rel="stylesheet" href="./site.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+4&display=swap" rel="stylesheet"> 
          </head>
          <body>
            <!--Display a nav bar with a logo that links to the index-->
            <nav>
              <a class="site-name" href="./index.html">Kyle Hoc Web Development</a>
              <div class="nav-container">
                <!--Display nav links to other pages on the site-->
                <ul>
                    <li><a class="nav-link" href="./about.html">Bio</a></li>
                    <li><a class="nav-link" href="./resume.html">Resume</a></li>
                    <li><a class="nav-link" href="./projects.html">Projects</a></li>
                    <li><a class="nav-link" href="./database.html">Database Diagrams</a></li>
                    <li><a class="nav-link" href="./api-tests.html">API Unit Tests</a></li>
                    <li><a class="nav-link" href="./bucket-list.html">Bucket List</a></li>
                </ul>
            </div>
        </nav>`;
    }
}

//Define the custom element as "portfolio-header"
customElements.define("portfolio-header", Header);



//Declare a class footer that extends HTMLElement
class Footer extends HTMLElement{
    //Call super() in the constructor to initialize Footer
    constructor(){
        super();
    }

    //Declare a function for setting the HTML of the component
    connectedCallback(){
        //Set the innerHTML of the footer
        this.innerHTML = `<!--Display a footer for use on each page of the site, and close the body and HTML tags-->
        <footer class="footer">
            <p>Quick Links</p>
            <ul>
                    <li>My Github Repositories:&nbsp &nbsp</li>
                    <li><a class="nav-link" href="https://github.com/KyleHoc/web-231">WEB 231</a></li>
                    <li><a class="nav-link" href="https://github.com/KyleHoc/web-330">WEB 330</a></li>
                    <li><a class="nav-link" href="https://github.com/KyleHoc/web-340">WEB 340</a></li><br>
                    <li><a class="nav-link" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Degree</a></li>
                    <li><a class="nav-link" href="https://www.youtube.com/user/bellevueuniversity">Course Youtube Channel</a></li><br>
                    <li><a class="nav-link" href="https://github.com/buwebdev/web-330">WEB 330 Course Github Repository</a></li>
            </ul>
        </footer>
      </body>
    </html>`
    }
}

//Define the custom element as "portfolio-footer"
customElements.define("portfolio-footer", Footer);

//Declare a alternative class footer that extends HTMLElement
class AltFooter extends HTMLElement{
    //Call super() in the constructor to initialize AltFooter
    constructor(){
        super();
    }

    //Declare a function for setting the HTML of the component
    connectedCallback(){
        //Set the innerHTML of the footer
        this.innerHTML = `<!--Display a footer for use on each page of the site, and close the body and HTML tags-->
        <footer class="footer">
            <p>Bellevue University WEB 330 - <a href="https://unsplash.com/">Photos courtesy of Unsplash</a></p>
        </footer>
      </body>
    </html>`
    }
}

//Define the custom element as "portfolio-footer"
customElements.define("alt-footer", AltFooter);