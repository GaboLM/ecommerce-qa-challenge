describe('Navegación por la tienda', () => {
  it('Navegar por categorías y validar la categorización de productos', () => {
    // Visitar la página de inicio de sesión
    cy.visit('/login');

    // Completar el formulario de inicio de sesión con las credenciales proporcionadas
    cy.get('[data-test="login-btn"]').click();
    cy.get('[data-test="input-username"]').type('atuny0');
    cy.get('[data-test="input-password"]').type('9uQFF1Lh');

    // Enviar el formulario
    cy.get('[data-test="input-submit"]').click();
    
    // Navegar por la tienda y seleccionar un producto
    cy.visit('/products'); // Ingresar a la ventana Productos

    // Seleccionar una categoría y verificar la categorización de productos
    cy.get('.space-y-1 > :nth-child(1)').click(); // Selector del enlace de categoría "smartphones"
    cy.get('.col-span-4 > :nth-child(1) > .flex > .font-bold').should('have.text', 'smartphones'); // Verificar la categoría "smartphones"
    cy.get(':nth-child(2) > .pt-4 > .text-gray-500').should('have.text', 'smartphones'); // Verificar que se muestran productos en la categoría "smartphones"
    
    // Repetir el proceso para otra categoría 
    cy.get('.space-y-1 > :nth-child(2)').click(); // Selector del enlace de categoría "laptops"
    cy.get('.col-span-4 > :nth-child(1) > .flex > .font-bold').should('have.text', 'laptops'); // Verificar la categoría "laptops"
    cy.get(':nth-child(1) > .pt-4 > .text-gray-500').should('have.text', 'laptops'); // Verificar que se muestran productos en la categoría "laptops"

    // Repetir el proceso para otra categoría
    cy.get('.space-y-1 > :nth-child(8)').click(); // Selector del enlace de categoría "Tops"
    cy.get('.col-span-4 > :nth-child(1) > .flex > .font-bold').should('have.text', 'tops'); // Verificar la categoría "tops"
    cy.get(':nth-child(1) > .pt-4 > .text-gray-500').should('have.text', 'tops'); // Verificar que se muestran productos en la categoría "tops"
  });
});
