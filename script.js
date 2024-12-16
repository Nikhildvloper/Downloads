// Function to fetch the download link from download.txt
function fetchDownloadLink() {
  fetch('Download.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not fetch the download link');
      }
      return response.text();
    })
    .then(link => {
      const downloadBtn = document.getElementById('download-btn');
      downloadBtn.href = link.trim(); // Set the href attribute to the link
      downloadBtn.download = link.split('/').pop(); // Set the filename for downloading
    })
    .catch(error => {
      console.error('Error fetching the download link:', error);
      alert('Failed to load the download link.');
    });
}

// Call the function when the script loads
fetchDownloadLink();
