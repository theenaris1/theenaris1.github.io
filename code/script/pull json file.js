/* fetch("/code/data/json/setting.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Settings loaded:', data);
    // Use the data here
  })
  .catch(error => {
    console.error('Error loading settings:', error);
  }); */