/* eslint-disable no-unused-vars */

class Vehicle{
    constructor(vehicleProps){
        this.wheelTotal=vehicleProps[0];
        this.energySource=vehicleProps[1];
        this.manufacturer=vehicleProps[2];
        this.isOn=false;
    };
    getSpec(spec){
        if(Object.keys(this).includes(spec)){
            return this[spec];
        };
    };
};

class Tesla extends Vehicle{
    constructor(teslaProps){
        super(teslaProps[4][0]);
        this.milesPerCharge=teslaProps[0];
        this.model=teslaProps[1];
        this.chargePercentage=teslaProps[2];
        this.minutesToCharge=teslaProps[3];
    };
    minutesToFullCharge(chargePercentage){
        return `${chargePercentage} minutes until the charge is full!`;
    };
};