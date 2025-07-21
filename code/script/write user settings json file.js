/* function 
"handlesearch" 
function handleSearch() {
    // pull a handlesearch function to var. 
    const SearchInput = document.getElementById('emailInput');

const fs = require('fs');

const settings = {
    "name": "thee",
    "version": "1.0",
    "user": {
        "name": "theenaris",
        "email": "theenaris.p@gmail.com"
    },
    "theme": {
        "background": "#ffffff",
        "text": "#000000"
    }
};

const filePath = '../data/json/setting.json';

// Write settings to file with proper formatting
fs.writeFile(filePath, JSON.stringify(settings, null, 4), 'utf8', (err) => {
    if (err) {
        console.error('Error writing settings:', err);
        return;
    }
    console.log('Settings successfully written to file');

}) */