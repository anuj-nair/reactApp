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

|Color|Hex Code|Percentage|
|---|---|---|
|Yellow|#f9ed69|40%|
|Peach|#f08a5d|30%|
|Pink|#b83b5e|20%|
|Violet|#6a2c70|10%|

