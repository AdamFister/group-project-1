<template>
    <div><a :href="myFunction">Lat = {{ lat }} Long = {{ long }}</a></div>
</template>

<script>
export default {
  name: "MapComponent",
  data: {
	  error: '',
	  lat:'',
	  lon:''
  },  
   methods:{
    myFunction: function () {		
	 if(navigator.geolocation){
	 navigator.geolocation.getCurrentPosition(this.showPosition);
	 }else{
	 this.error = "Geolocation is not supported."; 
		 
	 }
    },
	showPosition:function (position) {	
		this.lat = position.coords.latitude;
		this.lon = position.coords.longitude;
	}
	}
};
</script>

<style>
#map {
  font-size: 30px;
}
</style>