"use strict";

$(document).ready(function() {


    let projectPage = $('#workContent');

    const projects = [
        {'anchorTag': 'curiosities', 'title': "Cody's Curiosities", 'description': 'A craigslist - type java application that use jsp files, servlets, and DAOs (data access objects) to allow users to create, read, update, and delete ads from a MySQL database. ', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'},
        {'anchorTag': 'contactsManager', 'title': 'Contacts Manager', 'description': 'A java application that uses conditional logic and loops to temporarily store data and respond to user input.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'},
        {'anchorTag': 'moviesApp', 'title': 'Movies Application', 'description': 'A java application that uses recursive methods, loops, and JSON files to CRUD data.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'},
        {'anchorTag': 'weatherMaps', 'title': 'Weather Maps API', 'description': 'A javascript application that uses jQuery and AJAX requests to pull and render select data from a weather API.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'},
        {'anchorTag': 'coffee', 'title': 'Coffee Project', 'description': 'A front end application that uses DOM manipulation and javascript to dynamically render items based on a search bar input.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'},
        {'anchorTag': 'codeup', 'title': 'Codeup Design', 'description': 'Exposure to front-end web design and responsive design concepts for different screen sizes utilizing bootstrap framework technology.', 'gifSrc': 'https://giphy.com/embed/2YjYpOl1eBy6I', 'url': 'https://www.google.com/', 'codeSrc': 'https://www.google.com/'}
    ];
// Working ES5
    // function renderProject(project) {
    //     let html = '<div class="coffee my-3 col-6 d-inline-block">';
    //     html += '<h3 class="d-inline mr-2">' + project.name + '</h3>';
    //     html += '<p class="d-inline text-white">' + project.roast + '</p>';
    //     html += '</div>';
    //
    //     return html;
    // }
//
// Attempt at ES6
    const renderProject = ({ anchorTag, title, description, gifSrc, url, codeSrc }) => {
        let html = `<hr id="${anchorTag}"><h3>${title}</h3><div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="${gifSrc}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>`;
        html += `<p>${description}</p><ul class="icons"><li><a href="${url}" target="_blank" class="icon fa-link">`;
        html += `<span class="label">Github</span></a></li><li>Go to Web App</li></ul><ul class="icons">`;
        html += `<li><a href="${codeSrc}" target="_blank" class="icon fa-code"><span class="label">GitHub</span>`;
        html += `</a></li><li>View Source Code</li></ul><ul class="icons"><li>`;
        html += `<a href="#projectList" class="icon fa-list-ul"><span class="label">GitHub</span></a></li>`;
        html += `<li>Back to Project List</li></ul></div>`;
        return html;
    };

    const renderListItem = ({ anchorTag, title }) => {
      return `<div class="projectItem"><a href="#${anchorTag}">${title}</a></div>`;
    };

    const renderProjectList = projects => {
        let html = `<h2 class="major">Work</h2><div class="card"><h3 id="projectList">Project List</h3>`;
        for(let project of projects) {
            html += renderListItem(project);
        }
        return html;
    };

    // <div class="projectItem"><a href="#coffee">Movies Application</a></div>
    // <div class="projectItem"><a href="#coffee">Weather Maps API</a></div>
    // <div class="projectItem"><a href="#coffee">Coffee Project</a></div>
    // <div class="projectItem"><a href="#coffee">Codeup Design</a></div>


// Working ES5
//     function renderProjects(projects) {
//         let html = '';
//         for(let i = 0; i < projects.length; i++) {
//             html += renderProject(projects[i]);
//         }
//         return html;
//     }

// Attempt at ES6
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