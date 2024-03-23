let base_url = 'https://farmdriver.savas.ma/api/';

const api = {
  // ? Sites Management
  //! GET All SITES
  getAllSites: async () => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}get-sites/`, {
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

  // ! CREATE new SITE
  createNewSite: async (data) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}create-site/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ! DELETE SITE
  deleteSite: async (id) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}delete-site/?id=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ! UPDATE new SITE
  updateSite: async (data) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}update-site/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ********************************
  // ? LOTS MANAGEMENT
  //! GET All LOTS
  getAllLots: async () => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');
      const response = await fetch(`${base_url}get-sites/`, {
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

  // ! CREATE new LOT
  createNewLot: async (data) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}add-lot/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ******************************** // ********************************
  // ? BATIMENTS MANAGEMENT
  //  ! GAT All Batiments
  getAllBatiments: async () => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-bats`, {
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

  // ! CREATE new Batiment
  createNewBatiment: async (data) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}create-batmnt/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ! DELETE Batiment
  deleteBatiment: async (id) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}delete-bat/?id=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  // ! UPDATE Batiment
  updateBatiment: async (data) => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}update-batmnt/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // ******************************** // ******************************** // ********************************
  // ! GET ACTIVE GUIDES
  getProdGuides: async () => {
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-active-guides/`, {
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
  },
  getBilanPartial: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}partial-bilan/?lotId=${id}`, {
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
  },
  getPerformanceTable: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-prod-table-data/?lotId=${id}`, {
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
  },
  // ! delete report
  deleteReport: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}delete-report/?id=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { status: response.status };
    } catch (error) {
      throw new Error(error);
    }
  },
  // ! get table row details
  getProductionTableRow: async (id, age) => {
    if (!id || !age) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-table-row-details/?lotId=${id}&age=${age}`, {
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
  // ! get Prefilled for update report
  getPrefilled: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}get-prefilled-data/?id=${id}`, {
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
