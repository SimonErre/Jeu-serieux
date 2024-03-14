// Class representing a Statistic in the game
export class Statistic {
  id           // Identifier for the statistic
  label        // Label or name for the statistic
  defaultScore // Default score value for the statistic

  // Constructor to initialize a Statistic instance
  constructor(payload) {
    const { id, label, defaultScore } = payload
    this.id           = id
    this.label        = label
    this.defaultScore = defaultScore
  }
}
