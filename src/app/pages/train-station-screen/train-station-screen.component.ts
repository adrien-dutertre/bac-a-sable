import { Component } from '@angular/core';
import { DepartureComponent } from "./departure/departure.component";
import { Train } from './train.interface';

@Component({
  selector: 'app-train-station-screen',
  imports: [DepartureComponent],
  templateUrl: './train-station-screen.component.html',
  styleUrl: './train-station-screen.component.css'
})
export class TrainStationScreenComponent {
  myTrains : Train[] = [{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '6181',
    departureTime: new Date("01/01/1970 17:17"),
    destination: 'Nice Ville',
    stops: ["Valence TGV", "Toulon", "Les Arcs-Draguignan", "Cannes", "Antibes", "Nice Ville"],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "platform",
      platformNumber: "13"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '6159',
    departureTime: new Date("01/01/1970 17:17"),
    destination: 'Hyères',
    stops: ["Valence TGV", "Toulon", "Hyères"],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "platform",
      platformNumber: "13"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TER',
    trainNumber: '891017',
    departureTime: new Date("01/01/1970 17:22"),
    destination: 'Laroche-Migennes',
    stops: [],
    delay: {
      isDelayed: true,
      print: "1h00",
      delayTime: 3600000
    },
    platform: {
      platformClass: "platform",
      platformNumber: "G"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '9589',
    departureTime: new Date("01/01/1970 17:22"),
    destination: 'Freiburg',
    stops: [],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "platform",
      platformNumber: "17"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '6123',
    departureTime: new Date("01/01/1970 17:22"),
    destination: 'Marseille Saint-Charles',
    stops: [],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "hall",
      platformNumber: "2"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '6195',
    departureTime: new Date("01/01/1970 17:41"),
    destination: 'Miramas',
    stops: [],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "hall",
      platformNumber: "2"
    }
  },{
    companyLogoURL: 'logo_sncf.svg',
    trainType: 'TGV',
    trainNumber: '6923',
    departureTime: new Date("01/01/1970 17:41"),
    destination: 'Grenoble',
    stops: [],
    delay: {
      isDelayed: false,
      print: "",
      delayTime: 0
    },
    platform: {
      platformClass: "not-defined",
      platformNumber: ""
    }
  }];
}
