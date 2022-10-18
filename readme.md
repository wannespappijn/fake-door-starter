# Github Deploy

- [ ] Deploy this project to [Netlify](https://www.netlify.com/). (You can opt for other hosting services, such as [Vercel](https://vercel.com), [Cloudflare](https://pages.cloudflare.com) or even [GitHub pages](https://pages.github.com))
  - [ ] Log in or create an account
  - [ ] Add a new site (Import an existing project)
  - [ ] Connect to a Git provider (GitHub in our case)
  - [ ] Select your project
  - [ ] Use the main branch to deploy, build settings are not applicable for us at this moment
  - [ ] Click deploy and see what happens
  - [ ] Have a look at your live, production site
  - [ ] Change the name of your site to something more meaningful. (Settings, General, Site information, Change site name)
- [ ] Make the page a bit more attractive by adding a background image.
  - [ ] Pick something from unsplash
  - [ ] use it as a background image
  - [ ] give credits to the photographer at the bottom of the page
  - [ ] Don't bother resizing the image for now, no time for that, we need to deploy this now!
- [ ] Commit the changes and push them to GitHub
- [ ] Check Netlify, a new version should be deployed automatically
- [ ] Create a new branch called "develop" (as we should have done from the start)
  - [ ] You can push this to GitHub as well, but it's not necessary
- [ ] Make the background image responsive since a user have to download a file that is waaaay to large now.
  - [ ] Create different size versions of the photograph
  - [ ] Use media queries to load a different image for different screen sizes
- [ ] Deploy this new version
  - [ ] Merge the develop branch into the main branch
  - [ ] Push the main branch to GitHub
- [ ] Feel free to make some more edits to the page en repeat the build process.

## Packages

Let us show some confetti on the page when the user submits the form. We will use a package for this. [js-confetti](https://www.npmjs.com/package/js-confetti)

- Initialize the project with npm and install the package.
- Import the package in your script file, we will have to use the full path to the package.
  `import JSConfetti from '../node_modules/js-confetti/dist/es/index.js';`
- Now you can further implement the package according to the documentation.

We will change this workflow in the following weeks. A module bundler will let us import a package like this: `import JSConfetti from 'js-confetti';`
