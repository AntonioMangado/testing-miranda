const { Room, Booking } = require('./index');

describe("Room properties", () => {
    test("room should have a name", () => {
        const room = new Room({name: 'Test Room', bookings: [], rate: 100, discount: 0});
        expect(room).toHaveProperty("name");
    });
})

describe("isOccupied method", () => {
    test("returns true with first booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 03",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 03",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2022, 01, 02")).toBe(true);
    });
    test("returns true with second booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 03",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 03",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2022, 01, 04")).toBe(true);
    });
    test("returns true with last booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2022, 01, 16")).toBe(true);
    });
    test("returns false with day after first booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2022, 01, 03")).toBe(false);
    });
    test("returns false with day before first booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2021, 11, 03")).toBe(false);
    });
    test("returns false with day after last booking", () => {
        const room = new Room({
          name: "Test Room",
          bookings: [
            {
              name: "John Doe",
              email: "john.doe@example.com",
              checkin: "2022, 01, 01",
              checkout: "2022, 01, 02",
              discount: 10,
              room: "101",
            },
            {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 07",
              discount: 10,
              room: "101",
            },
            {
              name: "Jimmy Doe",
              email: "jimmy.doe@example.com",
              checkin: "2022, 01, 04",
              checkout: "2022, 01, 10",
              discount: 10,
              room: "101",
            },
            {
              name: "Janette Doe",
              email: "janette.doe@example.com",
              checkin: "2022, 01, 15",
              checkout: "2022, 01, 17",
              discount: 10,
              room: "101",
            },
          ],
          rate: 100,
          discount: 0,
        });
        expect(room.isOccupied("2022, 02, 05")).toBe(false);
    });
    test("returns false when room is unoccupied", () => {
        const room = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room.isOccupied("2022, 01, 08")).toBe(false);
    });
    test("returns false when room has no bookings", () => {
        const room = new Room({
            name: 'Test Room', 
            bookings: [], 
            rate: 100, 
            discount: 0
        });
        expect(room.isOccupied("2022, 01, 08")).toBe(false);
    });
    test("throws Error when no date is given", () => {
        const room = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(() => room.isOccupied()).toThrow("Date is required");
    });
})


describe("occupancyPercentage method", () => {
    test(("returns the correct percentage when startDate and endDate are inside the window"), () => {
        const room5 = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room5.occupancyPercentage("2025, 03, 15", "2025, 03, 25")).toBe(90);
    });
    test(("returns the correct percentage when only endDate is inside the window"), () => {
        const room4 = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room4.occupancyPercentage("2025, 03, 19", "2025, 03, 25")).toBe(85);
    });
    test(("returns the correct percentage when full availability"), () => {
        const room3 = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room3.occupancyPercentage("2022, 03, 19", "2022, 03, 25")).toBe(0);
    });
    test(("returns the correct percentage when no availability"), () => {
        const room1 = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room1.occupancyPercentage("2025, 03, 20", "2025, 03, 23")).toBe(100);
    });
    test(("returns the correct percentage when arguments differ in month"), () => {
        const room2 = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 30",
                    checkout: "2025, 04, 01",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 04, 02",
                    checkout: "2025, 04, 04",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(room2.occupancyPercentage("2025, 03, 30", "2025, 04, 04")).toBe(80);
    });
    test(("throws error when arguments missing"), () => {
        const room = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(() => room.occupancyPercentage("2025, 03, 23")).toThrow("Start and end date are required");
    });
    test(("throws error when invalid arguments"), () => {
        const room = new Room({
            name: 'Test Room', 
            bookings: [
                {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    checkin: "2025, 03, 15",
                    checkout: "2025, 03, 18",
                    discount: 10,
                    room: '101'
                },
                {
                    name: 'Jane Doe',
                    email: 'jane.doe@example.com',
                    checkin: "2025, 03, 20",
                    checkout: "2025, 03, 25",
                    discount: 10,
                    room: '101'
                }
            ], 
            rate: 100, 
            discount: 0
        });
        expect(() => room.occupancyPercentage("dweo2332dk", "d34ldujj")).toThrow("Invalid format: please use 'YYYY, MM, DD'");
    });
})