
Project Name: Dev Stack Builder

Description: Dev Stack Builder is a responsive React application for exploring development technologies and creating a focused personal stack. Users can compare tools, review their categories and difficulty levels, and save the technologies they want to use in one simple workspace.

Technology Used:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- Local JSON data

Main Features:

1. Technology explorer** - Browse 12 curated technologies with icons, descriptions, categories, ratings, badges, and difficulty levels.
2. Personal stack builder** - Add technologies to a stack, prevent duplicates, remove individual items, or clear the complete stack.
3. Responsive project UI** - Use the sticky navigation, hero banner, mobile menu, responsive technology grid, loading states, and notification feedback across screen sizes.

 Project Structure:

```text
src/
  assets/              Supplied logo and hero images
  components/          Navbar, hero, technology, stack, about, and footer UI
  data/                Local technology JSON data
  types/               Shared TypeScript interfaces
  App.tsx              Application state and component composition
```

Getting Started:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

React Questions and Answers:

1. What is JSX, and why is it used in React?

=> JSX is a syntax that lets us write HTML-like markup inside JavaScript or TypeScript. React uses it to describe the UI close to the logic that controls it, which makes components easier to read and build.

2. What is the difference between props and state?

==> Props are values passed into a component by its parent. State is data managed by the component itself and can change over time, causing the UI to update.

3. What does the `useState` hook do, and where did you use it in this project?

=> `useState` creates a value and a function for updating that value in a function component. This project uses it in `App.tsx` for the selected technology stack, and in the navigation and technology grid for their local UI states.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

 => `useEffect` runs side-effect code after a component renders. `TechnologyGrid` uses it to place the local JSON technology records into component state and to finish the loading state after the data is ready.

5. Why does every item in a `.map()` list need a unique `key` prop?

 =>The `key` helps React identify each list item between renders. A unique key lets React update only the items that changed instead of rebuilding the entire list.

6. What is conditional rendering? Show one place you used it.

 => Conditional rendering means showing different UI depending on a condition. In `StackPanel`, the empty-stack message is shown when `selected.length === 0`; otherwise, the selected technology items are rendered.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

 => A parent passes data and callback functions to a child through props. In this project, `App` passes the selected technologies and event handlers to `TechnologyGrid` and `StackPanel`. The child calls those callback props when a user adds or removes a technology, sending the event back to `App`.
