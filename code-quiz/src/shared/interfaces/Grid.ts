export enum TypeGrid {
    IMAGE = 'Image',
    TEXT  = 'Text', 
    INVITATION = 'Invitation'
}

export enum Side {
    LEFT = 'Left',
    RIGHT = 'Right',
    NONE = ''
}

export interface IGrid {
    type : TypeGrid;
    image: string;
    quote: string;
    name : string;
    justifySide?: Side;
}