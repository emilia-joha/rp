type Weapon = {
  type: 'Simple' | 'Simple range' | 'Martial' | 'Martial range';
  name: string;
  damage: string;
  dex: boolean;
};

type Race = {
  name: string;
  darkvision: number;
  speed: number;
  size: 'Small' | 'Medium' | 'Small or Medium' | 'Small to Medium';
  subclasses: string[];
};

type Class = {
  name: string;
  hitDie: string;
  subclasses: string[];
};

type Background = {
  name: string;
  proficiencies: string[];
};
