function submitResponse(choice) {
  const baseUrl = 'https://script.google.com/macros/s/AKfycbxdZlfmKnrDCOASvUF-FbSd1JhKspxKF__NQE8oIPBgUMs0BqnZ6D391sQh-jJ8wzQb/exec';
  const url = `${baseUrl}?mood=${encodeURIComponent(choice)}`;

  // fire-and-forget GET (no-cors) to avoid CORS issues
  fetch(url, { mode: 'no-cors' })
    .then(() => showThankYou())
    .catch(err => {
      console.error('Submit failed', err);
      alert('Oops—there was a problem. Please try again.');
    });
}

function showThankYou() {
  const survey = document.getElementById('survey');
  const thanks = document.getElementById('thankyou');

  // hide survey, show thank-you
  survey.hidden = true;
  thanks.hidden = false;

  // after 2s, go back to survey
  setTimeout(() => {
    thanks.hidden = true;
    survey.hidden = false;
  }, 2000);
}
