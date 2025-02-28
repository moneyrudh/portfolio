# ani's portfolio

minimalist portfolio site built with next.js and tailwind css.

## setup

```bash
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build

# start production server
npm start
```

## structure

```
portfolio/
├── public/
│   ├── profile-picture.jpg   # your profile image
│   └── favicon.ico           # browser tab icon
├── src/
│   ├── components/
│   │   ├── Header.js         # name and contact info
│   │   ├── Summary.js        # brief about me section
│   │   ├── Projects.js       # portfolio projects
│   │   ├── Experience.js     # work history
│   │   └── Skills.js         # technical skills
│   ├── pages/
│   │   ├── _app.js           # next.js app wrapper
│   │   └── index.js          # main page layout
│   ├── styles/
│   │   └── globals.css       # global styles with noise texture
│   └── utils/
│       └── fonts.js          # typewriter font setup
└── tailwind.config.js        # theme customization
```

## customization

- update your personal details in the component files
- replace `profile-picture.jpg` with your own image
- tweak maroon color shades in `tailwind.config.js`
- adjust noise texture in `globals.css`

## tech

- next.js
- tailwind css
- courier prime typewriter font
- maroon color palette with noise texture

## contact

ani@moneyrudh.dev