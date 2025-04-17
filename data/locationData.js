// locationData.js

module.exports = {
    states: [
      { id: "s1", name: "Bihar" },
      { id: "s2", name: "Maharashtra" },
      { id: "s3", name: "Karnataka" }
    ],
    districts: [
      { id: "d1", name: "Patna", stateId: "s1" },
      { id: "d2", name: "Gaya", stateId: "s1" },
      { id: "d3", name: "Bhagalpur", stateId: "s1" },
      { id: "d4", name: "Muzaffarpur", stateId: "s1" },
  
      { id: "d5", name: "Mumbai", stateId: "s2" },
      { id: "d6", name: "Pune", stateId: "s2" },
      { id: "d7", name: "Nagpur", stateId: "s2" },
      { id: "d8", name: "Nashik", stateId: "s2" },
  
      { id: "d9", name: "Bangalore", stateId: "s3" },
      { id: "d10", name: "Mysore", stateId: "s3" },
      { id: "d11", name: "Mangalore", stateId: "s3" },
      { id: "d12", name: "Hubli", stateId: "s3" }
    ],
    cities: [
      // Bihar
      { name: "Kankarbagh", districtId: "d1" },
      { name: "Boring Road", districtId: "d1" },
      { name: "Rajendra Nagar", districtId: "d1" },
      { name: "Phulwari", districtId: "d1" },
      { name: "Gulzarbagh", districtId: "d1" },
      { name: "Danapur", districtId: "d1" },
  
      { name: "Bodh Gaya", districtId: "d2" },
      { name: "Tekari", districtId: "d2" },
      { name: "Sherghati", districtId: "d2" },
      { name: "Manpur", districtId: "d2" },
      { name: "Imamganj", districtId: "d2" },
      { name: "Barachatti", districtId: "d2" },
  
      { name: "Barari", districtId: "d3" },
      { name: "Sabour", districtId: "d3" },
      { name: "Kahalgaon", districtId: "d3" },
      { name: "Nathnagar", districtId: "d3" },
      { name: "Pirpainti", districtId: "d3" },
      { name: "Sultanganj", districtId: "d3" },
  
      { name: "Motipur", districtId: "d4" },
      { name: "Kanti", districtId: "d4" },
      { name: "Saraiya", districtId: "d4" },
      { name: "Minapur", districtId: "d4" },
      { name: "Gaighat", districtId: "d4" },
      { name: "Bochaha", districtId: "d4" },
  
      // Maharashtra
      { name: "Andheri", districtId: "d5" },
      { name: "Bandra", districtId: "d5" },
      { name: "Borivali", districtId: "d5" },
      { name: "Dadar", districtId: "d5" },
      { name: "Kurla", districtId: "d5" },
      { name: "Colaba", districtId: "d5" },
  
      { name: "Shivaji Nagar", districtId: "d6" },
      { name: "Kothrud", districtId: "d6" },
      { name: "Wakad", districtId: "d6" },
      { name: "Baner", districtId: "d6" },
      { name: "Aundh", districtId: "d6" },
      { name: "Viman Nagar", districtId: "d6" },
  
      { name: "Sitabuldi", districtId: "d7" },
      { name: "Dhantoli", districtId: "d7" },
      { name: "Itwari", districtId: "d7" },
      { name: "Mahal", districtId: "d7" },
      { name: "Sadar", districtId: "d7" },
      { name: "Ajni", districtId: "d7" },
  
      { name: "Panchavati", districtId: "d8" },
      { name: "CIDCO", districtId: "d8" },
      { name: "Indira Nagar", districtId: "d8" },
      { name: "Satpur", districtId: "d8" },
      { name: "Gangapur", districtId: "d8" },
      { name: "Mhasrul", districtId: "d8" },
  
      // Karnataka
      { name: "Whitefield", districtId: "d9" },
      { name: "Indiranagar", districtId: "d9" },
      { name: "Jayanagar", districtId: "d9" },
      { name: "Marathahalli", districtId: "d9" },
      { name: "HSR Layout", districtId: "d9" },
      { name: "Koramangala", districtId: "d9" },
  
      { name: "Chamundi Hill", districtId: "d10" },
      { name: "Kuvempunagar", districtId: "d10" },
      { name: "Vijayanagar", districtId: "d10" },
      { name: "Jayalakshmipuram", districtId: "d10" },
      { name: "Saraswathipuram", districtId: "d10" },
      { name: "Hebbal", districtId: "d10" },
  
      { name: "Hampankatta", districtId: "d11" },
      { name: "Kadri", districtId: "d11" },
      { name: "Bejai", districtId: "d11" },
      { name: "Kottara", districtId: "d11" },
      { name: "Bajpe", districtId: "d11" },
      { name: "Surathkal", districtId: "d11" },
  
      { name: "Gokul Road", districtId: "d12" },
      { name: "Vidyanagar", districtId: "d12" },
      { name: "Old Hubli", districtId: "d12" },
      { name: "Deshpande Nagar", districtId: "d12" },
      { name: "Rajendra Nagar", districtId: "d12" },
      { name: "Keshwapur", districtId: "d12" }
    ]
  };
  