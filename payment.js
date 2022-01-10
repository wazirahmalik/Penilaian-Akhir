var card = {
    "payment_method":{
      "credit_card":{
        "first_name": "Wazirah",
        "last_name": "Malik",
        "number":"01125661782",
        "verification_value": "1620",
        "month":"3",
        "year":"2022",
        "email": "webdesign@exam.com"
      },
      "data": {
        "GST_payment": "448",
        "extra_payment": {
          "some_other_things": "Can be anything really"
        }
      }
    }
  } 
  var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=C7cRfNJGODKh4Iu5Ox3PToKjniY";
  
  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: card
  }).success(function(data) {
    console.log(data);
    alert(data.transaction.payment_method.token);
  }).error(function(request, status, error) {
    console.log(error);
    alert('error');
  });