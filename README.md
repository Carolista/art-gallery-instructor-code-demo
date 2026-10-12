# Art Gallery: An Instructor Code Demo
A new (2026) consolidated version of my art gallery code demo for students learning ReactJS/Vite and Java/Spring Boot/MySQL in LaunchCode's software development programs.

## Branch Flow

> [!NOTE]
> The `main` branch has the finished project and is not a starting point. Part 1 begins with creating a brand new ReactJS/Vite project, which you can do in a separate branch after forking and cloning or you can start a separate repository altogether.

### Recommended order:

1. [Part 1 instructions]() for creating the project -> `part1-solution-basics`
2. `part2-starter-state` -> `part2-solution-state`
3. `part3-starter-forms` -> `part3-solution-forms`
4. `part4-starter-lifecycles` -> `part4-solution-lifecycles`
5. `part5-starter-routing` -> `part5-solution-routing`

### Sequencing Notes

- The temporary `currentPage` state + prop drilling approach in Part 2 is intentional before routing is introduced in Part 5.
- Form handling is intentionally introduced in Part 3 before external data-fetching in Part 4.
- Loading and error handling with async fetch is intentionally covered together in Part 4.
- React Router is intentionally delayed until Part 5.

---

## Part 1

> There is no starter code for this part since creating the app is part of the demo! See [TODOs](#to-do) below.

### Focus

- Spinning up a new ReactJS/Vite app
- Removing boilerplate content to have a blank slate
- Creating some components for composing pages
- Adding temporary hard-coded content and structure with basic HTML
- Incorporating CSS & responsive layouts after content is in place
- Looping over lists with `.map()` to produce repeated JSX
- Storing test data and passing data through props

### TO DO

#### New App, Blank Slate

1. Use `npm create vite@latest` to create a new ReactJS/Vite application. 
   1. Give it a name, then select React, JavaScript, ESLint, and Yes. 
   2. The project will be scaffolded, then `npm install` and `npm run dev` will automatically be run.
   3. You should now be able to open the starter app at `localhost:5173` (or something close to that if you already had another Vite project running).
2. To prepare for adding your own content, completely remove the example content as follows: 
   1. Completely clear out all code in `index.css` and `App.css`.
   2. In `App.jsx`, edit the following:
      1. Replace all content between `<>` and `</>` in the returned JSX with "Hello, World!"
      2. Remove the line declaring the state variables `count` and `setCount`.
      3. Remove the import statement for `useState` and the three import statements for the images.
   3. Delete all SVG and PNG files in `/public` and `/src/assets`. 
   4. In `index.html`, make the following two changes:
      1. Change the name of the app in the `<title>` to `Midtown Art Gallery` (or a name of your choosing)
      2. Comment out the line linking `favicon.svg` until you are ready to add your own in `public` and reference it instead.
3. Make your first `git commit` with a message like "spun up ReactJS/Vite project and removed boilerplate content".

#### Component Composition

1. Create a new folder, `src/components`.
1. Create a `Header` component and return JSX that places the name of the art gallery within a `<div>`, nested between `<header>` tags.
1. Create a `Footer` component and return JSX that places a copyright statement within a `<div>`, nested between `<footer>` tags. Use a JSX placeholder `{}` to place the current year, calculated above with JavaScript.
1. In `App.js`, place an instance of the `Header` and `Footer` components in the returned JSX, making sure to import them at the top. They should be visible in the browser.

#### Styling

1. Copy over the global CSS from my `part1-solution-basics` branch to `src/index.css`. (As long as `index.css` is still imported in `main.jsx`, it should be available to the entire application.)
1. Apply `<div>`s, ids and classes where needed to make the layout work.
1. View the changes in the browser as you go.

#### Child Components & Props

1. Copy the test data from my `part1-solution-basics` branch (list of artworks as JS objects) at `src/test-data/mockArtworks.js` (create the folder first), then import it into `App.js`.
1. Create a reusable `Card` component that uses CSS classes to produce a `<div>` containing the content passed through the `children` prop.
1. Create a second reusable `ArtworkCard` that accepts an `artwork` prop. Set it up to display a single artwork image, the title, and the artist's name. This should use of the `Card` component as a container.
1. Between the header and footer components in `App.js`, add a `<main>` element. Add an `<h1>` heading displaying the title "Artworks."
1. Temporarily render 1 instance of the `ArtworkCard` component within `<main>` and pass in the object at index `0` from your data. You should see your card rendered on the page.

#### Producing JSX by Mapping over Data

1. Create a variable called `artworksJSX` inside the component function in `App.js`, and use `.map()` to traverse the array of artwork objects and produce a single `ArtworkCard` instance for each one. Make sure to add a required `key` using the artwork `id`.
1. Replace the single `ArtworkCard` inside `<main>` with `artworksJSX` instead, using a JSX placeholder `{}`.
1. You should now see the page fill with cards for multiple artworks in the browser.

#### Testing Responsive Design

1. You should see a number of media queries in the CSS from my solution. These, along with CSS functions like `clamp()`, help control what the content on the page looks like at different screen widths.
1. Use browser dev tools to test the page on different devices, and do a little of your own experimentation by resizing your browser window manually.

#### One Last Reusable Component

1. If you look at the bottom of the cards displaying on the page, notice the padding is a little uneven. This has to do with the way the specific content affects the padding with its own margins. We need to add a little extra space below the artist's name in the `ArtworkCard` component where the specific issue occurs, but we don't want to change the padding of `Card` or the bottom margin of `<h4>` in `ArtworkCard`.
1. Create a new reusable component called `Spacer` that accepts `marginX` and `marginY` props and applies it to a `<div>` using inline CSS. Make sure if either of the props is not used, the corresponding margin setting has a default value of `0` instead.
1. This component can now be used anywhere in the app to provide an adjustment horizontally or vertically. (You could even provide for a character to be used between other content for inline spacing, as I've done in my solution.)
1. Insert an instance of the `Spacer` component below the title & artist section in `ArtworkCard`, and experiment with the vertical margin value you pass in as a prop until it looks balanced visually in the UI.

> Use the `part1-solution-basics` branch to check my solution.
