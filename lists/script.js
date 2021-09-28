$.getJSON("lists.json", function(data) {
  let listPicker = $('#list-tab');
  let listViewer = $('#nav-tabContent');
                     
  $.each(data, function(key, val) {
    let lower = val.name.toLowerCase();
    
    let triggerEl = listPicker
      .append('<a class="list-group-item list-group-item-action" id="list-' + lower + '-list" data-bs-toggle="list" href="#list-' + lower + '" role="tab" aria-controls="list-' + lower + '">' + val.name + '</a>');
    
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
   })
    
    listViewer.append('<div class="tab-pane fade" id="list-' + lower + '" role="tabpanel" aria-labelledby="list-' + lower + '-list">' + val.problems[0].name + '</div>');
  });
});
