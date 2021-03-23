# My React-App 

## Deploying React App in GitHub Pages


### Install 
```
npm install gh-pages --save-dev
```
### Update package.json
* Add `homepage` at the top
	```
	"homepage":"http://<username>.github.io/<repoName>",
	```
* Updated `scripts`
	```
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build",
	```
## Colors

|Color|Hex Code|
|---|---|
|Yellow|#f1c50e|
|Black|#111111|
|Grey|#808080|
|Slate Black|#1a1a1a|
|Dull Yellow|#f9ed69|
|Dull Peach|#f08a5d|
|Dull Pink|#b83b5e|
|Dull Violet|#6a2c70|

