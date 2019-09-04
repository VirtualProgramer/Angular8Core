export class Character {
  public characterId: number;
  public name: string;
  public level: number;
  public factionId: number;
  public raceId: number;
  public serviceId: number;
  public classId: number;
}

export class CharacterWithName extends Character {
  public factionName: string;
  public raceName: string;
  public serviceName: string;
  public className: string;
}

export class Class {
  public classId: number;
  public className: string;
}

export class Service {
  constructor(
    public serviceId: number,
    public serviceName: string,
  ) { }
}

export class Race {
  public raceId: number;
  public raceName: string;
}

export class Faction {
  public factionId: number;
  public factionName: string;
}
