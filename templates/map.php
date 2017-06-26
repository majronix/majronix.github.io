<div id="map"></div>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxsNRkf7z0Rfk9n7PRpCW4T-485bU6kWk&sensor=false"></script>

    <script type="text/javascript">
        
        function initialize() {
            var myLatlng = new google.maps.LatLng(48.196197, 25.536613);//Позиция центра карты
                var pos1 = new google.maps.LatLng(48.187294, 25.770205);//Маркер заведения
                var pos2 = new google.maps.LatLng(48.248849, 25.569270);//Маркер метро
            var mapOptions = {
            zoom: 10,
            scrollwheel: false,//Отмена скрол зума по карте
            center: myLatlng
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var marker = new google.maps.Marker({
              position: pos1,
              map: map,
              title: 'Нaбережная канала Грибоедова д.7(внутри двора)',
              icon: '/img/map_icon_w.png'
            });
                
            var marker = new google.maps.Marker({
              position: pos2,
              map: map,
              title: 'Кленовая Улица д.2',
              icon: '/img/map_icon_m.png'
            });
            map.setOptions({
                styles: [
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#76aee3"
						            },
						            {
						                "saturation": 38
						            },
						            {
						                "lightness": -11
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#8dc749"
						            },
						            {
						                "saturation": -47
						            },
						            {
						                "lightness": -17
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.park",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#c6e3a4"
						            },
						            {
						                "saturation": 17
						            },
						            {
						                "lightness": -2
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#cccccc"
						            },
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 13
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.land_parcel",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#5f5855"
						            },
						            {
						                "saturation": 6
						            },
						            {
						                "lightness": -31
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#ffffff"
						            },
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 100
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": []
						    }
						]
            });//Инициализация стилей
        }
        
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>