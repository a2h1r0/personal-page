function downloadFile(content, filename) {
  const url = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

async function downloadWaterLevelRecognitionZip() {
  const zip = new JSZip();
  const basePath = 'dataset/water_level_recognition/';
  const bottleLabels = ['a', 'b', 'c', 'd', 'e'];
  const maxIndex = 20;

  for (const label of bottleLabels) {
    for (let i = 1; i <= maxIndex; i++) {
      const filename = `bottle_${label}_${i}.mp3`;
      const path = basePath + filename;

      try {
        const response = await fetch(path);
        if (!response.ok) {
          console.error('Failed to fetch', path, response.status);
          continue;
        }
        const data = await response.arrayBuffer();
        zip.file(filename, data);
      } catch (error) {
        console.error('Error fetching', path, error);
      }
    }
  }

  const content = await zip.generateAsync({ type: 'blob' });
  downloadFile(content, 'water_level_recognition_dataset.zip');
}
