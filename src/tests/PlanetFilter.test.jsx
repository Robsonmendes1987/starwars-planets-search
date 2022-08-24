import React from 'react';
import { render, screen, waitFor  } from '@testing-library/react';

import FilterPlanets from '../Componentes/FilterPlanets'
import PlanetProvider from '../Componentes/PlanetProvider';
import userEvent from "@testing-library/user-event"
import App from '../App';
import Table from '../Componentes/Table';
import mokData from '../service/MokData'
describe('teste se renderiza o comopnente PlanetFilter', () => {
//     beforeEach(() => {
//       render(<PlanetProvider >

//     < FilterPlanets />
//   </PlanetProvider>);
// }) 


render(
    <PlanetProvider >
    < FilterPlanets />
      </PlanetProvider>);
  

it('Testese renderiza o botao e os textos', () => {
  const btn = screen.getByRole('button', {name: /filtrar/i})
  expect(btn).toBeInTheDocument()
  userEvent.click(btn)



})


it('Testese renderiza o botao e os textos', async() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mokData)
    }))
  
    render(
        <PlanetProvider  >
        < App />
          </PlanetProvider>);

          await waitFor(() => expect(fetch).toBeCalled());


          const Tatooine = await screen.findByText(/Tatooine/i)
          expect(Tatooine).toBeInTheDocument()

          const Alderaan = await screen.findByText(/Alderaan/i)
          expect(Alderaan).toBeInTheDocument()


          const YavinIV = await screen.findByText(/Yavin IV/i)
          expect(YavinIV).toBeInTheDocument()

          const Hoth = await screen.findByText(/Hoth/i)
          expect(Hoth).toBeInTheDocument()
})

})

it('Testese renderiza o botao e ao clicar os textos de busca os textos', async() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mokData)
    }))
  
    render(
        <PlanetProvider  >
        < App />
          </PlanetProvider>);

await waitFor(() => expect(fetch).toBeCalled())
const btn =  screen.getByTestId("button-filter")
expect(btn).toBeInTheDocument()

userEvent.click(btn)

const getTagSelect = screen.getByTestId("column-filter")
expect(getTagSelect).toBeInTheDocument()


const btn2 =  screen.getByTestId("button-filter")
expect(btn2).toBeInTheDocument()
const getTagSelect2 = screen.getByTestId("comparison-filter")
expect(getTagSelect2).toBeInTheDocument()
const text = screen.getByText(/Climate/i)
expect(text).toBeInTheDocument()

})



