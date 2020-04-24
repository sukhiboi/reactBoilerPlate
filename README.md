# Basic react Boilerplate

Pre-Installed dependencies
* axios - for web request / api calls
* env-cmd - for using environment variables (in development version only)
* react-router-dom - for react based routing (default route is already created)

### Notes

There is a .env file, just write you react environment variable (with prefix "REACT_APP_") and use them in you app. You can only use these environment variable in development version.abs

A basic route is already created for the / page.

Launch app in development version - npm run dev

# Heroku Deploy setup

1. Go to your heroku's app dashboard  
2. Go to setting  
3. Go to buildpack section  
4. Remove nodejs build pack  
5. Click on "Add Buildpack"  
6. Type this url in the text box "*https://github.com/mars/create-react-app-buildpack*"  
7. Press enter  

THAT'S ALL, NOW DEPLOY YOUR APP AND IT WORK PROPERLY ON HEROKU