/* eslint-disable import/no-unresolved */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'alertifyjs/build/css/alertify.min.css';
/* eslint-enable import/no-unresolved */

import '../scss/style.scss';
import { getData } from './weather';
import centralComponent from './central_component';
import searchForm from './search_component';

getData('Bogotá,co');
document.body.append(centralComponent, searchForm);
