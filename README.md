# Gerador de NIFs

Este é um projeto para gerar números de identificação fiscal (NIFs) válidos para diferentes tipos de contribuintes em Portugal. O projeto oferece uma interface simples e permite ao utilizador selecionar o tipo de NIF desejado, gerando um número válido de acordo com as regras fiscais portuguesas.

## Funcionalidades

- **Geração de NIFs** para diversos tipos de contribuintes, incluindo:
  - Indivíduos singulares (prefixos 1, 2, 3)
  - NIFs de não residentes (prefixo 45)
  - Coletivas (prefixo 5)
  - Coletivas públicas (prefixo 6)
  - Sócios individuais (prefixo 8)
  - Números provisórios ou irregulares (prefixo 9)
  - Organismos (prefixo 6)
  - Heranças (prefixos 70, 74, 75)
- **Validação do NIF** com base no algoritmo oficial do [NIF.PT](https://nif.pt).

## Tecnologias

- **Next.js**: Framework para construção da aplicação.
- **Tailwind CSS**: Framework para estilização e design responsivo.

## Como Usar

1. Clone o repositório:

   `git clone https://github.com/seu-usuario/nif-fresquinho.git`

2. Instale as dependências:

   `cd nif-fresquinho`
   
   `npm install`

3. Execute a aplicação:

   `npm run dev`

4. Aceda à aplicação no navegador em `http://localhost:3000`.

## Como Funciona

1. O utilizador escolhe o tipo de NIF que deseja gerar (individual, coletivo, não residente, etc.).
2. O sistema gera um número de NIF válido com base no tipo selecionado.
3. A validação é feita em tempo real e o resultado é exibido na interface.

## Contribuir

As contribuições são bem-vindas! Se deseja melhorar o projeto, siga os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit as suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o ficheiro [LICENSE](LICENSE) para mais detalhes.

## Disclaimer

Este gerador de NIFs é uma ferramenta experimental e não deve ser utilizado para fins ilegais ou fraudulentos. O uso para fins não autorizados é de responsabilidade do usuário.