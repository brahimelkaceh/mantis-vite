let base_url = 'https://farmdriver.savas.ma/api/';

const api = {
  // ! downloading production weekly PDF
  productionWeekPdf: async (id, age) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}pdf-week/?lot_id=${id}&age=${age}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();

      // Create a temporary URL for the received blob
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element for downloading
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      // Change the file name if needed

      // Append the anchor element to the DOM
      document.body.appendChild(a);
      let fileName = response.headers.get('Content-Disposition').substring(21);
      a.download = fileName;
      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw new Error('failed to download file: ' + error.status);
    }
  },

  // ! downloading production weekly synthese PDF
  productionWeekSynthesePdf: async (id) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}synthese-pdf/?finished=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();

      // Create a temporary URL for the received blob
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element for downloading
      let fileName = response.headers
        .get('Content-Disposition')
        .substring(21)
        .replace('Synthese', 'Synthèse')
        .replace('achevees', 'achevées');
      const a = document.createElement('a');
      // fileName = fileName;

      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      // Append the anchor element to the DOM
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw new Error('failed to download file: ' + error.status);
    }
  },
  // ! downloading Weekly performance summary production PDF
  weekPerformnaceWeeklyPdf: async (date) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}production-state-pdf/?date=${date}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();

      // Create a temporary URL for the received blob
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element for downloading
      let fileName = response.headers.get('Content-Disposition').substring(21);
      const a = document.createElement('a');

      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      // Append the anchor element to the DOM
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }
  },
  // ! downloading production Summary by fixed age PDF
  SyntheseParAgePdf: async (age) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}synthese-pdf/?age=${age}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();

      // Create a temporary URL for the received blob
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element for downloading
      let fileName = response.headers.get('Content-Disposition').substring(21);
      const a = document.createElement('a');

      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      // Append the anchor element to the DOM
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }
  }
};

export default api;

// const fetchLotData = async (id) => {
//   try {
//     setLoading(true);
//     const result = await api.getLotTitles(id);
//     console.log(result);
//     setLotData(result);
//   } catch (error) {
//     setError("failed to fetch");
//   } finally {
//     setLoading(false);
//   }
// };
