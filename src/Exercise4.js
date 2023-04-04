//Use State hook to manage style of heading and slogan. Heading should be Maroon, slogan should be italic
import { useState } from "react";

const Header = (props) => {
    const [theme , setTheme] = useState({name : 'light',style : {backgroundColor: 'White'}});

    //Click handler
    function themeHandler(){
        //If theme is dark, then switch to light theme
        if(theme.name === 'dark'){
            setTheme({name : 'light',style : {backgroundColor: 'White'}});
        }
        else if(theme.name === 'light'){
            setTheme({name : 'dark',style : {backgroundColor: 'grey'}});
        }
    }

    return(
        <div style={theme.style}>
            <p>Welcome to Baham, an in-campus ride sharing service</p>
            <button id="themeButton" onClick={themeHandler}>Switch Theme</button>
        </div>
    )
} 

const Exercise4 = () => {
    return(
        <Header heading = "Welcome to Baham!" slogan = "Reducing your carbon footprint..."></Header>
    )
} 
export default Exercise4;