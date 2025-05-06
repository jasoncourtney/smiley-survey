function submitResponse(choice) {
  // NOTE the URL is wrapped in quotes
  const url = 'https://script.google.com/macros/s/AKfycbxdZlfmKnrDCOASvUF-FbSd1JhKspxKF__NQE8oIPBgUMs0BqnZ6D391sQh-jJ8wzQb/exec';

  // Prepare payload
  const payload = JSON.stringify({
    timestamp: new Date().toISOString(),
    mood: choice
  });

  // Send it
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  })
  .then(() => {
    alert('Thanks, your response has been recorded!');
  })
  .catch(err => {
    console.error('Submission failed', err);
    alert('Oops—there was a problem. Please try again.');
  });
}
