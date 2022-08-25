import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Table from '../Componentes/Table';
import FilterPlanets from '../Componentes/FilterPlanets'
import PlanetProvider from '../Componentes/PlanetProvider';
// import { renderWithRouterAndRedux } from './helpers/renderWith';

import AppContext from '../Componentes/AppContext'

describe('I am your test', () => {
  beforeEach(() => {
    render(<PlanetProvider >
      <Table />
      {/* < FilterPlanets /> */}
    </PlanetProvider>);
  }) 

  it('teste', () => {
        const title1 = screen.getByText(/name/i)
        expect(title1).toBeInTheDocument()

        
        const title2 = screen.getByText(/Orbtal Period/i)
        expect(title2).toBeInTheDocument()
        
        const title3 = screen.getByText(/Diameter/i)
        expect(title3).toBeInTheDocument()
        
        const title4 = screen.getByText(/Climate/i)
        expect(title4).toBeInTheDocument()
        
        const title5 = screen.getByText(/Gravity/i)
        expect(title5).toBeInTheDocument()
        
        const title6 = screen.getByText(/Terrain/i)
        expect(title6).toBeInTheDocument()
        
        const title7 = screen.getByText(/Surface Water/i)
        expect(title7).toBeInTheDocument()
        
        const title8 = screen.getByText(/Population/i)
        expect(title8).toBeInTheDocument()
        
        const title9 = screen.getByText(/Filmes/i)
        expect(title9).toBeInTheDocument()
        
        const title10 = screen.getByText(/Created/i)
        expect(title10).toBeInTheDocument()
        
        const title11 = screen.getByText(/Edited/i)
        expect(title11).toBeInTheDocument()
        
        const title12 = screen.getByText(/URL/i)
        expect(title12).toBeInTheDocument()

        const title13 = screen.getByText(/Rotation period/i)
        expect(title13).toBeInTheDocument()

      })
      it('tste', () => {
        // global.fetch = jest.fn(() => Promise.resolve({
        //   json: () => Promise.resolve(mokData)
        // }))
        
        render(
          <PlanetProvider  >
          < App />
            </PlanetProvider>);
            const getinput = screen.getByTestId('column-filter');
            userEvent.selectOptions(getinput, 'population');
            expect(getinput).toHaveValue('population') 
            
            const getinput2 = screen.getByTestId('comparison-filter');
            userEvent.selectOptions(getinput2, 'menor que');
            expect(getinput2).toHaveValue('menor que') 
            
            // const getinput3 = screen.getByTestId('value-filter')
            // userEvent.type(getinput3, '10');
            // expect(getinput3).toHaveValue('10') 
            

      })
    });
    
  





