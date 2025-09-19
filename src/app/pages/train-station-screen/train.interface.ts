export interface Train {
    companyLogoURL: string;
    trainType: string;
    trainNumber: string;
    departureTime: Date;
    destination: string;
    stops: string[];
    delay: {
        isDelayed:boolean;
        print: string;
        delayTime: number;
    };
    platform: {
        platformClass: string;
        platformNumber: string;
    }
}