interface IDirectionObject {
  left: string;
  right: string;
  move: () => void;
}

interface ICalculationDirectionObject {
  N: IDirectionObject;
  S: IDirectionObject;
  E: IDirectionObject;
  W: IDirectionObject;
}

type DirectionType = keyof ICalculationDirectionObject;

export { ICalculationDirectionObject, IDirectionObject, DirectionType };
