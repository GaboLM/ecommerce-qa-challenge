describe('Agregado de productos al carrito de compras', () => {
  it('Agregar producto al carrito', () => {
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
    cy.get(':nth-child(1) > .text-center > a > .inline-block').click(); // Selector del primer producto en la lista de productos
    
    // Agregar el producto al carrito de compras
    cy.get('[data-test="main-products"]').click();
    cy.get(':nth-child(1) > .justify-between > [data-test="add-cart-btn"] > span').click(); // Selector del botón "Agregar al carrito"
        
    // Verificar que el producto se haya agregado correctamente al carrito
    cy.get('[data-test="cart-item-count"]').click(); // 
    cy.get(':nth-child(1) > .h-20').should('exist'); // Mensaje de éxito al agregar el producto al carrito
  });
});
