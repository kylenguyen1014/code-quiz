import { IGrid, Side, TypeGrid } from "../interfaces/Grid";
import image1 from '../../images/image_1.png';
import image2 from '../../images/image_2.png';
import image3 from '../../images/image_3.png';
import image4 from '../../images/image_4.png';
import image5 from '../../images/image_5.png';
import image6 from '../../images/image_6.png';
import image7 from '../../images/image_7.png';
import image8 from '../../images/image_8.png';

export const GridList : IGrid[] = [
    {type: TypeGrid.IMAGE, image: image1, name: '', quote: ''},
    {type: TypeGrid.IMAGE, image: image2, name: '', quote: ''},
    {type: TypeGrid.TEXT, image: '', name: 'Ernest Hemigway', quote: 'I drink to make other people more interesting', justifySide: Side.RIGHT},
    {type: TypeGrid.IMAGE, image: image3, name: '', quote: ''},
    {type: TypeGrid.IMAGE, image: image4, name: '', quote: ''},
    {type: TypeGrid.IMAGE, image: image5, name: '', quote: ''},
    {type: TypeGrid.TEXT, image: '', name: 'Ernest Hemigway', quote: 'I drink to make other people more interesting', justifySide: Side.lEFT},
    {type: TypeGrid.IMAGE, image: image6, name: '', quote: ''},
    {type: TypeGrid.IMAGE, image: image7, name: '', quote: ''},
    {type: TypeGrid.IMAGE, image: image8, name: '', quote: ''},
    {type: TypeGrid.INVITATION, image: '', name: '', quote: ''}
]