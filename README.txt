・Google Map Javascript API の読み込み完了のcallbackにとらわれずにAPIを扱えます


<!-- ok-google-map.js を読み込んで、API KEYを設定してください -->
<script src="ok-google-map.js"></script>
<script>okGoogleMap.setKey('YOUR_API_KEY');</script>


<!-- 以下のようにいつでもどこでもAPIを扱えます -->
<div id="gmap1" style="margin: 50px auto; width: 300px;  height: 300px;"></div>
<script>
okGoogleMap(function(){
	var map = new google.maps.Map(document.getElementById('gmap1'), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: new google.maps.LatLng(35.3605555, 138.7277777),
		zoom: 12
	});
});
</script>
