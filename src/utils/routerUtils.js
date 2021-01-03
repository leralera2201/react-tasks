import React from 'react';
import { MemoryRouter } from 'react-router';

import App from "../App";

export const componentWithRouter = (route='/', component = <App/>) => <MemoryRouter initialEntries={[route]} initialIndex={0}>
    {component}
</MemoryRouter>