// header.js
document.addEventListener("DOMContentLoaded", function () {
    const header = `
        <header>
            <h1>Mechanical Engineering Portfolio</h1>
            <nav>
                <a href="index.html">Home</a> |
                <a href="about.html">About</a> |
                <a href="projects.html">Projects</a> |
                <a href="resume.html">Resume</a> |
                <a href="contact.html">Contact</a>
            </nav>
            <hr>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);
});
