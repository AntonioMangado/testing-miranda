const dateRegex: RegExp = /^\d{4},\s?(0?[1-9]|1[0-2]),\s?(0?[1-9]|[12][0-9]|3[01])$/;

interface RoomData {
    name: string;
    bookings: Booking[];
    rate: number;
    discount: number;
}

interface BookingData {
    name: string;
    email: string;
    checkin: string;
    checkout: string;
    discount: number;
    room: Room;
}

export class Room {
    name: string;
    bookings: Booking[];
    rate: number;
    discount: number;

    constructor({name, bookings, rate, discount}: RoomData) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date: string | number): boolean {
        let timestamp: number;
        if (!date) throw new Error("Date is required");
        if (typeof date === "string") {
            if (!dateRegex.test(date)) throw new Error("Invalid format: please use 'YYYY, MM, DD'");
            timestamp = new Date(date).getTime()/1000;
        } else {
            timestamp = date;
        }

        return this.bookings.some(booking => {
                const checkin: number = new Date(booking.checkin).getTime()/1000;
                const checkout: number = new Date(booking.checkout).getTime()/1000

                if (timestamp >= checkin && timestamp <= checkout) {
                    return true;
                }
        });    
    }

    occupancyPercentage(startDate: string, endDate: string): number {
        if (!startDate || !endDate) throw new Error("Start and end date are required");
        if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) throw new Error("Invalid format: please use 'YYYY, MM, DD'");
        let daysOccupied: number = 0;
        let cycles: number = 0;
        let startTimestamp: number = new Date(startDate).getTime()/1000;
        let endTimestamp: number = new Date(endDate).getTime()/1000;

        while (startTimestamp <= endTimestamp) {
            if (this.isOccupied(startTimestamp)) {
                daysOccupied++;
            }
            startTimestamp += 86400;
            cycles++;
        }
        return Math.trunc((daysOccupied/cycles)*100);
    }

    addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }

    static totalOccupancyPercentage(rooms: Room[], startDate: string, endDate: string): number {
        if (!Array.isArray(rooms)) {
            throw new Error("Rooms data is required");
        }
        
        let percentageAcc: number = 0
        rooms.forEach(room => {
            percentageAcc += room.occupancyPercentage(startDate, endDate);
        });
        return Math.trunc(percentageAcc/rooms.length);
    }

    static availableRooms(rooms: Room[], startDate: string, endDate: string): Room[] {
        if (!Array.isArray(rooms)) {
            throw new Error("Rooms data is required");
        }

        let availableRooms: Room[] = [];
        rooms.forEach(room => {
            if (room.occupancyPercentage(startDate, endDate) === 0) {
                availableRooms.push(room);
            }
        });
        
        return availableRooms;
    }
}


export class Booking {
    name: string;
    email: string;
    checkin: string;
    checkout: string;
    discount: number;
    room: Room;

    constructor({name, email, checkin, checkout, discount, room}: BookingData) {
        this.name = name;
        this.email = email;
        this.checkin = checkin;
        this.checkout = checkout;
        this.discount = discount;
        this.room = room;
    }

    get fee(): number {

        if (this.discount >= 100 || this.room.discount >= 100) return 0;

        const checkin: number = new Date(this.checkin).getTime()/1000;
        const checkout: number = new Date(this.checkout).getTime()/1000
        let nightsSpent: number = (checkout - checkin) / 86400;
        let fullPrice: number = nightsSpent * this.room.rate;
        if (this.room.discount > 0) {
            fullPrice -= (fullPrice * (this.room.discount/100));
            return this.discount > 0 ? fullPrice - (fullPrice * (this.discount/100)) : fullPrice;
        } else if (this.discount > 0) {
            return fullPrice - (fullPrice * (this.discount/100));
        } else {
            return fullPrice;
        }
    }
}
