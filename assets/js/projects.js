"use strict";
// this code is all original to Joaquin Silva
$(document).ready(function() {

    // blank div to hold project cards rendered from the array of project objects
    let projectPage = $('#workContent');

    // array of project objects that allows the quick update of projects rendered to the page
    const projects = [
        {'anchorTag': 'tuuna', 'title': "Tuuna Music Maker", 'description': 'Team Capstone Project: Tuuna Music Maker is a java based web-application that allows registered users to create songs with a digital javascript piano displayed on the screen. Registered users can share their songs with other people via text message, make comments on a song, edit their user profile, listen to songs of other users, and like songs of other users. Non-registered users can view and listen to all of the songs and use the search feature to look for particular songs.', 'gifSrc': 'https://giphy.com/embed/6Eo4qnBny8bDCaX3ig', 'url': 'https://tuuna.co', 'codeSrc': 'https://github.com/TuunaMusicMaker/tuuna'},
        {'anchorTag': 'curiosities', 'title': "Cody's Curiosities", 'description': 'A craigslist - type java application that uses jsp files, servlets, and DAOs (data access objects) to allow users to create, read, update, and delete ads from a MySQL database. ', 'gifSrc': 'https://giphy.com/embed/55dc330bG5yQaAWTSw', 'url': '', 'codeSrc': 'https://github.com/XanaduLister/java-adlister'},
        {'anchorTag': 'contactsManager', 'title': 'Contacts Manager', 'description': 'A java application that uses conditional logic and loops to temporarily store data and respond to user input.', 'gifSrc': 'https://giphy.com/embed/2Y9K4yuTyVoFLMOWGB', 'url': '', 'codeSrc': 'https://github.com/joaquin-juan/contacts-manager'},
        {'anchorTag': 'moviesApp', 'title': 'Movies Application', 'description': 'A JavaScript application that interacts with a RESTful API to CRUD data and dynamically render html objects to display data to the user.', 'gifSrc': 'https://giphy.com/embed/5hkLXvtyt408To5ONp', 'url': '', 'codeSrc': 'https://github.com/kyla-joaquin/movies-application'},
        {'anchorTag': 'coffee', 'title': 'Coffee Project', 'description': 'A front end application that uses DOM manipulation and javascript to dynamically render items based on a search bar input.', 'gifSrc': 'https://giphy.com/embed/iOdUipuPOuDpgFaLfx', 'url': 'https://stuart-joaquin.github.io/coffee-project/', 'codeSrc': 'https://github.com/stuart-joaquin/coffee-project'},
        {'anchorTag': 'codeup', 'title': 'Codeup Design', 'description': 'Exposure to front-end web design and responsive design concepts for different screen sizes utilizing bootstrap framework technology.', 'gifSrc': 'https://giphy.com/embed/clofJvzgEU1YogbyHF', 'url': 'https://steven-joaquin.github.io/codeup-design/', 'codeSrc': 'https://github.com/steven-joaquin/codeup-design'}
    ];
    // {'anchorTag': 'weatherMaps', 'title': 'Weather Maps API', 'description': 'A javascript application that uses jQuery and AJAX requests to pull and render select data from a weather API.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': '', 'codeSrc': 'https://www.google.com/'},

    // function that builds the html and css classes for a single project object
    const renderProject = ({ anchorTag, title, description, gifSrc, url, codeSrc }) => {

            let html = `<hr id="${anchorTag}"><h3>${title}</h3><div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src="${gifSrc}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>`;

        if (url === '') {
            html += `<p>${description}</p><ul class="icons">`;
            html += `<li><a href="${codeSrc}" target="_blank" class="icon fa-code">`;
            html += `</a></li><li>View Source Code</li></ul><ul class="icons"><li>`;
            html += `<a href="#projectList" class="icon fa-list-ul"></a></li>`;
            html += `<li>Back to Project List</li></ul></div>`;
        } else {
            html += `<p>${description}</p><ul class="icons"><li><a href="${url}" target="_blank" class="icon fa-link">`;
            html += `</a></li><li>Go to Web App</li></ul><ul class="icons">`;
            html += `<li><a href="${codeSrc}" target="_blank" class="icon fa-code">`;
            html += `</a></li><li>View Source Code</li></ul><ul class="icons"><li>`;
            html += `<a href="#projectList" class="icon fa-list-ul"></a></li>`;
            html += `<li>Back to Project List</li></ul></div>`;
        } return html;
    };


    // function that builds the html and css for a single project list item for the nav links to projects
    const renderListItem = ({ anchorTag, title }) => {
      return `<div class="projectItem"><a href="#${anchorTag}">${title}</a></div>`;
    };

    // function that loops through the array of project objects to create a full list of project nav links
    const renderProjectList = projects => {
        let html = `<h2 class="major">Work</h2><div class="card"><h3 id="projectList">Project List</h3>`;
        for(let project of projects) {
            html += renderListItem(project);
        }
        return html;
    };

    // function that loops through the array of project objects to create all the project cards
    const renderProjects = projects => {
        let html = renderProjectList(projects);
        html += `</div>`;
        for(let project of projects) {
            html += renderProject(project);
        }
        return html;
    };

    projectPage.html(renderProjects(projects));

});