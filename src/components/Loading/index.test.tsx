import React from 'react'
import Loading from './index'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const makeSut = () => {
  render(
    <RecoilRoot>
      <Router>
        <Loading />
      </Router>
    </RecoilRoot>
  )
}

describe('Loading component', () => {
  it('should initially render the component the front text', () => {
    // arrange
    makeSut()

    // act
    const component = screen.getByTitle('loading-component')

    // assert
    expect(component).toBeDefined()
  })
})
