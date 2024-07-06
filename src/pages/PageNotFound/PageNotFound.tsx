import PageNotFoundCSS from './PageNotFound.module.css';
import N404 from '../../assets/images/N404.jpg';
import SimpleLayout from '../Layout/SimpleLayout';

const PageNotFound: React.FC = () => {
    return (
        <SimpleLayout>
            <div style={{ textAlign: 'center' }}>
                <img src={N404} alt="404" className={PageNotFoundCSS.image} />
            </div>
        </SimpleLayout>
    );
}


export default PageNotFound;