<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
</script>
        
<script type="text/javascript">
$(document).ready(function(){
    $('input[name="Quantity"]').on('change',function(){
      $value =  $('select.colorsize option:selected').attr("unitprice");
      $total = $(this).val()*$value;
      $('span.price').html($total);
  });
  
    $("select.colorsize").on('change',function(e){
      $value =  $(this).find(":selected").attr("unitprice");
      $('span.price').html($('input[name="Quantity"]').val()*$value);
  });
}); 


</script>


<script type="text/javascript">
$(document).ready(function(){
    $('input[name="Quantity1"]').on('change',function(){
      $value =  $('select.colorsize1 option:selected').attr("unitprice1");
      $total = $(this).val()*$value;
      $('span.price1').html($total);
  });
  
    $("select.colorsize1").on('change',function(e){
      $value =  $(this).find(":selected").attr("unitprice1");
      $('span.price1').html($('input[name="Quantity1"]').val()*$value);
  });
}); 


</script>

<script type="text/javascript">
$(document).ready(function(){
    $('input[name="Quantity2"]').on('change',function(){
      $value =  $('select.colorsize2 option:selected').attr("unitprice2");
      $total = $(this).val()*$value;
      $('span.price2').html($total);
  });
  
    $("select.colorsize2").on('change',function(e){
      $value =  $(this).find(":selected").attr("unitprice2");
      $('span.price2').html($('input[name="Quantity2"]').val()*$value);
  });
}); 


</script>

<script type="text/javascript">
$(document).ready(function(){
    $('input[name="Quantity3"]').on('change',function(){
      $value =  $('select.colorsize3 option:selected').attr("unitprice3");
      $total = $(this).val()*$value;
      $('span.price3').html($total);
  });
  
    $("select.colorsize3").on('change',function(e){
      $value =  $(this).find(":selected").attr("unitprice3");
      $('span.price3').html($('input[name="Quantity3"]').val()*$value);
  });
}); 


</script>
