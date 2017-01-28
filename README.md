# Order Processing System using Angular2
Order Processing sample application developed in Angular2. This application uses typescrip.
![Screenshot](/.github/screenshot.png)

# Downloading and installing node.js
As you know node.js and npm are the engines that work behind the scenes that allow us to operate gulp and keep track of any plugins we decide to use. For Mac and Windows, the installation is quite simple. All you need to do is navigate over to [http://nodejs.org](http://nodejs.org) and click on the big green INSTALL button. Once the installer has finished downloading, run the application and it will install both node.js and npm.

# Before you begin
Download all the packages using following commands before you start
>npm update

# Run Application
Use following start node server as well as compile all Typescript files to JavaScript
>npm start

# Issues & Solutions
If you get following error, then it means that 3001(default) port is already used. You can change the port number from "_\node_modules\lite-server\lib\config-defaults.js_" file

```javascript
  ui: {
    port: 8080
  }
```

# License
The sample application is licensed under the [MIT](https://opensource.org/licenses/MIT) license.