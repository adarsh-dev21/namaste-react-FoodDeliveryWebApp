# Namaste React

# Episode-11 - Part-01 -- Higher Order Components (Promoted/Open Tag Feature on Restaurant Card)
# Episode-11 - Part-02 -- Restaurant Menu (Show Accordion Feature) / Controlled/Un-Controlled Components
# Episode-11 - Part-03 -- Restaurant Menu (Show Accordion collapsing Feature on selecting 1 accordion, rest should collapse)
# Episode-11 - Part-04 --Props drilling => React Context(useContext)


# Episode-12 - When we click on Add button, it dispatches an action which calls the reducer function which updates the slice of our redux store. (This is for writing data to slice inside a redux store)

# Episode-12 - We will use selector to read the data from our cart slice store, and this selector will modify our react cart component. This whole process is known as subscribing to the store. (This is for reading data from slice inside a redux store)



Parcel
Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles
Namaste Food
/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */


Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";



React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()


2 types Routing in web apps
Client Side Routing
Server Side Routing


Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector


Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom