# My React-App 

Deploying React App in GitHub Pages

## Install 
```
npm install gh-pages --save-dev
```
## Update package.json
* Add `homepage` at the top
	```
	"homepage":"http://<username>.github.io/<repoName>",
	```
* Updated `scripts`
	```
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build",
	```
