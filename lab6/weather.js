document.addEventListener('DOMContentLoaded', () => {
  // Get references to controls
  const searchBtn       = document.getElementById('searchBtn');
  const searchBar       = document.getElementById('searchBar');
  const locationSelect  = document.getElementById('locationSelect');
  const useLocationBtn  = document.getElementById('useLocationBtn');
  const errorMessage    = document.getElementById('errorMessage');

  // Initialize placeholders on page load
  initializePlaceholders();

  // Event: free-text search button clicked
  searchBtn.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (!query) {
      showError('Please enter a city name.');
      return;
    }
    clearError();
    fetchGeocoding(query);
  });

  // Event: preset location selected
  locationSelect.addEventListener('change', () => {
    const val = locationSelect.value;
    if (!val) return;
    clearError();
    const [lat, lon] = val.split(',');
    fetchSunData(lat, lon);
  });

  // Event: use browser Geolocation API
  useLocationBtn.addEventListener('click', () => {
    clearError();
    if (!navigator.geolocation) {
      showError('Geolocation not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => fetchSunData(pos.coords.latitude, pos.coords.longitude),
      err => showError('Geolocation error: ' + err.message)
    );
  });
});

function showError(msg) {
  document.getElementById('errorMessage').textContent = msg;
}

function clearError() {
  document.getElementById('errorMessage').textContent = '';
}

function initializePlaceholders() {
  const fields = [
    'todayDate','todaySunriseTime','todayDawnTime','todaySunsetTime',
    'todayDuskTime','todaySolarNoon','todayDayLength','todayTimeZone',
    'tomorrowDate','tomorrowSunriseTime','tomorrowDawnTime','tomorrowSunsetTime',
    'tomorrowDuskTime','tomorrowSolarNoon','tomorrowDayLength','tomorrowTimeZone'
  ];
  fields.forEach(id => {
    document.getElementById(id).textContent = '--';
  });
}

function fetchGeocoding(city) {
  fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(city)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.length) {
        showError('Invalid city name.');
        return;
      }
      const { lat, lon } = data[0];
      fetchSunData(lat, lon);
    })
    .catch(() => showError('Error fetching location data.'));
}

function fetchSunData(lat, lon) {
  // Build API endpoints
  const todayUrl    = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=today`;
  const tomorrowUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=tomorrow`;

  // Date formatting arrays
  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // Format today's date
  const now      = new Date();
  const todayStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  // Format tomorrow's date
  const tom      = new Date(now);
  tom.setDate(tom.getDate() + 1);
  const tomorrowStr = `${days[tom.getDay()]}, ${months[tom.getMonth()]} ${tom.getDate()}, ${tom.getFullYear()}`;

  function updateCard(prefix, data, dateStr) {
    document.getElementById(prefix + 'Date').textContent       = dateStr;
    document.getElementById(prefix + 'SunriseTime').textContent = data.sunrise;
    document.getElementById(prefix + 'DawnTime').textContent    = data.dawn;
    document.getElementById(prefix + 'SunsetTime').textContent  = data.sunset;
    document.getElementById(prefix + 'DuskTime').textContent    = data.dusk;
    document.getElementById(prefix + 'SolarNoon').textContent   = data.solar_noon;
    document.getElementById(prefix + 'DayLength').textContent   = data.day_length;
    document.getElementById(prefix + 'TimeZone').textContent    = data.timezone;
  }

  // Fetch & display today's data
  fetch(todayUrl)
    .then(res => res.json())
    .then(json => {
      if (json.status !== 'OK') throw new Error('API error');
      updateCard('today', json.results, todayStr);
    })
    .catch(err => {
      console.error(err);
      showError('Error fetching today’s data.');
    });

  fetch(tomorrowUrl)
    .then(res => res.json())
    .then(json => {
      if (json.status !== 'OK') throw new Error('API error');
      updateCard('tomorrow', json.results, tomorrowStr);
    })
    .catch(err => {
      console.error(err);
      showError('Error fetching tomorrow’s data.');
    });
}
