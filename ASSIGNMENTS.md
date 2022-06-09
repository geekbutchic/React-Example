* Create a new github repo called reactexample, clone the repo to your computer and add the link to populi = ✅


* cd into the local repo folder, /reactexample, and run 'npx create-react-app ." inside of it. 
    * If you see the message "Need to install the following packages: create-react-app" enter "y"
    * If the terminal tells you to run "npm uninstall -g create-react-app" run the following two commands:
        * sudo npm uninstall -g create-react-app
        * npx clear-npx-cache
    * If you did it right, you should see npm installing packages and then finally the message "happy hacking"
* Check that React installed properly by running 'npm start' in the folder and navigating to localhost:3000. You should see the basic react page = ✅


* Write a new React component called MyInfoComponent, add three variables inside the component for your name, favoriteColor and favoriteMovies which should be an array of 3 movie titles and display them in the component JSX = ✅


* Add this new component to the JSX of <App> to see your component render to the page = ✅

//=========================== PART 2 ======================================
* Move the three variables you just created into the MyInfoComponent state via the React useState hook. The three state variables should still display on the page = ✅

* Add two text input fields to the page. ✅

* Add an onChange handler function to each text input field, one for changing name and one for changing favoriteColor. ✅


* Connect the setter function from React's useState hook to the event.target.value of the text input field. If you did it right, the state variables displayed to the page should update in real time as you type. ✅


* Add three additional text input fields to the page, each input field should update a specific index in the favoriteMovies array with a new movie title (not the way we'll do it in the future, but the easiest way for now). ✅




* Hint: Another way of doing this would be to have two input fields, a number input and a text input. 
* The number input would correspond to the index you're targeting and the text would be the new string value of the movie. ✅