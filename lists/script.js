$.getJSON("lists.json", function(data) {
  let listPicker = $('#list-tab');
  let listViewer = $('#nav-tabContent');
                     
  $.each(data, function(key, val) {
    let lower = val.name.toLowerCase();
    
    listPicker
      .append('<a class="list-group-item list-group-item-action" id="list-' + lower + '-list" data-bs-toggle="list" href="#list-' + lower + '" role="tab" aria-controls="list-' + lower + '">' + val.name + '</a>');
    
    listViewer
      .append('<div class="tab-pane fade" id="list-' + lower + '" role="tabpanel" aria-labelledby="list-' + lower + '-list"></div>')
      .append('<ul class="list-group"></ul>');
    
    let listGroup = listViewer.last().last();
    
    for(problem of val.problems) {
      listGroup
        .append('<li class="list-group-item">' + problem.name + ' by <small>' + problem.setter + ' </small><span class="badge bg-info">' + problem.grade + '</span></li>');
    }
  });
});
