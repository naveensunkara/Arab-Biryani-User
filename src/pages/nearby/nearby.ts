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
  map: any;
  userLocation: any;
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
  labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    //this.latLng = new google.maps.LatLng(13.082680199999999, 80.2707184);
    this.geolocation.getCurrentPosition().then((position) => {
      this.myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: this.myLocation,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let searchBox = new google.maps.places.SearchBox(this.search['_searchbarInput'].nativeElement);
      this.map.addListener('bounds_changed', function (e) {
        searchBox.setBounds(this.getBounds());
      });
      searchBox.addListener('places_changed', function () {
        console.log(this.myLocation)
      });
      this.userLocation = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter(),
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          strokeColor: '#6b0082',
          fillColor: '#fff',
          fillOpacity: 1
        }
      });
      this.userInfoWindow = new google.maps.InfoWindow();
      this.userInfoWindow.setContent("You are here");
      this.userInfoWindow.open(this.map, this.userLocation);
      this.nearbyPlace();
    })
  }
  nearbyPlace() {
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: this.myLocation,
      radius: 50000,
      types: ['restaurant'],
      name: ['AASIFE']
    }, (results, status) => {
      this.callback(results, status);
      this.nearbyPlaces = results;
    });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i], i);
      }
    }
  }

  createMarker(place, index) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      label: this.labels[index],
      icon: this.image
    });
    this.markers.push(marker);
    let infowindow = new google.maps.InfoWindow({
      content: '<h3>Arab Street Biriyani</h3><h6>Location</h6><h6 style="width:200px">' + place.vicinity + '</h6><p>Rating: ' + place.rating + '</p>'
    });
    this.infowindow.push(infowindow);
    google.maps.event.addListener(marker, 'click', (event) => {
      //this.openChat();
      for (var j = 0; j < this.infowindow.length; j++) {
        let temp = this.infowindow[j];
        temp.close();
        this.nearbyPlaces[j].branchHide = "hide";
      }
      this.ngZone.run(() => {
        this.userInfoWindow.close();
        infowindow.open(this.map, marker);
        this.nearbyPlaces[index].branchHide = "show";
      });
    });
  }
  openChat(){
    this.navCtrl.push('ChatPage');
  }
  backButtonClick() {
    this.navCtrl.pop();
  }
}
