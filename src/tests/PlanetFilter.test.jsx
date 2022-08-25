import React from 'react';
import { render, screen, waitFor, fireEvent  } from '@testing-library/react';

import FilterPlanets from '../Componentes/FilterPlanets'
import PlanetProvider from '../Componentes/PlanetProvider';
import userEvent from "@testing-library/user-event"
import App from '../App';
import Table from '../Componentes/Table';
import mokData from '../service/MokData'
describe('teste se renderiza o comopnente PlanetFilter', () => {


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


it('Testese Filtro igual a', async() => {
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


const getTagSelect = screen.getByTestId("column-filter")
expect(getTagSelect).toBeInTheDocument()


const btn2 =  screen.getByTestId("button-filter")
userEvent.selectOptions(getTagSelect, 'surface_water')
const getTagSelect2 = screen.getByTestId("comparison-filter")
userEvent.selectOptions(getTagSelect2,'igual a' )
expect(getTagSelect2).toHaveValue('igual a')
expect(getTagSelect).toHaveValue('surface_water')
const btn3 =  screen.getByTestId("value-filter")
userEvent.type(btn3,'12')
expect(btn3).toHaveValue(12)
userEvent.click(btn)
const text1 = screen.getByText(/Naboo/i)
expect(text1).toBeInTheDocument()

// expect(btn2).toBeInTheDocument()
// expect(getTagSelect2).toBeInTheDocument()

})

it('Testese Filtro menor que', async() => {
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


const getTagSelect = screen.getByTestId("column-filter")
expect(getTagSelect).toBeInTheDocument()


const btn2 =  screen.getByTestId("button-filter")
userEvent.selectOptions(getTagSelect, 'surface_water')
const getTagSelect2 = screen.getByTestId("comparison-filter")
userEvent.selectOptions(getTagSelect2,'menor que' )
expect(getTagSelect2).toHaveValue('menor que')
expect(getTagSelect).toHaveValue('surface_water')
const btn3 =  screen.getByTestId("value-filter")
userEvent.type(btn3,'12')
expect(btn3).toHaveValue(12)
userEvent.click(btn)
const text1 = screen.getByText(/Tatooine/i)
expect(text1).toBeInTheDocument()

// expect(btn2).toBeInTheDocument()
// expect(getTagSelect2).toBeInTheDocument()

})

it('Testese Filtro menor que', async() => {
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

const getName =  screen.getByTestId('name-filter')
userEvent.type(getName, 'Tatooine')

userEvent.click(btn)
const text1 = screen.getByText(/Tatooine/i)
expect(text1).toBeInTheDocument()

// expect(btn2).toBeInTheDocument()
// expect(getTagSelect2).toBeInTheDocument()

})

})

