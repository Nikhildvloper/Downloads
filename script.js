function downloadFile() {
  const link = document.createElement('a');
  link.href = 'your-file-url-here'; // Replace with the URL of your file
  link.download = 'filename.ext'; // Replace with the desired file name
  link.click();
  alert("Your download will start shortly!");
}
