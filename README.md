# handmade.chrome_extension_template

A complete Chrome Extension template project that utilises

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

---

## Setup

Once cloned, this project should be nice and easy to get running.

From the root of the project run

```
npm install
```

Once complete

```
npm run build
```

You should see a `dist` folder at the root of the project. This comprises the bundled code, transpiled from TypeScript to Vanilla JavaScript via Vite. This is what Chrome is going to use to build the extension.

[!CAUTION]
All code written should be within the `src` folder. You should never amend any code in the dist folder. Always rerun the build command after doing any code changes to update what is in `dist`.

---

## The Code

Assuming you are familiar with React, you should feel at home within the `src/react/components` folder where you will find `App.tsx` to get started with.

---

## How it works in conjunction with Chrome

All you have to do is open [chrome://extensions/](chrome://extensions/) in Chrome.

- Switch to 'Developer mode' if you are not already.
- Click 'Load unpacked', this will open a dialog where you need to navigate to this project, and then to the `dist` folder.
- You should now see 'Chrome Extension Template' under 'All extensions'.
- Clicking the Extension Icon to the right of the url input displays a small popup 'Extensions'. You should be able to see 'Chrome Extension Template' added to the list.
- (Optional) click the pin iconm next to the name to have it pinned visibly next to the url input. This makes it more convenient to see the output moving forwards.
- Finally click the name in the list (or the icon if you have pinned it), and you should see the Template Output.

For a more comprehensive overview, with instructions as to how this was made, then please [check out this guide](https://medium.com/@jamesprivett29/02-building-a-chrome-extension-template-using-vite-react-and-typescript-d5d9912f1b40).

---

## More information

If you're interested in other things I have going on, [please checkout my website](https://www.handmadesoftware.dev/).
