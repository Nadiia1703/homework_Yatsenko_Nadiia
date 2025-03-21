describe('template spec', () => {
    before(() => {
        cy.visit('https://arx.com.ua/store/emtpl');
    });

    it('Buy MTPL test', () => {
        cy.get('#plateNumber').type('АА1234АВ');
        cy.get('.MuiButtonBase-root.MuiIconButton-root').click();
        cy.get('div .button__label').should('contain.text', 'Внести дані вручну');
        cy.get('div .button__label').click();

        //second page
        const typeOfCar = '.vehicle-type-button__title';
        cy.get(typeOfCar).then(() => {
            console.log('fhsdjfhdkfsdhfk');
        });

        const menuTypeOfCar: string[] = [];
        cy.get(typeOfCar).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                menuTypeOfCar.push(text.trim());
            });
        }).then(() => {
            expect(menuTypeOfCar).to.contain('Легковий');
        });

        cy.get('#vehicleShortGroupB_vt_b .vehicle-type-button__image_alt').click();
        cy.get('.mtpl-vehicle-group-component__label > span').should('contain.text', 'Легковий автомобіль');

        //page 3

        const menuSel = '.select-one-input.maxWidthForInput';
        cy.get(menuSel).eq(0).should('contain.text', 'Тип ТЗ').click();
        cy.get('[data-value="B3_1"]').click();
        cy.get(menuSel).eq(2).should('contain.text', 'Рік випуску ТЗ').click();
        cy.get('[data-value="2023"]').click();
        cy.get(menuSel).eq(3).should('contain.text', 'Рік народження власника ТЗ').click();
        cy.get('[data-value="1999"]').click();

        const city = '.shortcut-data > span';
        cy.get(city).eq(0).should('contain.text', 'Київ').click();

        cy.get('input[id="quotation.mtplContract.vehicle.brand"]').click(); // Відкрити список та ввести "Audi"
        cy.get('[role="listbox"]').should('be.visible'); // Чекаємо, поки список з'явиться
        cy.contains('[role="option"]', 'Audi').click(); // Вибрати "Audi" зі списку
        // cy.get('input[id="quotation.mtplContract.vehicle.brand"]').should('have.value', 'Audi');
        cy.get('.button').click();

        //page 4
        cy.wait(10000);
        cy.get('.package-select-form__salesprogram__label').should('contain.text', 'Оберіть програму страхування:');
        cy.get('#sales-packageBtn').click();
        cy.get('#vtpl-select__options__no-option').click();
        cy.get(':nth-child(5) > .button').click();
        //cy.get('.step-controls__next__button').should('contain.text', 'Далі').click();
        cy.get('.step-controls__next__button', { timeout: 100 })
            .should('contain.text', 'Далі')
            .and('not.be.disabled')
            .click();
    });

});
