import { compose } from 'recompose';

import Photo from '../components/Photo';
import withPhotoBoxEmpty from './withPhotoBoxEmpty';

const withPhotoBoxCompose = compose(
    withPhotoBoxEmpty
);

export default withPhotoBoxCompose(Photo);