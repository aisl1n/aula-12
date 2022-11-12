/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import shippingZoneSchema from '../../contratos/shippingZone'

describe('Shipping Zone', () => {
    const zoneName = faker.address.country()
    const id = 2
    const order = 2

    it('Create Shipping Zone - Aceitação', () => {
        cy.postShippingZoneWooCommerce(zoneName).should((postShippingZoneResponse) => {
            expect(postShippingZoneResponse.status).to.be.eq(201)
            expect(postShippingZoneResponse.body.name).to.be.eq(zoneName)
        })
    })

    it('Cadastro de shipping Zone - Contrato', () => {
        cy.postShippingZoneWooCommerce(zoneName).should((postShippingZoneResponse) => {
            return shippingZoneSchema.validateAsync(postShippingZoneResponse.body)
        })
    })

    it('Update Shipping Zone - Aceitação', () => {
        cy.putShippingZoneWooCommerce(order, id).should((putShippingZoneResponse) => {
            expect(putShippingZoneResponse.status).to.be.eq(200)
            expect(putShippingZoneResponse.body.id).to.be.eq(id)
            expect(putShippingZoneResponse.body.order).to.be.eq(order)
        })
    })
})