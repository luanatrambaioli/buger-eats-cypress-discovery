var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {      
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999238998',
            address: {
                postalcode: '22783124',
                street: 'Rua Escritor Rodrigo Melo Franco',
                number: '400',
                details: 'ap 1201 bloco 4',
                district: 'Barra da Tijuca',
                city_state: 'Rio de Janeiro/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}