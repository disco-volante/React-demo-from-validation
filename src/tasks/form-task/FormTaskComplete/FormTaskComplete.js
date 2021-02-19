import React from 'react';

import ErrorBoundary from '../containers/ErrorBoundary';
import Form from '../pages/Form';

export const FormTaskComplete = () => (<ErrorBoundary><Form /></ErrorBoundary>);
