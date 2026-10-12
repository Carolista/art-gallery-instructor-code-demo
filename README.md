
# Art Gallery: An Instructor Code Demo

A new (2026) consolidated version of my art gallery code demo for students learning ReactJS/Vite and Java/Spring Boot/MySQL in LaunchCode's software development programs.

## Branch Flow

> [!NOTE]
> The `main` branch has the finished project and is not a starting point. Part 1 begins with creating a brand new ReactJS/Vite project, which you can do in a separate branch after forking and cloning—or you can start a separate repository altogether.

## Recommended order:

1. [Part 1 instructions](#unit-1-part-1) for creating the project -> `unit1-part1-solution-add-initial-content`
2. `unit-1-part2-starter-state` -> `unit-1-part2-solution-state`
3. `unit-1-part3-starter-forms` -> `unit-1-part3-solution-forms`
4. `unit-1-part4-starter-lifecycles` -> `unit-1-part4-solution-lifecycles`
5. `unit-1-part5-starter-routing` -> `unit-1-part5-solution-routing`

## Unit 1 Sequencing Notes

- The temporary `currentPage` state + prop drilling approach in Part 2 is intentional before routing is introduced in Part 5.
- Form handling is intentionally introduced in Part 3 before external data-fetching in Part 4.
- Loading and error handling with async fetch is intentionally covered together in Part 4.
- React Router is intentionally delayed until Part 5.

---

## Unit 1: Part 1

> There is no starter code for this part since creating the app is part of the demo! See [TODOs](#to-do) below.

### Focus

- Spinning up a new ReactJS/Vite app
- Removing boilerplate content to have a blank slate
- Creating some components for composing pages
- Adding temporary hard-coded content and structure with basic HTML
- Incorporating CSS & responsive layouts after content is in place
- Storing test data and passing data through props
- Looping over lists with `.map()` to produce repeated JSX

### TO DO

#### New App, Blank Slate

1. At the repository root, use `npm create vite@latest` to create a new ReactJS/Vite application.
   1. Give it a name, then select React, JavaScript, ESLint, and Yes.
   2. The project will be scaffolded, then `npm install` and `npm run dev` will automatically be run.
   3. You should now be able to open the starter app at `localhost:5173` (or something close to that if you already had another Vite project running).
   4. Open the project (not the entire repo) in VSCode.
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

> Time to create a feature branch! Branch off main with something like `git checkout -b part1-add-initial-content`.

#### Component Composition

1. Create a new folder, `src/components`.
2. Create a `Header` component and return JSX that places the name of the art gallery within a `<div>`, nested between semantic `<header>` tags.
3. Create a `Footer` component and return JSX that places a copyright statement within a `<div>`, nested between semantic `<footer>` tags. Use the HTML entity `&copy;` along with a JSX placeholder `{}` to place the variable holding the current year, calculated above with JavaScript. Then add your name.
4. In `App.js`, wrap your "Hello, World!" in a semantic `main` element and then place an instance of the `Header` component above and the `Footer` component below in the returned JSX, making sure to import them at the top. They should be visible in the browser.
5. Stage and commit your changes with git.

#### Styling

1. Install fonts
   1. In the terminal at the project root, run `npm install @fontsource/assistant @fontsource/kodchasan`.
   2. In `main.jsx`, add import statements for both fonts (example: `import '@fontsource/assistant';`).
2. Create a folder in `assets` called `images` and copy over the image called `white-installation.jpg`.
3. Copy over the CSS from `index.css` in my `unit1-part1-solution-add-initial-content` branch to `src/index.css`. (As long as `index.css` is still imported in `main.jsx`, it should be available to the entire application along with the fonts.)
4. In `Header.jsx` apply the 'mag' id to the div and then surround the word "Midtown" with the `<strong>` element.
5. In `App.jsx`, apply the `main-content` class to the `<main>` element using the attribute `className` (because `class` is a reserved keyword in JavaScript).
6. Apply additional `<div>`s, `id`s and `className`s where needed to make the layout work. Reference my solution as needed.
7. View the changes in the browser as you go with dev tools open.
8. Stage and commit your changes with git.

#### Mock Data

In order to put a collection of artworks on the page without fetching from an API yet, we need mock data.

1. Create a folder inside `src` called `mock-data`.
2. Create a file inside `mock-data` called `mockArtworks.js`.
3. Notice this is just `.js`!
   1. It's not `.jsx` because it's not a React component, it's just data.
   2. It's also not `.json`. It's okay to keep it simple with JavaScript for now; we will fetch JSON later.
4. Copy the mock data from my `unit1-part1-solution-add-initial-content` branch into `mockArtworks.js`, ensuring it is exported.
5. Stage and commit your changes with git.

#### Child Components & Props

1. Create a reusable `ArtworkCard` that accepts an `artwork` prop.
2. Write a function that will return a unique URL starting with the base of `http://i.ibb.co/` and concatening on the artwork's `imageId`.
3. Set up the returned JSX to display a single artwork image (using the concatenated URL as the `src`), the title, and the artist's name.
4. In `App.jsx`, inside the `<main>` element, it's finally time to replace "Hello, World!" Add an `<h1>` heading displaying the title "Artworks."
5. Just below the heading, create a `<div>` with the class `artwork-card-container`.
6. At the top of `App.jsx`, import the mockArtworks data.
7. Temporarily render 1 instance of the `ArtworkCard` component inside the artwork card container; for the `artwork` prop, pass in the object at index `0` from your data. You should see your card rendered on the page.
8. Stage and commit your changes with git.

#### Producing JSX by Mapping over Data

1. Create a constant called `allArtworks` that makes a true copy of `mockArtworks` using the spread operator. (Research this if you need to.)
2. Create a constant called `artworksJSX` inside the component function in `App.js`, and use `.map()` to traverse the `allArtworks` array of artwork objects and produce a single `ArtworkCard` instance for each one. Make sure to add a required `key` using the artwork's `id`.
3. Replace the single `ArtworkCard` inside `<main>` with `artworksJSX` instead, using a JSX placeholder `{}`.
4. You should now see the page fill with cards for multiple artworks in the browser.
5. Stage and commit your changes with git.

#### Handling Empty/Missing Data

1. Use ternary-style conditional rendering within the JSX to display a message if the array is empty or the list of cards if it isn't.
2. Test it on the UI by temporarily changing `allArtworks` to hold an empty array.

#### Testing Responsive Design

1. You should see a number of media queries in the CSS you copied from my solution. These, along with CSS functions like `clamp()`, help control what the content on the page looks like at different screen widths.
2. Use browser dev tools to test the page on different devices, and do a little of your own experimentation by resizing your browser window manually.

> Use the `unit1-part1-solution-add-initial-content` branch to check my solution.

Jump to: [Top](#react-demo-art-gallery-website)
[Part 1](#unit-1-part-1) | [Part 2](#unit-1-part-2) | [Part 3](#unit-1-part-3) | [Part 4](#unit-1-part-4) | [Part 5](#unit-1-part-5)
<!-- Add unit 2 later -->

---

## Unit 1: Part 2

> Use the `part2-starter-state` branch to get started.

### Focus

- Implementing conditional rendering within JSX with ternary operators (`?` and `:`) and logical AND operator (`&&`)
- Utilizing the `useState()` hook for state variables that will trigger re-rendering if their values change
- Lifting state to parent components
- Passing event handlers with props

> Use the `part2-solution-state` branch to check my solution.

Jump to: [Top](#react-demo-art-gallery-website)
[Part 1](#unit-1-part-1) | [Part 2](#unit-1-part-2) | [Part 3](#unit-1-part-3) | [Part 4](#unit-1-part-4) | [Part 5](#unit-1-part-5)
<!-- Add unit 2 later -->

---

## Unit 1: Part 3

> Use the `part3-starter-forms` branch to get started.

### Focus

- Managing controlled form data with React state
- Utilizing dynamic handlers for multiple inputs
- Performing basic client-side validation

> Use the `part3-solution-forms` branch to check my solution.

Jump to: [Top](#react-demo-art-gallery-website)
[Part 1](#unit-1-part-1) | [Part 2](#unit-1-part-2) | [Part 3](#unit-1-part-3) | [Part 4](#unit-1-part-4) | [Part 5](#unit-1-part-5)
<!-- Add unit 2 later -->

---

## Unit 1: Part 4

> Use the `part4-starter-lifecycles` branch to get started.

### Focus

- Fetching data from an external API with modern `async`/`await` syntax
- Tapping into component lifecycles with the `useEffect()` hook
- Managing loading state and race conditions during asynchronous requests
- Handling errors with `try`/`catch`/`finally`
- Hooking into the DOM with the `useRef()` hook

> Use the `part4-solution-lifecycles` branch to check my solution.

Jump to: [Top](#react-demo-art-gallery-website)
[Part 1](#unit-1-part-1) | [Part 2](#unit-1-part-2) | [Part 3](#unit-1-part-3) | [Part 4](#unit-1-part-4) | [Part 5](#unit-1-part-5)
<!-- Add unit 2 later -->

---

## Unit 1: Part 5

> Use the `part5-starter-routing` branch to get started.

#### Focus

- Adding the React Router dependency
- Setting routes to define URLs and correlate components
- Implementing dynamic routing with path parameters and the `useParams()` hook
- Incorporating the `<Link>` component for sending users to other components based on routes
- Leveraging the `useNavigate()` hook for re-routing from a component (without the user clicking a link)

> Use the `part5-solution-routing` branch to check my solution.
