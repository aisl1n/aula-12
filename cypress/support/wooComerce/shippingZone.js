/// <reference types="cypress"/>

import token from '../../fixtures/token.json'

Cypress.Commands.add('postShippingZoneWooCommerce', (name) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/shipping/zones',
        headers: {
            Authorization: token.token
        },
        body: {
            name: name
        }
    })
})

Cypress.Commands.add('putShippingZoneWooCommerce', (order, id) => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + '/shipping/zones/' + id,
        headers: {
            Authorization: token.token
        },
        body: {
            order: order 
        }
    })
})