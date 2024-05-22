visit link for for how to create react tailwind starter pack  
https://tailwindcss.com/docs/guides/create-react-app

npm i axios <br />

then, delete App.js and App.css files.
create App.jsx
in index.js add below line (so that App.jsx is linked)
import App from './App.jsx';  //previosly (before deleting App.js & App.css) it was import './App'; 

code for ur app

npm run build <br />

git init <br />
git add . <br />
git commit -m "first commit" <br />
git branch -M main <br />
git remote add origin https://github.com/snowden7not/gif.git <br />
git push -u origin main <br />

i had hosted it on render. <br/>

#EXTRAS: for hosting on github pages :-
#for hosting visit below link  
#https://create-react-app.dev/docs/deployment/#github-pages

#in package.json file add below line
#"homepage": "https://snowden7not.github.io/gif",

#npm install --save gh-pages <br />

#in scripts of package.json file add below line
#"predeploy": "npm run build",
#"deploy": "gh-pages -d build",

#npm run deploy <br />

#(Note: if u ever want to change ui . change in code of gh-pages branch (NOT main branch), as change in main branch get stored, but not get hosted )

#refresh ur github page website . u will see ,ur website is hosted.`<br/>
