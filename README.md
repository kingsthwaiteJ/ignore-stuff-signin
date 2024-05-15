<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Chat Application</h3>

  <p align="center">
    A basic Google Chrome Extension to hide the sign-in prompt that blocks page content when accessing Stuff Quizzes.
    <br />
    <a href="https://github.com/kingsthwaiteJ/ignore-stuff-signin/issues">Report Bug</a>
    ·
    <a href="https://github.com/kingsthwaiteJ/ignore-stuff-signin/issues">Request Feature</a>
  </p>

  [![Version][version-shield]][version-url]
  [![Issues][issues-shield]][issues-url]
  [![Contributors][contributors-shield]][contributors-url]
  [![Stargazers][stars-shield]][stars-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#built-it-yourself">Built it yourself</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

I love doing quizzes, puzzles and all-things problem-solving. I've really 
enjoyed the Stuff Quizzes for a long time and will continue to do so. In
a recent update to the stuff.co.nz website, access to the quizzes was blocked 
by a sign-in prompt, which I found to be a nuisance as a user without an
account.

After a quick examination of the sign-in prompt HTML, I was able to identify
that it's possible to hide the sign-in prompt by hiding a few HTML elements.
I also noticed that there was no Javascript running in the background that
prevented this, and that the entire page content (including the quiz pane) 
was loaded on the initial page-load. I immediately determined that these
quick few steps to hide the sign-in prompt would become increasingly tedious
each time I visited the site to complete a quiz, which lead to me create this
simple Google Chrome Extension that does these actions for you. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Follow these instructions to set up the extension set up on your machine.

### Build it yourself

1. Clone the repo
   ```
   git clone https://github.com/kingsthwaiteJ/ignore-stuff-signin.git
   ```
2. Open the "Extensions" settings in your browser.
3. Enable "Developer Mode"
4. Select "Load Unpacked"
5. Navigate to the location that this folder is stored, and select the folder.
6. The extension will be loaded in and configured automatically.
7. Open [Stuff](https://www.stuff.co.nz), and navigate to the quizzes page.
8. Click the extension icon in your browser to hide the sign-in prompt whenever it appears.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After this extension has been added to Google Chrome, there is no further set up required. Whenever you open a stuff.co.nz web-page with a sign-in prompt blocking the page content, click on the extension icon from your extensions bar and the sign-in prompt will disappear.

<br/>
<div align="center">
  <a href="https://www.buymeacoffee.com/kingsthwaiteJ" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kingsthwaiteJ/ignore-stuff-signin?style=for-the-badge
[contributors-url]: https://github.com/kingsthwaiteJ/ignore-stuff-signin/graphs/contributors
[version-shield]: https://img.shields.io/github/package-json/v/kingsthwaiteJ/ignore-stuff-signin?style=for-the-badge
[version-url]: https://github.com/kingsthwaiteJ/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/kingsthwaiteJ/ignore-stuff-signin?style=for-the-badge
[stars-url]: https://github.com/kingsthwaiteJ/ignore-stuff-signin/stargazers
[issues-shield]: https://img.shields.io/github/issues/kingsthwaiteJ/ignore-stuff-signin?style=for-the-badge
[issues-url]: https://github.com/kingsthwaiteJ/ignore-stuff-signin/issues
[license-shield]: https://img.shields.io/github/license/kingsthwaiteJ/ignore-stuff-signin?style=for-the-badge
[license-url]: https://github.com/kingsthwaiteJ/ignore-stuff-signin/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kingsthwaiteJ