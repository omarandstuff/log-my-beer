# Log My Beer
[ ![Codeship Status for omarandstuff/log-my-beer](https://app.codeship.com/projects/f9cc7fd0-ec7a-0135-9688-6eaa099eb415/status?branch=master)](https://app.codeship.com/projects/270328)

> Description
  As a user I want to be able to log my beer at any time.
  At the index page the app should list the beers with the tiny image and brief description(optional)
  in the main page should display the list of beers you've drank, 
  each beer listed on the index page should display the gran total per beer
  e.g: If the user has had drunk 3 different beers it should display the 3 images corresponding 
  to each of them. 

| <img src="https://cl.ly/3Z1f2f0i3Z3r/Screen%20Shot%202018-02-02%20at%205.48.41%20PM.png" width="100"/> |
| ---------                                                                                              |
| 10                                                                                                     |

| <img src="https://cl.ly/0F19183H0q2n/Image%202018-02-02%20at%205.50.11%20PM.png" width="100"/> |
| ---------                                                                                      |
| 5                                                                                              |

| <img src="https://cl.ly/0e433B310G1Y/Screen%20Shot%202018-02-02%20at%205.57.26%20PM.png" width="100"/> |
| ---------                                                                                              |
| 1

Implementation: 
2 sections:
- Index page described obove
- Page to Log a beer

Log my beer Page: 
Should display a `dropdown` of beers to `select` which beer I want to log
and an input field read only with the default value 1. and there should be 2 extra buttons to increment or decrement the quantity of beers.
with the labels `+` and `-`.
And a button with the label "Log my beer"

```javascript
<dropdown>:beer:</dropdown> <input>+</input><input>-</input> <button>Log My Beer</button>
```
After log a beer we should see a confirmation message 'You Beer has been added succesfully :beer: ' with 2 buttons 
`Go to` Home and `Add more`
:+1:

When the user clicks on the `Go to Home` it should be taken to the Main app path
And when he clicks on the Add more We should render the Form to log more Beers 

>Final notes: 
>*Only the actions can change the state of the app that includes to the pages Log a beer and main*

---
- Implement:
     - React
     - Redux
       - Actions
       - Reducers
       - Containers
- File structure(organization)
And the most important:
- Most Important Part
   - **Unitesting for actions, reducers**
---

