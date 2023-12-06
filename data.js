var buildingsData = [
    {
      "id": 1,
      "name": "הראל - רמת גן"
    },
    {
      "id": 2,
      "name": "הראל - פתח תקווה"
    },
    {
        "id": 3,
        "name": "הראל - אשדוד"
      }
  

  ];
  
var floorsData = [];

  for (var i = 1; i <= 25; i++) {
    var floor = {
      "id": i,
      "name": "קומה " + i
    };
    floorsData.push(floor);
  }
  
  console.log(floorsData);
  
  
  var hostsData = [
    {
      "id": 1,
      "name": "מארח 1"
    },
    {
      "id": 2,
      "name": "מארח 2"
    },

  ];


  localStorage.setItem('floorsData', JSON.stringify(floorsData));
  localStorage.setItem('buildingsData', JSON.stringify(buildingsData));
  localStorage.setItem('hostsData', JSON.stringify(hostsData));

  

