# React Infinite scroll

- Infinite scroll is a optimization technique that uses `lazy loading` and executes its demand to load more data (products or contents) at the bottom of the page, without requiring an action such as click on a button.
- On-demand loading is used to optimize content delivery by reducing time consumption and memory usage. Since only a fraction of the web page is loaded first, the time taken is less and the loading of the rest of the content is delayed, saving storage.

1. Listens to `windows.scroll` event to determine if user has scrolled to the end.
2. If user has scrolled to the bottom, perform the next se of actions like API call or updating the state. 

- `window.innerHeight` : Height of users browsers window 
- `window.scrollY` : Vertical scroll position of doc
- ` window.document.body.offsetHeight` : Total height of doc body.

## Methods of implementing infinite scroll
1. Building entire implmentation from scratch.
2. Utlizing an exisiting infinite scroll library or component. Eg, `react-infinite-scroll-component`
3. Intersection observer API
