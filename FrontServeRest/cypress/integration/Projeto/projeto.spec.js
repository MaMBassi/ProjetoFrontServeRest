describe('Cenário de Teste: Testar funcionalidades de Login do Front - ServeRest', () => {

    it('Caso de Teste: Login válido com o usuário criado anteriormente por API', () => { 
        cy.visit('https://front.serverest.dev/');//visitar o site em teste
        cy.get('[data-testid="email"]').type('beltrano@qa.com.br');//preencher o campo do email
        cy.get('[data-testid="senha"]').type('teste');//preencher o campo da senha
        cy.get('[data-testid="entrar"]').click();//clicar no botão Entrar
    });

    it('Caso de Teste: Login inválido', () => { 
        cy.visit('https://front.serverest.dev/');
        cy.get('[data-testid="email"]').type('teste2@qa.com.br');
        cy.get('[data-testid="senha"]').type('teste');
        cy.get('[data-testid="entrar"]').click();
        //Verificar se o conteúdo do texto que aparece quando o login não é válido é Email e/ou senha inválidos
        cy.get('.alert > :nth-child(2)').should('contain.text','Email e/ou senha inválidos');   
    });

});