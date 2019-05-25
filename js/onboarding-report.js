window.addEventListener('load', function(e){
  document.querySelector('.container.form .btn').addEventListener('click', parseInput);
});

var data_avg = []

function parseInput(){
  var file_a = document.querySelector('#a').files[0];
  var file_b = document.querySelector('#b').files[0];

  var data_a = [];
  var data_b = [];

  Papa.parse(file_a, {
    header: true,
    dynamicTyping: true,
    step: function(results) {
      data_a.push({'username':results.data[0]['User'], 'percentage':results.data[0]['Percentage Completed']});
    }
  });

  Papa.parse(file_b, {
    header: true,
    dynamicTyping: true,
    step: function(results) {
      data_b.push({'username':results.data[0]['User'], 'percentage':results.data[0]['Percentage Completed']});
    },
    complete: function(results){
      processResults(data_a, data_b);
    }
  });

}
  
function processResults(data_a, data_b){
  
  data_a.forEach(function(user){
    var username = user.username;
    var percent_a = user.percentage;
    var percent_b = data_b.filter(obj=>obj.username===username)[0].percentage;
    
    data_avg.push({'username':username, 'percentage_avg': (percent_a + percent_b)/2})
  });
  
  displayResults(data_avg);
  
}

function displayResults(data){
  data.forEach(function(item){
    addItem(item.username, item.percentage_avg);
  });
  
  var data_names = jQuery.extend(true, [], data_avg);
  
  data_names.forEach(function(item){
    delete item.percentage_avg;
    item.title = item.username;
    delete item.username;
  })
  
  console.log(data_names);
  
  $('.ui.search')
    .search({
    source: data_names
  });

  console.log('complete');
}

function addItem(usr, per){
  var new_row = document.createElement('div');
  new_row.className = 'res';
  
  var name = document.createElement("p");
  name.className = 'name';
  name.innerHTML = usr;
  new_row.appendChild(name);
  
  var percent = document.createElement("p");
  percent.className = 'percent';
  if(per == 100){percent.style.color = '#00cc77'}
  percent.innerHTML = per + '%';
  new_row.appendChild(percent);
  
  document.querySelector('#results').appendChild(new_row);
  
}