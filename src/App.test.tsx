import { render, screen, userEvent } from '@test/test-utils';

import App from '@App';

describe('App', () => {
  it('Geolocation button is visible', () => {
    render(<App />);
    expect(screen.getByText(/geolocation/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
