import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props => {

    
    return(
    <div className='card-list'>{
            props.figures.map(figure => <Card key={figure.id} figure= {figure} />
                )
          }

    </div>);
};