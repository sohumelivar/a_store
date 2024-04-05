import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Buton/Button';

describe('Button', () => {
    test('renders learn react link', () => {
      render(<Button >Test</Button>);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('add class to className', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        // screen.debug();
    })
})