import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('TEST APP', () => {
  test('renders elements', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

//   test('renders learn react link', async () => {
//     render(<App />);
//     // const helloWorldElem = screen.queryByText(/hello2 world/i);
//     // expect(helloWorldElem).toBeNull();
//     screen.debug();
//     const helloWorldElem = await screen.findByText(/data/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(helloWorldElem).toHaveStyle({color: 'red'});
//     screen.debug();
//   });

//   test('CLICK EVENT', async () => {
//     render(<App />);
//     screen.debug();
//     const btn = screen.getByTestId('toggle-btn');
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//   });

//   test('INPUT EVENT', async () => {
//     render(<App />);
//     screen.debug();
//     const input = screen.getByPlaceholderText(/input value/i);
//     expect(screen.queryByTestId('value-elem')).toContainHTML('');
//     // Искусственное событие
//     // fireEvent.input(input, {
//     //   target: { value: '123123' },
//     // });
//     // Близко к пользователям, обрабатываются события нажатия клавиш и т д
//     userEvent.type(input, '123123');
//     expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
//   });
});
