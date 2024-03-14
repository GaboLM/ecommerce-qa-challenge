describe('Inicio de sesión', () => {
  it('Iniciar sesión con credenciales válidas', () => {
    // Visitar la página de inicio de sesión
    cy.visit('/login');

    // Completar el formulario de inicio de sesión con las credenciales proporcionadas
    cy.get('[data-test="login-btn"]').click();
    cy.get('[data-test="input-username"]').type('atuny0');
    cy.get('[data-test="input-password"]').type('9uQFF1Lh');

    // Enviar el formulario
    cy.get('[data-test="input-submit"]').click();

    // Verificar que se haya iniciado sesión correctamente
    cy.get('[data-test="username-popup"]').should('have.text', 'atuny0'); // Verificar que se ha iniciado sesión
    
    // Ingresar al objeto Account    
    cy.get('[data-test="username-popup"]').click();
    cy.get('[data-test="popup-content-list"]').click();
    cy.visit('/Account');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'atuny0'); // Verificar que se ha iniciado sesión

  });
});
