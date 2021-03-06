const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
      return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((totalDistance, journey) => {
      return totalDistance + journey.distance;
    }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  typesOfTransport = this.journeys
  const distinct = [...new Set(typesOfTransport.map(mode => mode.transport))];
  return distinct;
};



module.exports = Traveller;
