$.getJSON("lists.json", function(data) {
  let listPicker = $('#list-tab');
  let listViewer = $('#nav-tabContent');
                     
  $.each(data, function(key, val) {
    let lower = val.name.toLowerCase();
    
    listPicker.append('<a class="list-group-item list-group-item-action active" id="list-' + lower + '-list" data-bs-toggle="list" href="#list-' + lower + '" role="tab" aria-controls="list-' + lower + '">' + val.name + '</a>');
    
    listViewer.append('<div class="tab-pane fade show active" id="list-' + lower + '" role="tabpanel" aria-labelledby="list-' + lower + '-list">' + val.problems[0].name + '</div>');
  });
});
