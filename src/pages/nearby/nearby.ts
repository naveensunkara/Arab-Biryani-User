import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('place') search: ElementRef;
  myLocation: any;
  //map: any;
  userMarker: any;
  branchHide: any = "show";
  userInfoWindow: any;
  markers: Array<Object> = [];
  infowindow: Array<any> = [];
  nearbyPlaces: any;
  image = {
    url: '/assets/imgs/pointer-app.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(-23, -25),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };
  showFlag: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let markers = [], infoWindows = [], labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';;
      let mapOptions = {
        center: this.myLocation,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let userMarker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: map.getCenter(),
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          strokeColor: '#6b0082',
          fillColor: '#fff',
          fillOpacity: 1
        }
      })
      let userInfoWindow = new google.maps.InfoWindow({
        content: 'You are Here'
      })
      userInfoWindow.open(map, userMarker);
      markers.push(userMarker);
      infoWindows.push(userInfoWindow);
      let service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: this.myLocation,
        radius: 50000,
        types: ['restaurant'],
        name: ['AASIFE']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            let resultMarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: results[i].geometry.location,
              label: labels[i],
              icon: {
                url: '/assets/imgs/pointer-app.png',
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(-23, -25),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
              }
            });
            let resultInfoWindow = new google.maps.InfoWindow({
              content: '<h3>Arab Street Biriyani</h3><h6>Location</h6><h6 style="width:200px">' + results[i].vicinity + '</h6><p>Rating: ' + results[i].rating + '</p>'
            });
            infoWindows.push(resultInfoWindow);
            markers.push(resultMarker);
            google.maps.event.addListener(resultMarker, 'click', (event) => {
              for (var j = 0; j < infoWindows.length; j++) {
                let temp = infoWindows[j];
                temp.close();
              }
              this.ngZone.run(() => {
                userInfoWindow.close();
                resultInfoWindow.open(map, resultMarker);
              });
            })
          }
        }
      });
      let searchBox = new google.maps.places.SearchBox(this.search['_searchbarInput'].nativeElement);
      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });
      searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();


        //places.forEach(function (place, index) {
        if (!places[0].geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: '/assets/imgs/pointer-app.png',
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(-23, -25),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6,
            strokeColor: '#6b0082',
            fillColor: '#fff',
            fillOpacity: 1
          },
          title: places[0].name,
          position: places[0].geometry.location
        })
        );

        service.nearbySearch({
          location: places[0].geometry.location,
          radius: 50000,
          types: ['restaurant'],
          name: ['AASIFE']
        }, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              let resultMarker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: results[i].geometry.location,
                label: labels[i],
                icon: {
                  url: '/assets/imgs/pointer-app.png',
                  size: new google.maps.Size(71, 71),
                  origin: new google.maps.Point(-23, -25),
                  anchor: new google.maps.Point(17, 34),
                  scaledSize: new google.maps.Size(25, 25)
                }
              });
              let resultInfoWindow = new google.maps.InfoWindow({
                content: '<h3>Arab Street Biriyani</h3><h6>Location</h6><h6 style="width:200px">' + results[i].vicinity + '</h6><p>Rating: ' + results[i].rating + '</p>'
              });
              infoWindows.push(resultInfoWindow);
              markers.push(resultMarker);
              google.maps.event.addListener(resultMarker, 'click', (event) => {
                for (var j = 0; j < infoWindows.length; j++) {
                  let temp = infoWindows[j];
                  temp.close();
                }
                
                  userInfoWindow.close();
                  resultInfoWindow.open(map, resultMarker);
                
              })
            }
          }
        });

        if (places[0].geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(places[0].geometry.viewport);
        } else {
          bounds.extend(places[0].geometry.location);
        }
        //});
        map.fitBounds(bounds);
      });
    })
  }
  openChat() {
    this.navCtrl.push('ChatPage');
  }
  backButtonClick() {
    this.navCtrl.pop();
  }
  showAll() {
    this.showFlag = false;
    this.nearbyPlaces.forEach(element => {
      element.branchHide = "show";
    });
  }
}
