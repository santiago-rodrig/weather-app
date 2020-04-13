/* eslint-disable import/no-unresolved */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'alertifyjs/build/css/alertify.min.css';
/* eslint-enable import/no-unresolved */

import '../scss/style.scss';
import mainComponent from './main_component';
import searchForm from './search_component';
import headingComponent from './heading_component';
import sourceLinkComponent from './see_source_component';

document.body.append(
  headingComponent, mainComponent, searchForm, sourceLinkComponent,
);
