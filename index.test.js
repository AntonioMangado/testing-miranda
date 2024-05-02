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

describe("totalOccupancyPercentage method", () => {
  test("returns 0 when full availability", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 23", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.totalOccupancyPercentage(rooms, "2026, 03, 19", "2026, 03, 20")).toBe(0);
  });
  test("returns 100 when no availability", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 23", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.totalOccupancyPercentage(rooms, "2025, 03, 19", "2025, 03, 20")).toBe(100);
  });
  test("returns 50 when half availability", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 17", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 23", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const rooms = [room1, room2];
    expect(Room.totalOccupancyPercentage(rooms, "2025, 03, 19", "2025, 03, 20")).toBe(50);
  });
  test("throws Error when rooms data is missing", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 17", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 23", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const rooms = [room1, room2];
    expect(() => Room.totalOccupancyPercentage("2025, 03, 19", "2025, 03, 20")).toThrow("Rooms data is required");
  });
  test("throws Error when date arguments are missing", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 17", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 23", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const rooms = [room1, room2];
    expect(() => Room.totalOccupancyPercentage(rooms, "2025, 03, 20")).toThrow("Start and end date are required");
  });
})

describe("availableRooms method", () => {
  test("returns 'No rooms available' when no rooms are available", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 23", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.availableRooms(rooms, "2025, 03, 19", "2025, 03, 20")).toBe("No rooms available");
  });
  test("returns an array with available rooms", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 23", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.availableRooms(rooms, "2025, 03, 19", "2025, 03, 20")).not.toHaveLength(0);
  });
  test("returns an array with the correct number of available rooms when all rooms available", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 23", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.availableRooms(rooms, "2026, 03, 19", "2026, 03, 20")).toHaveLength(4);
  });
  test("returns an array with the correct number of available rooms when some rooms available", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 05", checkout: "2025, 03, 11", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 05", checkout: "2025, 03, 13", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 24", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const room3 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 03, 30", discount: 10, room: '103'}], rate: 100, discount: 0 });
    const room4 = new Room({name: 'Test Room', bookings: [{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 19", checkout: "2025, 04, 02", discount: 10, room: '104'}], rate: 100, discount: 0 });
    const rooms = [room1, room2, room3, room4];
    expect(Room.availableRooms(rooms, "2025, 03, 19", "2025, 03, 20")).toHaveLength(2);
  });
  test("throws Error when rooms data is missing", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 17", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 23", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const rooms = [room1, room2];
    expect(() => Room.availableRooms("2025, 03, 19", "2025, 03, 20")).toThrow("Rooms data is required");
  });
  test("throws Error when date arguments are missing", () => {
    const room1 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 21", discount: 10, room: '101'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 22", checkout: "2025, 03, 25", discount: 10, room: '101'}], rate: 100, discount: 0 });
    const room2 = new Room({name: 'Test Room', bookings: [{ name: 'John Doe', email: 'john.doe@example.com', checkin: "2025, 03, 15", checkout: "2025, 03, 17", discount: 10, room: '102'},{ name: 'Jane Doe', email: 'jane.doe@example.com', checkin: "2025, 03, 23", checkout: "2025, 03, 25", discount: 10, room: '102'}], rate: 100, discount: 0 });
    const rooms = [room1, room2];
    expect(() => Room.availableRooms(rooms, "2025, 03, 20")).toThrow("Start and end date are required");
  });
});

describe("Booking properties", () => {
  test("booking should have a name", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 10,
      room: "101"
    });
    expect(booking).toHaveProperty("name");
  })
});

describe("fee method", () => {
  test("returns the correct fee when discount is 0", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 0,
      room: { name: "Deluxe Room", rate: 200, discount: 0, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 0, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(600);
  });
  test("returns the correct fee when there is room discount, but no booking discount", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 0,
      room: { name: "Deluxe Room", rate: 200, discount: 10, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 0, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(540);
  });
  test("returns the correct fee when there is booking discount, but no room discount", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 20,
      room: { name: "Deluxe Room", rate: 200, discount: 0, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 20, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(480);
  });
  test("returns the correct fee when there is booking discount, and room discount", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 20,
      room: { name: "Deluxe Room", rate: 200, discount: 10, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 20, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(432);
  });
  test("returns 0 when there is a full discount", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 20,
      room: { name: "Deluxe Room", rate: 200, discount: 100, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 20, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(0);
  });
  test("returns 0 when there is discount bigger than 100%", () => {
    const booking = new Booking({
      name: "John Doe",
      email: "john.doe@example.com",
      checkin: "2022, 01, 01",
      checkout: "2022, 01, 04",
      discount: 20,
      room: { name: "Deluxe Room", rate: 200, discount: 150, bookings: [{ name: "John Doe", email: "john.doe@example.com", checkin: "2022, 01, 01", checkout: "2022, 01, 04", discount: 170, room: "deluxe room" }]}
    });
    expect(booking.fee).toBe(0);
  });
})