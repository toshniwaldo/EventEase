const eventModel = require("../models/eventModel");
const toRadians = (degrees) => (degrees * Math.PI) / 180;

const geofenceMiddleware = async (req, res, next) => {
  const { eventId, latitude, longitude } = req.body;

  if (eventId === undefined || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Missing eventId, latitude, or longitude in the request body." });
  }

  try {
    const event = await eventModel.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const [eventLon, eventLat] = event.location.coordinates;
    const radius = event.radius;

    const dLat = toRadians(latitude - eventLat);
    const dLon = toRadians(longitude - eventLon);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(eventLat)) *
      Math.cos(toRadians(latitude)) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c;

  // Console log event and user coordinates before next middleware
  console.log("Event Latitude:", eventLat, " Event Longitude:", eventLon);
  console.log("User Latitude:", latitude, " User Longitude:", longitude);


    if (distance > radius) {
      return res.status(403).json({
        error: "User is outside the event geofence.",
        userLocation: { latitude, longitude },
        eventLocation: { latitude: eventLat, longitude: eventLon },
        distance: distance.toFixed(2) + ' km',
        allowedRadius: radius + ' km',
      });
    }

    req.userLocation = { latitude, longitude };
    next();

  } catch (error) {
    console.error("Error in geofence middleware:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
};

module.exports = geofenceMiddleware;