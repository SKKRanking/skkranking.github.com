$(document).ready(() => {
  let total = 0;

  $.ajaxSetup({
    headers: {
      'Authorization': 'Token 3a298a2a3911e5644d1d9c2dd5645c925e3affa2'
    }
  });

  $.getJSON("data/data.json", (json) => {
    $.each(json, (index, value) => {
      if (value.isPrivate) {
        return true;
      }

      $.getJSON("https://www.sostokt.com/api/climbs/" + value.id + "/latest-sends", (data) => {
        $.each(json, (index, value) => {
          console.log(value.effortBy.fullName);
        })
      });

      total++;
    });

    console.log(total);
  });


});
