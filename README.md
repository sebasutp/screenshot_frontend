# Instructions

Make sure to change the .env file to point to the right
backend. Then run the frontend using in development mode
using:

```
  npm install
  npm run dev
```

## Deploy Instructions

Create the dist folder using:

```
npm run build
```

Then copy the contents of the folder to the web server.
You might need to instruct your web server to try index.html
when the path does not exist physically, since this app uses
routes and some paths are handled by react. For example, in
NGINX, you could use this configuration:

```
try_files $uri $uri/ /screenshot/index.html =404;
```

If you want to copy the folder as a subfolder, called for
example `/screenshot_app`, you also need
to make the following two changes:
* For the static paths, edit `vite.config.js` like this:
```
export default defineConfig({
  plugins: [react()],
  base: '/screenshot_app/',
})
```
* For the actual app, edit `main.jsx` like this:
```
<BrowserRouter basename="/screenshot_app/">
  <App />
</BrowserRouter>
```