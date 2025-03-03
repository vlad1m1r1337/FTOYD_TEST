import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../components/header';

describe('Header Component', () => {
    it('should display error message when isError is true', () => {
        render(<Header isError={true} isLoading={false} />);
        expect(screen.getByText('Ошибка: не удалось загрузить информацию')).toBeInTheDocument();
    });
});