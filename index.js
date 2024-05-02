const dateRegex = /^\d{4},\s?(0?[1-9]|1[0-2]),\s?(0?[1-9]|[12][0-9]|3[01])$/;

class Room {
    constructor({name, bookings, rate, discount}) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date) {
        let timestamp;
        if (!date) throw new Error("Date is required");
        if (date.toString().includes(",")) {
            if (!dateRegex.test(date)) throw new Error("Invalid format: please use 'YYYY, MM, DD'");
            timestamp = new Date(date).getTime()/1000;
        } else {
            timestamp = date;
        }

        return this.bookings.some(booking => {
                const checkin = new Date(booking.checkin).getTime()/1000;
                const checkout = new Date(booking.checkout).getTime()/1000

                if (timestamp >= checkin && timestamp <= checkout) {
                    return true;
                }
        });    
    }

    occupancyPercentage(startDate, endDate) {
        if (!startDate || !endDate) throw new Error("Start and end date are required");
        if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) throw new Error("Invalid format: please use 'YYYY, MM, DD'");
        let daysOccupied = 0;
        let cycles = 0;
        let startTimestamp = new Date(startDate).getTime()/1000;
        let endTimestamp = new Date(endDate).getTime()/1000;

        while (startTimestamp <= endTimestamp) {
            if (this.isOccupied(startTimestamp)) {
                daysOccupied++;
            }
            startTimestamp += 86400;
            cycles++;
        }
        return Math.trunc((daysOccupied/cycles)*100);
    }

    addBooking(booking) {
        this.bookings.push(booking);
    }

    static totalOccupancyPercentage(rooms = [], startDate, endDate) {
        if (!Array.isArray(rooms)) {
            throw new Error("Rooms data is required");
        }
        
        let percentageAcc = 0
        rooms.forEach(room => {
            percentageAcc += room.occupancyPercentage(startDate, endDate);
        });
        return Math.trunc(percentageAcc/rooms.length);
    }

    static availableRooms(rooms, startDate, endDate) {
        return [];
    }
}


class Booking {
    constructor({name, email, checkin, checkout, discount, room}) {
        this.name = name;
        this.email = email;
        this.checkin = checkin;
        this.checkout = checkout;
        this.discount = discount;
        this.room = room;
    }

    getFee() {
        return 0;
    }
}

// const room1 = new Room({
//     name: 'Test Room', 
//     bookings: [
//         {
//             name: 'John Doe',
//             email: 'john.doe@example.com',
//             checkin: "2025, 03, 15",
//             checkout: "2025, 03, 18",
//             discount: 10,
//             room: '101'
//         },
//         {
//             name: 'Jane Doe',
//             email: 'jane.doe@example.com',
//             checkin: "2025, 03, 20",
//             checkout: "2025, 03, 25",
//             discount: 10,
//             room: '101'
//         }
//     ], 
//     rate: 100, 
//     discount: 0
// });

// const result = room1.occupancyPercentage("2025, 03, 20", "2025, 04, 23");
// console.log(result)


// const result = room.isOccupied(1742136793);
// console.log(result)


module.exports = {
    Room,
    Booking
};