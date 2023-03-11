import { render, screen } from '@test/test-utils';

import App from '@App';

describe('App', () => {
  it('Geolocation button is visible', () => {
    render(<App />);
    expect(screen.getByLabelText(/Geolocation button/i)).toBeInTheDocument();
  });
});
