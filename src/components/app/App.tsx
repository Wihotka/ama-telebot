import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {Router} from '@modules/router';
import {store} from 'store';
import {Preloader} from '@components/modules/common/preloader';

export const App = () =>
    <Provider store={store}>
        <Suspense fallback={<Preloader/>}>
            <Router/>
        </Suspense>
    </Provider>;