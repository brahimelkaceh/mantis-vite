let base_url = 'https://farmdriver.savas.ma/api/';

const api = {
  //! Production sites
  getProdSites: async () => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-sites-titles/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  getLotTitles: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      console.log(accessToken);
      const response = await fetch(`${base_url}get-lots-titles/?site=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  //! get next send
  getProudNext: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-next-send/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      throw new Error(error);
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
