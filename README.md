# Movie-App

A modern Movies website built with **Next.js**, **Tailwind CSS**, and **TypeScript**.

## Features

- 📱 **Responsive Design**: Optimized for all screen sizes.
- 🔍 **Search**: Quickly find movies by title.
- 🔎 **Filtering**: Refine results based on criteria.
- 🎭 **Genre**: Browse movies by genres.
- ❤️ **Favourites**: Save your favorite movies for easy access.


<p align="center">
<img src="https://raw.githubusercontent.com/omept/movies-app/main/src/assets/Capture.PNG">



<p align="center">
<img src="https://raw.githubusercontent.com/omept/movies-app/main/src/assets/Capture2.PNG">



<p align="center">
<img src="https://raw.githubusercontent.com/omept/movies-app/main/src/assets/Capture3.PNG">




## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app

```

2. Install dependencies
```bash
   npm install

```

3. Setup ENV
Create a .env file in the main dir  and add -

```bash
NEXT_URL=http://localhost:3000/ [Next local Address]

TMDB_API_KEY=[Your TMDB key]
NEXT_PUBLIC_TMDB_API_KEY=[Your TMDB key]

TMDB_READ_ACCESS_KEY=[Your Access Key]
NEXT_PUBLIC_TMDB_READ_ACCESS_KEY=[Your Access Key]
```

4. Start development server
```bash
   npm run dev
```

5. Open browser and navigate to
```
   http://localhost:3000
```


----------------------------------------------------------------
# Design Decisions and Trade-Offs

## Next.js for SSR and Static Generation:
Decision: Chosen for its ability to render pages on the server or at build time, improving SEO and initial load times.
Trade-Off: Increased complexity compared to client-side rendering frameworks like CRA, but the benefits for SEO and performance outweigh this.

## Tailwind CSS for Styling:
Decision: Tailwind CSS was selected for its utility-first approach, enabling faster styling and consistent design.
Trade-Off: A learning curve for developers unfamiliar with utility classes, but this is mitigated by its comprehensive documentation and IntelliSense support.

## TypeScript for Static Typing:
Decision: Used to ensure type safety, reduce runtime errors, and improve developer productivity.
Trade-Off: Slightly longer development time due to type definitions, but it enhances code maintainability and reduces bugs.

## LocalStorage for Favourites:
Decision: Implemented for simplicity and ease of use without needing a backend.
Trade-Off: Limits persistence to the user's browser and may not sync across devices.

## Minimal Backend Integration:
Decision: Relied on public APIs to reduce backend complexity and focus on the frontend experience.
Trade-Off: Limited control over API data and possible rate limiting, but it simplifies the project setup and reduces infrastructure costs.